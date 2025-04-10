
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

type AssessmentLayoutProps = {
  children: ReactNode;
  progress?: number;
};

const AssessmentLayout = ({ children, progress }: AssessmentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-purple/10 to-app-blue/20 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Rocket className="h-6 w-6 text-app-purple" />
              <div>
                <h1 className="text-lg font-bold text-gray-800">Future Skills School</h1>
                <p className="text-xs text-gray-500">Career Assessment Tool</p>
              </div>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/counselor-guide" className="text-sm text-gray-600 hover:text-app-purple">
              Counselor Guide
            </Link>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="assessment-card bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-app-purple/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-app-blue/10 rounded-full blur-xl"></div>

          {progress !== undefined && (
            <div className="mb-6 relative z-10">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Your Progress</span>
                <span className="font-bold text-app-purple">{Math.round(progress * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-app-purple to-app-purple-dark rounded-full"
                ></motion.div>
              </div>
            </div>
          )}
          {children}
        </motion.div>
        
        <div className="text-center text-sm text-gray-500 mt-6">
          Future Skills School: Discover your perfect career path
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;
