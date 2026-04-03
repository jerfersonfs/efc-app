import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Preview from "./components/Preview"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Preview/>
      <CTA />
    </>
  );
}