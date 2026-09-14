import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Experience, Journey, Metrics, Philosophy } from "@/components/site/Sections";
import { CaseStudies, Projects } from "@/components/site/Work";
import { Education, Skills, Vision } from "@/components/site/Profile";
import { Contact, Footer } from "@/components/site/Contact";

const SITE_URL = "https://abhijitjadhav.in";
const PAGE_URL = `${SITE_URL}/`;
const TITLE = "Abhijit Jadhav | Professional Portfolio";
const DESCRIPTION =
  "Abhijit Jadhav — professional portfolio featuring experience, projects, technical skills, achievements, career journey, and professional profile.";
const OG_IMAGE = `${SITE_URL}/abhijit-jadhav-profile-photo.jpg`;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${PAGE_URL}#webpage`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Abhijit Jadhav — professional profile photo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": PERSON_ID,
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
            },
            {
              "@type": "WebSite",
              "@id": WEBSITE_ID,
              url: SITE_URL,
              name: "Abhijit Jadhav",
              publisher: { "@id": PERSON_ID },
            },
            {
              "@type": "WebPage",
              "@id": WEBPAGE_ID,
              url: PAGE_URL,
              name: TITLE,
              description: DESCRIPTION,
              isPartOf: { "@id": WEBSITE_ID },
              about: { "@id": PERSON_ID },
              primaryImageOfPage: OG_IMAGE,
            },
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
