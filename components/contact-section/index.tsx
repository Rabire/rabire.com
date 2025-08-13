"use client";

import { contactSchema } from "@/app/actions/schema";
import { sendContact } from "@/app/actions/send-contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Animated from "../animated";
import ContactDetails from "./details";

const ContactSection = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    defaultValues: {
      name: "",
      details: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const [state, formAction] = useActionState(sendContact, { status: "idle" });

  useEffect(() => {
    if (state.status === "success") {
      form.reset();
    }
  }, [state.status, form]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Envoi…" : "Envoyer le message"}
      </Button>
    );
  }

  return (
    <section id="contact" className="screen-wrapper">
      <div className="text-center mb-12">
        <Animated>
          <h2 className="title mb-4">On en discute ?</h2>
        </Animated>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Je suis ouvert à échanger sur les opportunités qui pourraient écrire
          le prochain chapitre de ma carrière.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContactDetails />

        {/* Contact Form */}
        <Card className="h-full lg:col-span-2 border-primary/50">
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-6"
                action={formAction}
                onSubmit={async (e) => {
                  // Valide côté client; si invalide, bloque l'envoi server action
                  const isValid = await form.trigger();
                  if (!isValid) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre nom</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ou le nom de votre entreprise"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre téléphone ou email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Selon vos préférences"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objet</FormLabel>
                      <FormControl>
                        <Input placeholder="De quoi s'agit-il ?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                          placeholder="Dites-moi tout..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {state.status === "error" && (
                  <p className="text-red-500 text-sm">
                    {(state as any).message || "Une erreur est survenue."}
                  </p>
                )}
                {state.status === "success" && (
                  <p className="text-green-600 text-sm">
                    Message envoyé avec succès.
                  </p>
                )}

                <div className="flex justify-center">
                  <SubmitButton />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
