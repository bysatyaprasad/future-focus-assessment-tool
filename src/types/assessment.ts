
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
  | "Organized"; // Conventional

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
};
