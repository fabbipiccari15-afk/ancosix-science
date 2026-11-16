import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../components/ancosix/hooks";
import { I18nProvider } from "../components/ancosix/i18n";
import { Header } from "../components/ancosix/Header";
import { Hero } from "../components/ancosix/Hero";
import { SectionProblema } from "../components/ancosix/SectionProblema";
import { SectionSoluzione } from "../components/ancosix/SectionSoluzione";
import { SectionScienza } from "../components/ancosix/SectionScienza";
import { SectionApplicazioni } from "../components/ancosix/SectionApplicazioni";
import { SectionProgetto } from "../components/ancosix/SectionProgetto";
import { SectionTeam } from "../components/ancosix/SectionTeam";
import { SectionContatti } from "../components/ancosix/SectionContatti";
import { Footer } from "../components/ancosix/Footer";
import { PhoneBubble } from "../components/ancosix/PhoneBubble";

const SITE_URL = "https://ancosix-science.vibepreview.app";
const OG_IMAGE =
  "https://vibe.filesafe.space/1790897558817574139/assets/3059d66a-ab61-4795-bdf1-e5b3d1a91e7f.png";

// Structured data: the CREA research organization behind the project.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CREA — Consiglio per la ricerca in agricoltura e l'analisi dell'economia agraria",
  alternateName: "CREA",
  url: "https://www.crea.gov.it",
  email: "ancosix@crea.gov.it",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IT",
  },
  description:
    "Consiglio per la ricerca in agricoltura e l'analisi dell'economia agraria — ente di ricerca italiano.",
};

// Structured data: the ANCoSIX research project itself.
const PROJECT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: "ANCoSIX",
  description:
    "Progetto ANCoSIX: estratto brevettato di bucce di melograno (Punica granatum), antimicrobico e antiossidante, scientificamente validato contro la Xylella fastidiosa per la difesa del patrimonio olivicolo del Mediterraneo.",
  url: SITE_URL,
  image: OG_IMAGE,
  funding: {
    "@type": "Grant",
    name: "ANCoSIX — Antagonista naturale della Xylella",
  },
  sponsor: {
    "@type": "Organization",
    name: "CREA",
    url: "https://www.crea.gov.it",
  },
  keywords: [
    "Xylella fastidiosa",
    "Punica granatum",
    "melograno",
    "olivicoltura",
    "antimicrobico naturale",
    "CoDiRo",
    "CREA",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANCoSIX — La Xylella ha un avversario naturale | CREA" },
      {
        name: "description",
        content:
          "ANCoSIX: estratto brevettato di bucce di melograno, antimicrobico e antiossidante, scientificamente validato contro la Xylella fastidiosa. Un progetto CREA per il patrimonio olivicolo del Mediterraneo.",
      },
      { property: "og:title", content: "ANCoSIX — La Xylella ha un avversario naturale" },
      {
        property: "og:description",
        content:
          "Estratto brevettato di bucce di melograno — antimicrobico, antiossidante, testato in campo. Un progetto CREA contro la Xylella fastidiosa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "it_IT" },
      { property: "og:site_name", content: "ANCoSIX — CREA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANCoSIX — La Xylella ha un avversario naturale" },
      {
        name: "twitter:description",
        content:
          "Estratto brevettato di bucce di melograno — antimicrobico, antiossidante, testato in campo. Un progetto CREA contro la Xylella fastidiosa.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(PROJECT_JSONLD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <I18nProvider>
      <div className="bg-ancosix-dark font-body text-ancosix-cream">
        <Header />
        <main>
          <Hero />
          <SectionProblema />
          <SectionSoluzione />
          <SectionScienza />
          <SectionApplicazioni />
          <SectionProgetto />
          <SectionTeam />
          <SectionContatti />
        </main>
        <Footer />
        <PhoneBubble />
      </div>
    </I18nProvider>
  );
}

export default Index;
