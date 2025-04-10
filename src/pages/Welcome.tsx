
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { Sparkles, Map, Compass } from "lucide-react";

const Welcome = () => {
  const { setCurrentView } = useAssessment();

  return (
    <AssessmentLayout>
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-app-purple/20 p-4 rounded-full">
              <Compass size={80} className="text-app-purple" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Future Focus
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover career paths that match your unique personality
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-app-purple-light p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-3">
                <Map className="text-app-purple h-8 w-8" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Easy to Answer</h3>
              <p className="text-gray-600 text-sm">
                Simple questions about your likes and how you work
              </p>
            </div>
            
            <div className="bg-app-green p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-3">
                <Compass className="text-emerald-600 h-8 w-8" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Find Your Path</h3>
              <p className="text-gray-600 text-sm">
                See careers that match your personal strengths
              </p>
            </div>
            
            <div className="bg-app-blue p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-3">
                <Sparkles className="text-blue-500 h-8 w-8" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Discover Talents</h3>
              <p className="text-gray-600 text-sm">
                Learn about your unique skills and strengths
              </p>
            </div>
          </div>

          <div className="bg-app-yellow/40 p-4 rounded-lg text-left mb-8">
            <p className="text-sm text-gray-700">
              <span className="font-bold">Quick Tip:</span> Answer honestly about what you like and how you are, not what you think others want to hear!
            </p>
          </div>

          <Button 
            onClick={() => setCurrentView("assessment")} 
            className="bg-app-purple hover:bg-app-purple-dark text-white px-8 py-6 text-lg rounded-full"
          >
            Start Your Career Journey
          </Button>

          <p className="mt-4 text-sm text-gray-500">
            Takes about 5-7 minutes to complete
          </p>
        </motion.div>
      </div>
    </AssessmentLayout>
  );
};

export default Welcome;
