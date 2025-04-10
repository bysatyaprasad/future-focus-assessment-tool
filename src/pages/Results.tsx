
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { traitDescriptions } from "@/data/assessmentData";
import { BarChart, PieChart, Users, Briefcase, DownloadCloud, Home, RefreshCw } from "lucide-react";

const Results = () => {
  const { calculateResults, getCareerMatches, getTopTraits, goToStart } = useAssessment();
  const [activeTab, setActiveTab] = useState("traits");

  const results = calculateResults();
  const careerMatches = getCareerMatches();
  const topTraits = getTopTraits();

  return (
    <AssessmentLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Career Compass Results!</h2>
          <p className="text-gray-600 mb-6">
            Based on your answers, we've identified your top traits and career matches
          </p>
        </motion.div>

        <Tabs defaultValue="traits" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="traits" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Your Traits</span>
            </TabsTrigger>
            <TabsTrigger value="careers" className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Career Matches</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="traits" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {topTraits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-app-purple-light to-white p-5 rounded-xl shadow-sm"
                >
                  <h3 className="font-bold text-gray-800 mb-2">{trait}</h3>
                  <p className="text-sm text-gray-600">{traitDescriptions[trait]}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart className="text-app-purple-dark h-5 w-5" />
                Your Trait Profile
              </h3>
              
              {Object.entries(results).map(([trait, score], index) => (
                <div key={trait} className="mb-3">
                  <div className="flex justify-between text-sm text-gray-700 mb-1">
                    <span>{trait}</span>
                    <span className="font-medium">{score.toFixed(1)}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(score / 5) * 100}%` }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                      className="h-full bg-app-purple"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="careers" className="space-y-6">
            <div className="space-y-4">
              {careerMatches.slice(0, 5).map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{career.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{career.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {career.traits.map(trait => (
                          <span 
                            key={trait} 
                            className="px-2 py-1 bg-app-purple/10 text-app-purple-dark text-xs rounded-full"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-app-green">
                        <span className="font-bold text-gray-800">
                          {Math.round(career.score * 20)}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Match</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-col md:flex-row gap-3 justify-center mt-8">
          <Button 
            onClick={goToStart}
            variant="outline"
            className="flex items-center gap-1"
          >
            <RefreshCw className="w-4 h-4" />
            Take Again
          </Button>
          
          <Button 
            onClick={() => window.print()}
            className="bg-app-purple hover:bg-app-purple-dark flex items-center gap-1"
          >
            <DownloadCloud className="w-4 h-4" />
            Save Results
          </Button>
          
          <Button 
            onClick={goToStart}
            variant="outline"
            className="flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default Results;
