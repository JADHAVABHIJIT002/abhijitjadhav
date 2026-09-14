import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Experience, Journey, Metrics, Philosophy } from "@/components/site/Sections";
import { CaseStudies, Projects } from "@/components/site/Work";
import { Education, Skills, Vision } from "@/components/site/Profile";
import { Contact, Footer } from "@/components/site/Contact";

const SITE_URL = "https://abhijitjadhav.in";
const TITLE = "Abhijit Jadhav | Product Manager | AI/ML & Generative AI";
const DESCRIPTION =
  "Abhijit Jadhav is a Product Manager specializing in AI/ML, Generative AI, product strategy, automation, data-driven products and business impact.";
const OG_IMAGE = `${SITE_URL}/profile.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Abhijit Jadhav, Product Manager, AI Product Manager, Generative AI, AI/ML, product strategy, automation, GenAI product management",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Abhijit Jadhav, Product Manager and AI specialist" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abhijit Jadhav",
          url: SITE_URL,
          image: OG_IMAGE,
          jobTitle: "Product Manager | AI/ML & Generative AI Specialist",
          description: DESCRIPTION,
          email: "mailto:jadhavabhijeet002@gmail.com",
          worksFor: { "@type": "Organization", name: "Masai School" },
          sameAs: [
            "https://www.linkedin.com/in/abhijit-jadhav-133833227",
            "https://github.com/JADHAVABHIJIT002",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Metrics />
        <Experience />
        <Projects />
        <CaseStudies />
        <Philosophy />
        <Skills />
        <Education />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
