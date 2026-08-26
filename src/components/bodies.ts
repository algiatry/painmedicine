import type { ComponentType } from "react";
import HowPainWorks from "./science/HowPainWorks";
import ThreeTypesOfPain from "./science/ThreeTypesOfPain";
import AcuteVsChronic from "./science/AcuteVsChronic";
import MeasuringPain from "./science/MeasuringPain";
import PipelineTracker from "./future/PipelineTracker";

/**
 * Maps an article slug to the component that renders its illustrated body.
 * Keep the keys in sync with the slugs in the content modules
 * (src/lib/understanding.ts, src/lib/future.ts). Slugs are unique site-wide.
 */
export const ARTICLE_BODIES: Record<string, ComponentType> = {
  "how-pain-works": HowPainWorks,
  "types-of-pain": ThreeTypesOfPain,
  "acute-vs-chronic-pain": AcuteVsChronic,
  "measuring-pain": MeasuringPain,
  pipeline: PipelineTracker,
};
