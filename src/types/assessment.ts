
export type TraitCategory = 
  | "MindStyles" // Openness
  | "WorkHabits" // Conscientiousness 
  | "TeamSpirit" // Agreeableness
  | "StressManagement" // Neuroticism
  | "ExpressionStyle" // Extraversion
  | "HandsOn" // Realistic
  | "Analytical" // Investigative
  | "Creative" // Artistic
  | "Helpful" // Social
  | "Leadership" // Enterprising
  | "Organized" // Conventional
  | "TechAptitude" // Digital/Tech affinity
  | "Adaptability" // Flexibility to change
  | "Innovation" // Problem-solving approach
  | "Resilience"; // Persistence through challenges

export type Question = {
  id: string;
  text: string;
  category: TraitCategory;
};

export type AssessmentSection = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

export type AssessmentResult = {
  [key in TraitCategory]: number;
};

export type CareerSuggestion = {
  title: string;
  description: string;
  traits: TraitCategory[];
  score: number;
  actionableSteps?: string[];
  skills?: string[];
  education?: string;
  outlook?: string;
  salary?: string;
};

export type ScoringMethodology = {
  questionScoring: string;
  traitCalculation: string;
  careerMatching: string;
  interpretationGuidance: string;
};

export type CounselorGuideline = {
  area: string;
  description: string;
};
