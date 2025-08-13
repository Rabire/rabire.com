"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import Animated from "../animated";
import ContactDetails from "./details";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  details: z
    .string()
    .min(10, "Veuillez saisir un email ou un numéro de téléphone"),
  subject: z.string().min(5, "L'objet doit comporter au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit comporter au moins 10 caractères"),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      details: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Formulaire de contact soumis :", data);
    // Here you would typically send the data to your backend
    form.reset();
  };

  // TODO: plug form

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
                onSubmit={form.handleSubmit(onSubmit)}
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

                <div className="flex justify-center">
                  <Button type="submit" className="w-full sm:w-auto">
                    Envoyer le message
                  </Button>
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
