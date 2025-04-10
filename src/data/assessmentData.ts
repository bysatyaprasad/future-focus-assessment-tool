
import { AssessmentSection, Question, TraitCategory, CareerSuggestion } from "@/types/assessment";

// Personality Assessment Questions
const personalityQuestions: Question[] = [
  {
    id: "p1",
    text: "I enjoy exploring new ideas or subjects.",
    category: "MindStyles",
  },
  {
    id: "p2",
    text: "I like learning about new cultures or traditions.",
    category: "MindStyles",
  },
  {
    id: "p3",
    text: "I make sure to complete my homework/assignments on time.",
    category: "WorkHabits",
  },
  {
    id: "p4",
    text: "I am well-organized and keep my study materials/books in order.",
    category: "WorkHabits",
  },
  {
    id: "p5",
    text: "I like being the centre of attention at social gatherings.",
    category: "ExpressionStyle",
  },
  {
    id: "p6",
    text: "I often help my classmates with their studies.",
    category: "TeamSpirit",
  },
  {
    id: "p7",
    text: "I get along well with most of my classmates and teachers.",
    category: "TeamSpirit",
  },
  {
    id: "p8",
    text: "I often feel anxious before exams.",
    category: "StressManagement",
  },
  {
    id: "p9",
    text: "I get upset easily when things don't go as planned or as expected.",
    category: "StressManagement",
  },
];

// Interests Assessment Questions
const interestQuestions: Question[] = [
  {
    id: "i1",
    text: "I enjoy building things with my hands.",
    category: "HandsOn",
  },
  {
    id: "i2",
    text: "I like working with tools, machines, or technology.",
    category: "HandsOn",
  },
  {
    id: "i3",
    text: "I enjoy solving complex problems and puzzles.",
    category: "Analytical",
  },
  {
    id: "i4",
    text: "I'm curious about how things work and why things happen.",
    category: "Analytical",
  },
  {
    id: "i5",
    text: "I enjoy creative activities like art, music, or writing.",
    category: "Creative",
  },
  {
    id: "i6",
    text: "I prefer tasks that allow me to express myself.",
    category: "Creative",
  },
  {
    id: "i7",
    text: "I enjoy helping others and working with people.",
    category: "Helpful",
  },
  {
    id: "i8",
    text: "I'm good at explaining things to others.",
    category: "Helpful",
  },
  {
    id: "i9",
    text: "I like to take charge and lead others.",
    category: "Leadership",
  },
  {
    id: "i10",
    text: "I enjoy persuading others and selling ideas or products.",
    category: "Leadership",
  },
  {
    id: "i11",
    text: "I like following clear procedures and rules.",
    category: "Organized",
  },
  {
    id: "i12",
    text: "I enjoy organizing information and working with data.",
    category: "Organized",
  },
];

export const assessmentSections: AssessmentSection[] = [
  {
    id: "personality",
    title: "Mind Map",
    description: "Let's understand how you think and work!",
    questions: personalityQuestions,
  },
  {
    id: "interests",
    title: "Interest Finder",
    description: "What activities make you feel energized and excited?",
    questions: interestQuestions,
  },
];

export const careerSuggestions: CareerSuggestion[] = [
  {
    title: "Technology & Computing",
    description: "Careers involving computers, programming, software development, or IT support.",
    traits: ["Analytical", "HandsOn", "WorkHabits"],
    score: 0
  },
  {
    title: "Healthcare & Medicine",
    description: "Roles focused on helping others through medical care, treatment, and support.",
    traits: ["Helpful", "WorkHabits", "TeamSpirit"],
    score: 0
  },
  {
    title: "Arts & Design",
    description: "Creative careers in visual arts, performing arts, design, or content creation.",
    traits: ["Creative", "MindStyles", "ExpressionStyle"],
    score: 0
  },
  {
    title: "Business & Leadership",
    description: "Careers in management, entrepreneurship, sales, or business operations.",
    traits: ["Leadership", "TeamSpirit", "ExpressionStyle"],
    score: 0
  },
  {
    title: "Education & Teaching",
    description: "Jobs focused on teaching, training, and helping others learn and grow.",
    traits: ["Helpful", "MindStyles", "TeamSpirit"],
    score: 0
  },
  {
    title: "Science & Research",
    description: "Careers involving investigation, analysis, and discovering how things work.",
    traits: ["Analytical", "MindStyles", "WorkHabits"],
    score: 0
  },
  {
    title: "Building & Engineering",
    description: "Hands-on work creating, fixing, or improving physical structures and systems.",
    traits: ["HandsOn", "WorkHabits", "Analytical"],
    score: 0
  },
  {
    title: "Organization & Administration",
    description: "Roles that involve organizing, planning, and maintaining systems and processes.",
    traits: ["Organized", "WorkHabits", "TeamSpirit"],
    score: 0
  },
];

export const traitDescriptions: Record<TraitCategory, string> = {
  MindStyles: "You enjoy exploring new ideas and learning about different things.",
  WorkHabits: "You're organized and good at completing tasks on time.",
  TeamSpirit: "You get along well with others and enjoy being part of a team.",
  StressManagement: "Your ability to stay calm and handle challenging situations.",
  ExpressionStyle: "How you express yourself and interact in social situations.",
  HandsOn: "You enjoy working with your hands and building physical things.",
  Analytical: "You like solving problems and understanding how things work.",
  Creative: "You enjoy expressing yourself through creative activities.",
  Helpful: "You find satisfaction in helping and supporting others.",
  Leadership: "You're comfortable taking charge and guiding others.",
  Organized: "You prefer structure, clear rules, and organized information."
};

export const getTopTraits = (results: Record<TraitCategory, number>, count: number = 3): TraitCategory[] => {
  return Object.entries(results)
    .sort(([, a], [, b]) => b - a)
    .slice(0, count)
    .map(([trait]) => trait as TraitCategory);
};

export const calculateCareerMatches = (results: Record<TraitCategory, number>): CareerSuggestion[] => {
  const calculatedSuggestions = careerSuggestions.map(suggestion => {
    // Calculate how well the user's traits match this career
    let score = suggestion.traits.reduce((total, trait) => {
      return total + (results[trait] || 0);
    }, 0) / suggestion.traits.length;
    
    return {
      ...suggestion,
      score
    };
  });
  
  // Sort by score, highest first
  return calculatedSuggestions.sort((a, b) => b.score - a.score);
};
