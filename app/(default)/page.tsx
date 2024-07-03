export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";
import Infosec from "@/components/infosec";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Infosec />
      <BusinessCategories />
      <FeaturesPlanet />
      <Contact />
      <Cta />
    </>
  );
}
