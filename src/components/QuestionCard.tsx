
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnswerOption = {
  value: number;
  label: string;
  description: string;
};

type QuestionCardProps = {
  question: string;
  onAnswer: (value: number) => void;
  selectedValue?: number;
};

const answerOptions: AnswerOption[] = [
  { value: 1, label: "Not at all like me", description: "This doesn't describe me" },
  { value: 2, label: "Not really like me", description: "This rarely describes me" },
  { value: 3, label: "Somewhat like me", description: "This sometimes describes me" },
  { value: 4, label: "Like me", description: "This often describes me" },
  { value: 5, label: "Very much like me", description: "This describes me perfectly" },
];

const QuestionCard = ({ question, onAnswer, selectedValue }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h3 className="text-xl md:text-2xl text-center font-medium text-gray-800 mb-8">
        {question}
      </h3>
      
      <div className="mt-8 space-y-3">
        {answerOptions.map((option) => (
          <motion.div
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => onAnswer(option.value)}
              variant="outline"
              className={cn(
                "w-full py-6 text-left justify-start text-base border rounded-xl transition-all",
                selectedValue === option.value
                  ? "bg-app-purple text-white border-app-purple"
                  : "hover:border-app-purple/50 hover:bg-app-purple/5"
              )}
            >
              <div className="flex items-center w-full">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-bold shrink-0",
                  selectedValue === option.value 
                    ? "bg-white text-app-purple" 
                    : "bg-app-purple/10 text-app-purple"
                )}>
                  {option.value}
                </div>
                <div className="w-full">
                  <div className="font-medium">{option.label}</div>
                  <div className={cn(
                    "text-xs mt-1 line-clamp-2",
                    selectedValue === option.value ? "text-white/80" : "text-gray-500"
                  )}>
                    {option.description}
                  </div>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
