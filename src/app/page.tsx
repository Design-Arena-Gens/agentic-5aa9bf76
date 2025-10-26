import { ExperienceGrid } from "@/components/ExperienceGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FabricStories } from "@/components/FabricStories";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CollectionGallery } from "@/components/CollectionGallery";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { VirtualStylistAgent } from "@/components/VirtualStylistAgent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ExperienceGrid />
      <VirtualStylistAgent />
      <CollectionGallery />
      <FabricStories />
      <TestimonialsCarousel />
      <ProcessTimeline />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
