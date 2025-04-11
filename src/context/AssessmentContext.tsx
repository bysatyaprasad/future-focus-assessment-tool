import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AssessmentSection, TraitCategory, AssessmentResult, CareerSuggestion } from "@/types/assessment";
import { 
  assessmentSections, 
  calculateCareerMatches, 
  getTopTraits, 
  getTotalCareerCount, 
  careerCategories 
} from "@/data/assessmentData";

type AssessmentContextType = {
  currentSectionIndex: number;
  currentQuestionIndex: number;
  answers: Record<string, number>;
  setAnswers: (answers: Record<string, number>) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToNextSection: () => void;
  goToResults: () => void;
  goToStart: () => void;
  calculateResults: () => AssessmentResult;
  getCareerMatches: () => CareerSuggestion[];
  getTopTraits: () => TraitCategory[];
  getTotalCareerCount: () => number;
  getCurrentQuestion: () => { question: string; id: string } | null;
  getCurrentSection: () => AssessmentSection | null;
  getSectionProgress: () => number;
  getTotalProgress: () => number;
  isFirstQuestion: () => boolean;
  isLastQuestion: () => boolean;
  isLastSection: () => boolean;
  isAssessmentComplete: () => boolean;
  currentView: "welcome" | "assessment" | "results" | "library";
  setCurrentView: (view: "welcome" | "assessment" | "results" | "library") => void;
  getCareerCategories: () => typeof careerCategories;
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error("useAssessment must be used within an AssessmentProvider");
  }
  return context;
};

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentView, setCurrentViewState] = useState<"welcome" | "assessment" | "results" | "library">("welcome");
  
  useEffect(() => {
    const savedAnswers = localStorage.getItem("assessmentAnswers");
    const savedView = localStorage.getItem("currentView");
    
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {
        console.error("Error parsing saved answers:", e);
      }
    }
    
    if (savedView) {
      if (savedView === "welcome" || savedView === "assessment" || savedView === "results" || savedView === "library") {
        setCurrentViewState(savedView);
      }
    }
  }, []);
  
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem("assessmentAnswers", JSON.stringify(answers));
    }
  }, [answers]);

  const setCurrentView = (view: "welcome" | "assessment" | "results" | "library") => {
    setCurrentViewState(view);
    localStorage.setItem("currentView", view);
  };

  const calculateResults = (): AssessmentResult => {
    const results = {} as AssessmentResult;
    
    const allCategories = Object.values(assessmentSections)
      .flatMap(section => section.questions)
      .map(q => q.category);
    
    const uniqueCategories = [...new Set(allCategories)] as TraitCategory[];
    uniqueCategories.forEach(category => {
      results[category] = 0;
    });
    
    uniqueCategories.forEach(category => {
      const questionsInCategory = Object.values(assessmentSections)
        .flatMap(section => section.questions)
        .filter(q => q.category === category);
      
      const answeredQuestions = questionsInCategory.filter(q => answers[q.id] !== undefined);
      const answeredCount = answeredQuestions.length;
      
      if (answeredCount > 0) {
        if (category === "StressManagement") {
          const invertedScore = answeredQuestions.reduce((sum, q) => {
            return sum + (6 - answers[q.id]);
          }, 0);
          results[category] = +(invertedScore / answeredCount).toFixed(2);
        } else {
          const totalScore = answeredQuestions.reduce((sum, q) => {
            return sum + answers[q.id];
          }, 0);
          results[category] = +(totalScore / answeredCount).toFixed(2);
        }
      } else {
        results[category] = 3;
      }
    });
    
    return results;
  };

  const getCurrentSection = () => {
    return assessmentSections[currentSectionIndex] || null;
  };

  const getCurrentQuestion = () => {
    const section = getCurrentSection();
    if (!section) return null;
    
    const question = section.questions[currentQuestionIndex];
    if (!question) return null;
    
    return {
      question: question.text,
      id: question.id,
    };
  };

  const nextQuestion = () => {
    const section = getCurrentSection();
    if (!section) return;
    
    if (currentQuestionIndex < section.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (!isLastSection()) {
      goToNextSection();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      setCurrentQuestionIndex(assessmentSections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const goToNextSection = () => {
    if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const goToResults = () => {
    setCurrentView("results");
  };

  const goToStart = () => {
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentView("welcome");
    localStorage.removeItem("assessmentAnswers");
    localStorage.removeItem("currentView");
  };

  const getSectionProgress = () => {
    const section = getCurrentSection();
    if (!section) return 0;
    
    return (currentQuestionIndex + 1) / section.questions.length;
  };

  const getTotalProgress = () => {
    const totalQuestions = assessmentSections.reduce(
      (total, section) => total + section.questions.length, 
      0
    );
    
    const currentTotalIndex = assessmentSections
      .slice(0, currentSectionIndex)
      .reduce((total, section) => total + section.questions.length, 0) + currentQuestionIndex + 1;
    
    return currentTotalIndex / totalQuestions;
  };

  const isFirstQuestion = () => {
    return currentSectionIndex === 0 && currentQuestionIndex === 0;
  };

  const isLastQuestion = () => {
    const section = getCurrentSection();
    if (!section) return true;
    
    return currentQuestionIndex === section.questions.length - 1;
  };

  const isLastSection = () => {
    return currentSectionIndex === assessmentSections.length - 1;
  };

  const isAssessmentComplete = () => {
    return isLastSection() && isLastQuestion();
  };

  const getCareerMatches = () => {
    const results = calculateResults();
    return calculateCareerMatches(results);
  };

  const getTopTraitsImpl = () => {
    const results = calculateResults();
    return getTopTraits(results, 3);
  };

  const getTotalCareerCountImpl = () => {
    return getTotalCareerCount();
  };

  const getCareerCategories = () => {
    return careerCategories;
  };

  const context: AssessmentContextType = {
    currentSectionIndex,
    currentQuestionIndex,
    answers,
    setAnswers,
    nextQuestion,
    prevQuestion,
    goToNextSection,
    goToResults,
    goToStart,
    calculateResults,
    getCareerMatches,
    getTopTraits: getTopTraitsImpl,
    getTotalCareerCount: getTotalCareerCountImpl,
    getCurrentQuestion,
    getCurrentSection,
    getSectionProgress,
    getTotalProgress,
    isFirstQuestion,
    isLastQuestion,
    isLastSection,
    isAssessmentComplete,
    currentView,
    setCurrentView,
    getCareerCategories,
  };

  return (
    <AssessmentContext.Provider value={context}>
      {children}
    </AssessmentContext.Provider>
  );
};
