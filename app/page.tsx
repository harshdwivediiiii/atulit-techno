import { AboutSection } from "@/components/site/about-section";
import { BenefitsSection } from "@/components/site/benefits-section";
import { ContactSection } from "@/components/site/contact-section";
import { HeroSection } from "@/components/site/hero-section";
import { InfrastructureSection } from "@/components/site/infrastructure-section";
import { ProcessSection } from "@/components/site/process-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { SiteNavbar } from "@/components/site/site-navbar";
import { TeamSection } from "@/components/site/team-section";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection />
        <BenefitsSection />
        <InfrastructureSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}
