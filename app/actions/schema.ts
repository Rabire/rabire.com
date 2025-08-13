import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  details: z
    .string()
    .min(10, "Veuillez saisir un email ou un numéro de téléphone"),
  subject: z.string().min(5, "L'objet doit comporter au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit comporter au moins 10 caractères"),
});
