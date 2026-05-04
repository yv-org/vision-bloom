import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yv/Nav";
import { Hero } from "@/components/yv/Hero";
import { About } from "@/components/yv/About";
import { VisionMission } from "@/components/yv/VisionMission";
import { SDG } from "@/components/yv/SDG";
import { Programs } from "@/components/yv/Programs";
import { Journey } from "@/components/yv/Journey";
import { Impact } from "@/components/yv/Impact";
import { Stories } from "@/components/yv/Stories";
import { Collaborate } from "@/components/yv/Collaborate";
import { Events } from "@/components/yv/Events";
import { ImpactPath } from "@/components/yv/ImpactPath";
import { Donate } from "@/components/yv/Donate";
import { Team } from "@/components/yv/Team";
import { Contact } from "@/components/yv/Contact";
import { Footer } from "@/components/yv/Footer";

const TITLE = "Youth Vision Organisation | Youth Empowerment, Mental Health & Volunteering in Sri Lanka";
const DESC = "Youth Vision Organisation is a youth-led nonprofit movement based in Colombo, Sri Lanka, empowering young people through mental health awareness, spiritual growth, mentorship, motivation, leadership, and SDG-based community volunteering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Youth Vision Organisation, YV Org, youth empowerment Sri Lanka, mental health awareness, youth volunteering, nonprofit Colombo, spiritual growth, youth mentorship, leadership development, SDG volunteering Sri Lanka" },
      { name: "author", content: "Youth Vision Organisation" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_LK" },
      { property: "og:site_name", content: "Youth Vision Organisation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "geo.region", content: "LK-1" },
      { name: "geo.placename", content: "Colombo, Western Province, Sri Lanka" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Youth Vision Organisation",
          alternateName: "YV Org",
          url: "https://youthvision.lk",
          email: "youthvision.lk@gmail.com",
          telephone: "+94 112 417 309",
          foundingDate: "2025",
          slogan: "Your Vision. Your Power. Your Future.",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Colombo",
            addressRegion: "Western Province",
            addressCountry: "LK",
          },
          areaServed: "LK",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <VisionMission />
      <SDG />
      <Programs />
      <Journey />
      <Impact />
      <Stories />
      <Collaborate />
      <Events />
      <ImpactPath />
      <Donate />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
