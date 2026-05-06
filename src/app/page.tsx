"use client"
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { FreeAudit } from "@/components/sections/FreeAudit";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { OurStory } from "@/components/sections/OurStory";
import { Services } from "@/components/sections/Services";
import { AIGuidance } from "@/components/sections/AIGuidance";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhySanchiti } from "@/components/sections/WhySanchiti";
import { TrackYourImpact } from "@/components/sections/TrackYourImpact";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  useEffect(() => {
    document.title = "Sanchiti Digital — India's Premier Digital Transformation Studio";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      "Sanchiti Digital transforms established Indian businesses into powerful digital brands — websites, social media, video, and beyond. All under one roof."
    );

    // Cursor hover glow for service cards — track mouse on body
    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor='hover']") as HTMLElement | null;
      if (target) {
        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - r.left}px`);
        target.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <FreeAudit />
      <FounderVideo />
      <OurStory />
      <Services />
      <AIGuidance />
      <WhySanchiti />
      <WhoWeServe />
      <TrackYourImpact />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
