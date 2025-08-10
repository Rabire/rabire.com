import AboutSection from "@/components/about-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <CtaSection />

      <ProjectsSection />

      <div>TODO: contact </div>

      <Footer />
    </main>
  );
}

// 1. Hero section (haut de page)
//     Photo pro (sobre, fond uni ou légèrement flouté)
//     Titre accrocheur → ton métier + spécialité + impact (“Développeur Fullstack | J’aide les entreprises à créer des apps performantes et scalables”)
//     Phrase de valeur → en une ligne, ce qui te distingue (“Je transforme des idées en produits digitaux robustes et simples à utiliser.”)
//     Bouton CTA → “Me contacter” ou “Télécharger mon CV”
// 2. Présentation rapide (“About”)
//     Ton nom, rôle, localisation
//     Mini-bio (2-3 phrases)
//     Ta philosophie ou ton approche du développement
//     1 ou 2 éléments différenciants (ex : rôle de CTO jeune, projets menés de bout en bout, expertise sur stack précise)
// 3. Compétences clés (Core Skills)
// Présentées avec un mélange de technos et de savoir-faire concrets :
//     Frontend (React, Next.js…)
//     Backend (Node.js, Express, Prisma…)
//     Bases de données (PostgreSQL, MongoDB…)
//     Autres (Git, Docker, API GraphQL, intégrations externes, optimisation perf, sécurité…
//     💡 Astuce : plutôt que juste “React”, dire “React – interfaces rapides et responsives”
// 4. Projets marquants (Portfolio)
// 2 à 4 projets max, chacun avec :
//     Nom + image capture écran
//     Contexte → pourquoi le projet a été créé
//     Ton rôle précis
//     Stack utilisée
//     Résultat concret (chiffre, performance, adoption, gain de temps…)
//     Lien démo/GitHub si possible
// 5. Expériences professionnelles
//     Postes occupés (focus sur les plus pertinents pour un CDI dev)
//     2-3 bullet points par poste → missions + résultats concrets
//     Mettre en avant responsabilités, leadership, travail d’équipe
// 6. Méthode de travail
//     Comment tu gères un projet du brief à la mise en prod
//     Communication avec les équipes
//     Qualité de code / bonnes pratiques
//     Adaptabilité et apprentissage rapide
// 7. Témoignages / Références
//     Avis de collègues, supérieurs, clients
//     Citations courtes et authentiques
//     Logo LinkedIn ou lien vers profil avec recommandations
// 8. Contact & Call-to-Action final
//     Boutons clairs (“Discutons ensemble” / “Planifier un appel”)
//     Email cliquable
//     LinkedIn
//     GitHub
//     (optionnel) Formulaire de contact
// 9. Footer simple
//     Rappel de ton nom + métier
//     Liens essentiels (LinkedIn, GitHub, CV PDF)
