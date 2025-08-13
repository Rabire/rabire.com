"use server";

import { Resend } from "resend";
import { contactSchema } from "./schema";

function isEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

type ActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContact(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { status: "error", message: "Missing RESEND_API_KEY" };
    }

    const raw = {
      name: String(formData.get("name") || ""),
      details: String(formData.get("details") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return {
        status: "error",
        message: "Invalid payload",
      };
    }

    const { name, details, subject, message } = parsed.data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, 'Apple Color Emoji', 'Segoe UI Emoji'"> 
        <h2 style="margin:0 0 12px 0">Nouveau message de contact</h2>
        <p style="margin:0 0 8px 0"><strong>Nom:</strong> ${name}</p>
        <p style="margin:0 0 8px 0"><strong>Détails:</strong> ${details}</p>
        <p style="margin:0 0 8px 0"><strong>Sujet:</strong> ${subject}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
        <div>
          <p style="white-space:pre-wrap;margin:0">${message}</p>
        </div>
      </div>
    `;

    const text = `Nouveau message de contact\n\nNom: ${name}\nDétails: ${details}\nSujet: ${subject}\n\n${message}`;

    const replyTo = isEmail(details) ? details : undefined;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rabireh@outlook.fr"],
      subject: `[Rabire.com - contact] ${subject}`,
      html,
      text,
      replyTo,
    });

    if (error) {
      return { status: "error", message: error.message };
    }

    return { status: "success" };
  } catch (err) {
    return { status: "error", message: (err as Error).message };
  }
}
