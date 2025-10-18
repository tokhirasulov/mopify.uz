"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CleaningBubbles from "@/components/CleaningBubbles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (loading) {
    return <Loader onComplete={handleLoadComplete} />;
  }

  return (
    <div className='min-h-screen relative'>
      <CleaningBubbles />
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}>
        <Navigation />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
