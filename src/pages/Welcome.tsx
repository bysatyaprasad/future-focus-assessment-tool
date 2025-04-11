
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { ArrowRight, Sparkles, Map, Compass, Lightbulb, Star, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { setCurrentView } = useAssessment();

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-purple/10 via-white to-app-blue/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Rocket className="h-8 w-8 text-app-purple" />
            <h1 className="text-2xl font-bold text-gray-800">Future Skills School</h1>
          </motion.div>
          
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

        <div className="text-center space-y-6 mt-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-app-purple/80 to-app-purple-dark p-6 rounded-full">
                <Compass size={90} className="text-white" />
              </div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -top-3 -right-3 bg-app-yellow rounded-full p-2"
              >
                <Star size={24} className="text-amber-600" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-br from-app-purple-dark via-app-purple to-blue-500 bg-clip-text text-transparent">
                Future Focus
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                Discover your perfect career path with our AI-powered assessment that matches your unique personality traits to 100+ high-income, future-ready careers
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 my-12"
          >
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="bg-app-purple-light p-6 rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <Map className="text-app-purple h-10 w-10" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Personalized Journey</h3>
              <p className="text-gray-600">
                Questions tailored to your unique personality and work style
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(146, 210, 138, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="bg-app-green p-6 rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <TrendingUp className="text-emerald-600 h-10 w-10" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">100+ Future Careers</h3>
              <p className="text-gray-600">
                Discover high-income paths aligned with emerging opportunities
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(125, 166, 220, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="bg-app-blue p-6 rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <Sparkles className="text-blue-500 h-10 w-10" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Discover Talents</h3>
              <p className="text-gray-600">
                Uncover your hidden strengths and natural abilities
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(250, 204, 135, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="bg-app-yellow p-6 rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <Lightbulb className="text-amber-500 h-10 w-10" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Actionable Insights</h3>
              <p className="text-gray-600">
                Get practical steps to pursue your ideal career path
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-app-yellow/40 to-app-orange/40 p-5 rounded-xl shadow-sm mb-10">
              <p className="text-gray-700">
                <span className="font-bold">Quick Tip:</span> Answer honestly about what you like and how you are, not what you think others want to hear. The assessment takes just 5-7 minutes to complete!
              </p>
            </div>

            <Button 
              onClick={() => setCurrentView("assessment")} 
              className="bg-gradient-to-r from-app-purple to-app-purple-dark hover:from-app-purple-dark hover:to-app-purple text-white px-8 py-7 text-xl rounded-full shadow-lg hover:shadow-xl transition-all group"
            >
              Discover Your Ideal Career Path
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="mt-6 text-sm text-gray-500">
              Join over 10,000 students who've found their career direction
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
