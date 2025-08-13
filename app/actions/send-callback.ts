"use server";

import { Resend } from "resend";

type ActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

function normalizePhone(input: string): string {
  return input.trim();
}

function isLikelyPhone(input: string): boolean {
  const cleaned = input.replace(/[^0-9+()\-\s]/g, "");
  if (cleaned.length < 7) return false;
  return /[0-9]{6,}/.test(cleaned);
}

export async function sendCallback(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { status: "error", message: "Missing RESEND_API_KEY" };
    }

    const phoneRaw = String(formData.get("phone") || "");
    const phone = normalizePhone(phoneRaw);
    if (!isLikelyPhone(phone)) {
      return { status: "error", message: "Numéro invalide" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, 'Apple Color Emoji', 'Segoe UI Emoji'"> 
        <h2 style="margin:0 0 12px 0">Demande de rappel</h2>
        <p style="margin:0 0 8px 0"><strong>Téléphone:</strong> ${phone}</p>
        <p style="margin:16px 0 0 0;color:#666">Ce message a été généré depuis le footer du site.</p>
      </div>
    `;

    const text = `Demande de rappel\n\nTéléphone: ${phone}\n\nGénéré depuis le footer du site.`;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rabireh@outlook.fr"],
      subject: `[Rabire.com - rappel] Nouveau numéro`,
      html,
      text,
    });

    if (error) {
      return { status: "error", message: error.message };
    }

    return { status: "success" };
  } catch (err) {
    return { status: "error", message: (err as Error).message };
  }
}
