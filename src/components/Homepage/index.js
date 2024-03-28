import React from 'react'
import Hero from "./herobanner";
import Features from "./featuresection";
import ShopCategories from "./shopCategoriesCards";
import WinterClothes from "./winterClothes";
import FlipkartRecommendation from "./flipkartRecommand";
import LastSection from "./lastSection";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Features />
      <ShopCategories />
      <WinterClothes />
      <FlipkartRecommendation />
      <LastSection />
    </div>
  );
}
