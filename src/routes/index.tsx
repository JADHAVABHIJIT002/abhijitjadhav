import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Experience, Journey, Metrics, Philosophy } from "@/components/site/Sections";
import { CaseStudies, Projects } from "@/components/site/Work";
import { Education, Skills, Vision } from "@/components/site/Profile";
import { Contact, Footer } from "@/components/site/Contact";

const TITLE = "Abhijit Jadhav | Product Manager | AI/ML & Generative AI";
const DESCRIPTION =
  "Abhijit Jadhav is a Product Manager specializing in AI/ML, Generative AI, product strategy, automation, data-driven products and business impact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abhijit Jadhav",
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
