
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import QuestionCard from "@/components/QuestionCard";
import { ChevronLeft, ChevronRight, Flag, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AssessmentQuestions = () => {
  const { 
    getCurrentQuestion,
    getCurrentSection,
    answers,
    setAnswers,
    nextQuestion,
    prevQuestion,
    isFirstQuestion,
    isLastQuestion,
    isLastSection,
    goToResults,
    getTotalProgress,
  } = useAssessment();

  const currentQuestion = getCurrentQuestion();
  const currentSection = getCurrentSection();
  
  if (!currentQuestion || !currentSection) {
    return (
      <AssessmentLayout>
        <div className="text-center">
          <p>Loading questions...</p>
        </div>
      </AssessmentLayout>
    );
  }

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion() && isLastSection()) {
      goToResults();
    } else {
      nextQuestion();
    }
  };

  const isAnswered = currentQuestion.id in answers;

  return (
    <AssessmentLayout progress={getTotalProgress()}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-app-purple font-semibold"
          >
            {currentSection.title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-app-purple/10 px-3 py-1 rounded-full text-xs text-app-purple-dark"
          >
            Question {currentSection.questions.indexOf(currentSection.questions.find(q => q.id === currentQuestion.id) || currentSection.questions[0]) + 1} of {currentSection.questions.length}
          </motion.div>
        </div>

        <QuestionCard
          question={currentQuestion.question}
          onAnswer={handleAnswer}
          selectedValue={answers[currentQuestion.id]}
        />

        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-2">
            <Button
              onClick={prevQuestion}
              variant="outline"
              disabled={isFirstQuestion()}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            
            <Link to="/welcome">
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-gray-500"
                title="Return to home page"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only md:not-sr-only">Home</span>
              </Button>
            </Link>
          </div>
          
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-1 ${
              isLastQuestion() && isLastSection() 
                ? "bg-green-500 hover:bg-green-600" 
                : "bg-app-purple hover:bg-app-purple-dark"
            }`}
          >
            {isLastQuestion() && isLastSection() ? (
              <>
                Finish
                <Flag className="h-4 w-4" />
              </>
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default AssessmentQuestions;
