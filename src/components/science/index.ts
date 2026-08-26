import type { ComponentType } from "react";
import HowPainWorks from "./HowPainWorks";
import ThreeTypesOfPain from "./ThreeTypesOfPain";
import AcuteVsChronic from "./AcuteVsChronic";
import MeasuringPain from "./MeasuringPain";

/**
 * Maps an Understanding Pain article slug to the component that renders its
 * illustrated body. Keep the keys in sync with the slugs in
 * src/lib/understanding.ts.
 */
export const ARTICLE_BODIES: Record<string, ComponentType> = {
  "how-pain-works": HowPainWorks,
  "types-of-pain": ThreeTypesOfPain,
  "acute-vs-chronic-pain": AcuteVsChronic,
  "measuring-pain": MeasuringPain,
};
