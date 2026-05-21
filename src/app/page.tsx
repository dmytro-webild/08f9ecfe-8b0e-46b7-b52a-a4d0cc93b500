"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Experience",          id: "about"},
        {
          name: "Villas",          id: "villas"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Lovina"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Escape to Elegance"
      description="Experience the ultimate coastal luxury where refined comfort meets the serene beauty of the ocean."
      buttons={[
        {
          text: "Book Your Stay",          href: "#villas"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/people-beach-sunset-girl-is-jumping_1321-822.jpg",          imageAlt: "Luxurious beach resort view"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-jetty-luxury-resort-baa-atoll-maldives_505751-5745.jpg",          imageAlt: "Beach club lounge"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-palm-tree-with-sunset_1203-3216.jpg",          imageAlt: "Tropical palm trees"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-landscape-outdoor-swimming-pool-with-umbrella-deck-chair-hotel-resort-relax-tra_74190-8015.jpg",          imageAlt: "Turquoise ocean view"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sea-with-resort-beach-chairs_1150-15657.jpg",          imageAlt: "Golden hour at resort"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-jetty-luxury-resort-baa-atoll-maldives_505751-5742.jpg",          imageAlt: "Oceanfront villa"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Sanctuary of Peace"
      description={[
        "Nestled on the untouched shores of Lovina, our resort offers a refined escape from the ordinary.",        "Our philosophy blends authentic local hospitality with world-class amenities to ensure every moment is perfectly curated."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Infinity Pool",          description: "Soak in views that melt into the horizon.",          tag: "Relax",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-women-happy-smile-relax-outdoor-swimming-pool-resort_74190-9362.jpg"},
        {
          id: "f2",          title: "Holistic Spa",          description: "Rejuvenate your senses with local therapies.",          tag: "Wellbeing",          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-message-spa_53876-20955.jpg"},
        {
          id: "f3",          title: "Gourmet Dining",          description: "Savor flavors of the sea, expertly crafted.",          tag: "Dining",          imageSrc: "http://img.b2bpic.net/free-photo/tropical-waterdrops-drops-coastline-health_1232-4195.jpg"},
      ]}
      title="Curated Experiences"
      description="Indulge in amenities designed for your total relaxation and wellness."
    />
  </div>

  <div id="villas" data-section="villas">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Ocean Front Villa",          price: "$450/night",          rating: 5,
          reviewCount: "128",          imageSrc: "http://img.b2bpic.net/free-photo/luxury-modern-house-with-pool-lush-rainforest_23-2152008217.jpg",          brand: "Villa"},
        {
          id: "p2",          name: "Deluxe Family Suite",          price: "$380/night",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-outdoor-living-space-with-comfortable-sofa_23-2152008212.jpg",          brand: "Suite"},
        {
          id: "p3",          name: "Garden Paradise Villa",          price: "$320/night",          rating: 4,
          reviewCount: "82",          imageSrc: "http://img.b2bpic.net/free-photo/full-lenght-photo-elegant-brunette-woman-stylish-boho-dress-posing-luxury-tropical-villa-bali-style_273443-5498.jpg",          brand: "Villa"},
        {
          id: "p4",          name: "Horizon View Suite",          price: "$410/night",          rating: 5,
          reviewCount: "112",          imageSrc: "http://img.b2bpic.net/free-photo/summer-sky-bungalow-palm-swimming_1253-648.jpg",          brand: "Suite"},
        {
          id: "p5",          name: "Boutique Beach Villa",          price: "$350/night",          rating: 5,
          reviewCount: "76",          imageSrc: "http://img.b2bpic.net/free-photo/happy-girl-spends-time-home-cozy-interior_1321-1714.jpg",          brand: "Villa"},
        {
          id: "p6",          name: "Sunset Serenity Villa",          price: "$390/night",          rating: 5,
          reviewCount: "140",          imageSrc: "http://img.b2bpic.net/free-photo/luxury-chill-bedroom-hotel_1150-10902.jpg",          brand: "Villa"},
      ]}
      title="Our Private Villas"
      description="Select from our curated range of suites and villas, each designed with comfort in mind."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="items-top-row-full-width-bottom"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Miller",          role: "Travel Blogger",          company: "Wanderlust",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-skater-woman-wristwatch-posing-with-inspired-smile-outdoor-portrait-stylish-young-woman-relaxing-skate-park-summer-day_197531-20729.jpg"},
        {
          id: "2",          name: "James Chen",          role: "Photographer",          company: "Creative Co",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-with-beard-posing-cafe-with-tropical-interior-talking-mobyle-phone_273443-5142.jpg"},
        {
          id: "3",          name: "Elena Rossi",          role: "Architect",          company: "Design Studio",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-walking-beach-with-yoga-mat-listening-music-headphones-hipster-sport-swag-style-denim-shorts-t-shirt-backpack-cap-sunglasses-sunny-summer-weekend-cheerful_285396-4137.jpg"},
        {
          id: "4",          name: "David Wang",          role: "Entrepreneur",          company: "Tech Ventures",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-african-man-walking-street_171337-15979.jpg"},
        {
          id: "5",          name: "Chloe Dupont",          role: "Wellness Expert",          company: "Holistic Life",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-unshaven-man-santa-claus-hat-with-fur-looking-camera-smiling-happily-celebrating-new-year-while-vacations-tropical-country_273609-19169.jpg"},
      ]}
      title="Guest Reflections"
      description="Read about the experiences of our valued guests."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="A Legacy of Hospitality"
      tag="Our Growth"
      metrics={[
        {
          id: "m1",          value: "15+",          description: "Years of Excellence"},
        {
          id: "m2",          value: "98%",          description: "Guest Satisfaction"},
        {
          id: "m3",          value: "200+",          description: "Events Hosted"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Check-in times?",          content: "Check-in is from 3:00 PM."},
        {
          id: "q2",          title: "Breakfast included?",          content: "Yes, we serve daily local breakfast."},
        {
          id: "q3",          title: "Nearby attractions?",          content: "Dolphin tours and local waterfalls."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-outdoor-swimming-pool-with-sea-ocean-white-cloud-blue-sky_74190-8835.jpg"
      title="Plan Your Visit"
      description="Answers to common questions about your stay."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Get in Touch"
      title="Ready for paradise?"
      description="Our team is here to assist with your reservation and travel plans."
      buttons={[
        {
          text: "Contact Us",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Stay",          items: [
            {
              label: "Villas",              href: "#villas"},
            {
              label: "Experiences",              href: "#about"},
          ],
        },
        {
          title: "Info",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="Lovina Beach"
      copyrightText="© 2025 | Lovina Beach Club & Resort"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
