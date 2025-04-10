
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { traitDescriptions, generalCareerAdvice } from "@/data/assessmentData";
import { 
  BarChart, 
  PieChart, 
  Users, 
  Briefcase, 
  DownloadCloud, 
  Home, 
  RefreshCw,
  ChevronDown,
  LightbulbIcon,
  DollarSign,
  GraduationCap,
  ListChecks,
  Info
} from "lucide-react";

const Results = () => {
  const { calculateResults, getCareerMatches, getTopTraits, getTotalCareerCount, goToStart } = useAssessment();
  const [activeTab, setActiveTab] = useState("traits");
  
  // Persist results in localStorage to handle page refreshes
  useEffect(() => {
    // Save the current view as "results" in localStorage
    localStorage.setItem("currentView", "results");
    
    // This effect runs once when the Results component mounts
    return () => {
      // Cleanup is not needed as we want to persist the state
    };
  }, []);

  const results = calculateResults();
  const careerMatches = getCareerMatches();
  const topTraits = getTopTraits();
  const totalCareers = getTotalCareerCount();

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
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="traits" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Your Traits</span>
            </TabsTrigger>
            <TabsTrigger value="careers" className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Career Matches</span>
            </TabsTrigger>
            <TabsTrigger value="advice" className="flex items-center gap-1">
              <LightbulbIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Career Advice</span>
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
            <div className="bg-gray-50 p-4 rounded-xl mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              <p className="text-sm text-gray-700">
                Showing your top {careerMatches.slice(0, 10).length} matches from our database of {totalCareers} future-ready careers
              </p>
            </div>
            
            <div className="space-y-4">
              {careerMatches.slice(0, 10).map((career, index) => (
                <Collapsible key={career.title} className="border border-gray-200 rounded-xl">
                  <div className="p-5">
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
                    
                    {(career.actionableSteps || career.skills || career.education || career.outlook || career.salary) && (
                      <CollapsibleTrigger className="w-full mt-4 flex items-center justify-center gap-1 text-sm text-app-purple hover:text-app-purple-dark transition-colors">
                        <span>Show more details</span>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                    )}
                  </div>
                  
                  <CollapsibleContent className="px-5 pb-5 pt-0 border-t border-gray-100">
                    <div className="grid gap-4 mt-2">
                      {career.salary && (
                        <div className="flex items-start gap-2">
                          <DollarSign className="h-5 w-5 text-app-green mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-800">Salary Range</h4>
                            <p className="text-sm text-gray-600">{career.salary}</p>
                          </div>
                        </div>
                      )}
                      
                      {career.education && (
                        <div className="flex items-start gap-2">
                          <GraduationCap className="h-5 w-5 text-app-purple mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-800">Education Pathway</h4>
                            <p className="text-sm text-gray-600">{career.education}</p>
                          </div>
                        </div>
                      )}
                      
                      {career.outlook && (
                        <div className="flex items-start gap-2">
                          <BarChart className="h-5 w-5 text-app-purple-dark mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-800">Future Outlook</h4>
                            <p className="text-sm text-gray-600">{career.outlook}</p>
                          </div>
                        </div>
                      )}
                      
                      {career.skills && (
                        <div className="flex items-start gap-2">
                          <ListChecks className="h-5 w-5 text-app-green-dark mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-800">Key Skills</h4>
                            <p className="text-sm text-gray-600">{career.skills.join(", ")}</p>
                          </div>
                        </div>
                      )}
                      
                      {career.actionableSteps && (
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
                            <LightbulbIcon className="h-4 w-4 text-app-purple-dark" />
                            Next Steps
                          </h4>
                          <ul className="space-y-2">
                            {career.actionableSteps.map((step, i) => (
                              <li key={i} className="text-sm flex items-start gap-2">
                                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-app-purple/10 text-app-purple-dark text-xs flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="advice" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-app-purple-light/30 to-white p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Building Your Future-Ready Career</h3>
              <p className="text-gray-700 mb-6">
                No matter which career path you choose, here are some strategies to help you build a successful,
                high-income career that will remain relevant and in-demand in the future.
              </p>
              
              <div className="space-y-6">
                {generalCareerAdvice.map((advice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">{advice.title}</h4>
                    <p className="text-gray-600 text-sm">{advice.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
