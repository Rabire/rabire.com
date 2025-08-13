"use client";

import { sendCallback } from "@/app/actions/send-callback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Envoi…" : "Envoyer"}
    </Button>
  );
}

const FooterCallbackForm = () => {
  const [state, action] = useActionState(sendCallback, { status: "idle" });

  useEffect(() => {
    if (state.status === "success") {
      const input = document.querySelector<HTMLInputElement>(
        'input[name="phone"]'
      );
      if (input) input.value = "";
    }
  }, [state.status]);

  return (
    <form className="mt-4 flex items-center gap-2" action={action}>
      <Input
        name="phone"
        type="tel"
        placeholder="Votre numéro de téléphone"
        aria-invalid={state.status === "error"}
      />
      <SubmitButton />
      {state.status === "error" && (
        <span className="text-sm text-red-500">
          Échec. {"message" in state ? state.message : ""}
        </span>
      )}
      {state.status === "success" && (
        <span className="text-sm text-green-600">Envoyé.</span>
      )}
    </form>
  );
};

export default FooterCallbackForm;
