"use client";

import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import SocialSection from "@/app/components/SocialSection";
import EventsSection from "@/app/components/EventsSection";
import CollaborationSection from "@/app/components/CollaborationSection";
import TeamSection from "@/app/components/TeamSection";
import PartnersSection from "@/app/components/PartnersSection";
import ContributorsSection from "@/app/components/ContributorsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import BackgroundEffects from "@/app/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03030a]">
      <BackgroundEffects />

      <Navigation />

      <section id="home" className="scroll-mt-32">
        <HeroSection />
      </section>

      <section id="social" className="scroll-mt-32">
        <SocialSection />
      </section>

      <section id="events" className="scroll-mt-32">
        <EventsSection />
      </section>

      <section id="collaboration" className="scroll-mt-32">
        <CollaborationSection />
      </section>

      <section id="team" className="scroll-mt-32">
        <TeamSection />
      </section>

      <section id="partners" className="scroll-mt-32">
        <PartnersSection />
      </section>

      <section id="contributors" className="scroll-mt-32">
        <ContributorsSection />
      </section>

      <section id="contact" className="scroll-mt-32">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}