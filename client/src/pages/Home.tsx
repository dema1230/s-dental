/**
 * S Dental — Home Page
 * Clinical Luxury Design System
 * High-conversion landing page for dental practice in Novi Pazar
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
