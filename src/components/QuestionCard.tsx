
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnswerOption = {
  value: number;
  label: string;
};

type QuestionCardProps = {
  question: string;
  onAnswer: (value: number) => void;
  selectedValue?: number;
};

const answerOptions: AnswerOption[] = [
  { value: 1, label: "Not at all like me" },
  { value: 2, label: "Not really like me" },
  { value: 3, label: "Somewhat like me" },
  { value: 4, label: "Like me" },
  { value: 5, label: "Very much like me" },
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
      <h3 className="text-xl text-center font-medium text-gray-800">{question}</h3>
      
      <div className="mt-6 space-y-3">
        {answerOptions.map((option) => (
          <Button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            variant="outline"
            className={cn(
              "w-full py-4 text-left justify-start text-base border rounded-xl transition-all",
              selectedValue === option.value
                ? "bg-app-purple text-white border-app-purple"
                : "hover:border-app-purple/50"
            )}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
