
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AssessmentLayoutProps = {
  children: ReactNode;
  progress?: number;
};

const AssessmentLayout = ({ children, progress }: AssessmentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-purple/10 to-app-blue/20 py-8">
      <div className="assessment-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="assessment-card"
        >
          {progress !== undefined && (
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="progress-fill"
                ></motion.div>
              </div>
            </div>
          )}
          {children}
        </motion.div>
        <div className="text-center text-sm text-gray-500 mt-4">
          Future Focus: Your Personality-Powered Career Finder
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;
