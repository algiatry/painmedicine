import type { ComponentType } from "react";
import HowPainWorks from "./science/HowPainWorks";
import ThreeTypesOfPain from "./science/ThreeTypesOfPain";
import AcuteVsChronic from "./science/AcuteVsChronic";
import MeasuringPain from "./science/MeasuringPain";
import PainAndSleep from "./science/PainAndSleep";
import PainAndEmotion from "./science/PainAndEmotion";
import ThePlaceboEffect from "./science/ThePlaceboEffect";
import PipelineTracker from "./future/PipelineTracker";
import Neuromodulation from "./future/Neuromodulation";
import BiologicsGeneTherapy from "./future/BiologicsGeneTherapy";
import PrecisionPainMedicine from "./future/PrecisionPainMedicine";
import MindAndBrain from "./future/MindAndBrain";
import ThePainTeam from "./specialty/ThePainTeam";
import YourFirstVisit from "./specialty/YourFirstVisit";
import HowPainPhysiciansTrain from "./specialty/HowPainPhysiciansTrain";
import PainClinicsVsPainMedicine from "./specialty/PainClinicsVsPainMedicine";

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
  "pain-and-sleep": PainAndSleep,
  "pain-and-emotion": PainAndEmotion,
  "the-placebo-effect": ThePlaceboEffect,
  pipeline: PipelineTracker,
  neuromodulation: Neuromodulation,
  "biologics-and-gene-therapy": BiologicsGeneTherapy,
  "precision-pain-medicine": PrecisionPainMedicine,
  "mind-and-brain": MindAndBrain,
  "the-pain-team": ThePainTeam,
  "your-first-visit": YourFirstVisit,
  "how-pain-physicians-train": HowPainPhysiciansTrain,
  "pain-clinics-vs-pain-medicine": PainClinicsVsPainMedicine,
};
