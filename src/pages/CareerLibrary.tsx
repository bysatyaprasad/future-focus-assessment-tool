
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { 
  Library, 
  Search, 
  Briefcase, 
  ChevronDown,
  DollarSign,
  GraduationCap,
  BarChart,
  ListChecks,
  LightbulbIcon,
  BookOpen,
  Home,
  Filter,
  X,
  ArrowLeft
} from "lucide-react";
import { CareerSuggestion } from "@/types/assessment";
import { Link } from "react-router-dom";

const CareerLibrary = () => {
  const { getCareerCategories, getCareerMatches, setCurrentView } = useAssessment();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredCareers, setFilteredCareers] = useState<CareerSuggestion[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  
  const careerCategories = getCareerCategories();
  const allCareers = careerCategories.flatMap(category => category.careers);
  const careerMatches = getCareerMatches();
  
  // Get all unique traits across careers
  const allTraits = Array.from(
    new Set(allCareers.flatMap(career => career.traits))
  ).sort();
  
  useEffect(() => {
    // Save the current view in localStorage
    localStorage.setItem("currentView", "library");
    
    // Initial filtering
    filterCareers();
  }, [searchTerm, activeCategory, selectedTraits]);
  
  const filterCareers = () => {
    let results = allCareers;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(career => 
        career.title.toLowerCase().includes(term) || 
        career.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (activeCategory) {
      const categoryObj = careerCategories.find(c => c.name === activeCategory);
      if (categoryObj) {
        results = results.filter(career => 
          categoryObj.careers.some(c => c.title === career.title)
        );
      }
    }
    
    // Filter by selected traits
    if (selectedTraits.length > 0) {
      results = results.filter(career => 
        selectedTraits.every(trait => career.traits.includes(trait))
      );
    }
    
    // Sort by career match score if available
    results.sort((a, b) => {
      const aMatch = careerMatches.find(m => m.title === a.title);
      const bMatch = careerMatches.find(m => m.title === b.title);
      
      if (aMatch && bMatch) {
        return bMatch.score - aMatch.score;
      } else if (aMatch) {
        return -1;
      } else if (bMatch) {
        return 1;
      }
      return 0;
    });
    
    setFilteredCareers(results);
  };
  
  const toggleTrait = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter(t => t !== trait));
    } else {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory(null);
    setSelectedTraits([]);
  };

  // Format score as percentage for display
  const formatScoreAsPercentage = (score: number) => {
    return Math.round(score * 100);
  };

  return (
    <AssessmentLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Future Skills School Career Library</h2>
            <p className="text-gray-600 mt-1">Explore all {allCareers.length} future-ready career options</p>
          </div>
          
          <Button 
            onClick={() => setCurrentView("results")}
            variant="outline" 
            size="sm"
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Button>
        </motion.div>
        
        <div className="bg-gray-50 p-5 rounded-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            
            <Button
              onClick={() => setSelectedTraits([])}
              variant="outline"
              className={`${selectedTraits.length > 0 ? 'bg-app-purple text-white' : 'bg-white'} flex items-center gap-1`}
            >
              <Filter className="h-4 w-4" />
              <span>Traits</span>
              {selectedTraits.length > 0 && 
                <span className="ml-1 bg-white text-app-purple rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {selectedTraits.length}
                </span>
              }
            </Button>
          </div>
          
          {selectedTraits.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedTraits.map(trait => (
                <div key={trait} className="bg-app-purple text-white text-sm rounded-full px-3 py-1 flex items-center gap-1">
                  {trait}
                  <X 
                    className="h-3.5 w-3.5 cursor-pointer" 
                    onClick={() => toggleTrait(trait)}
                  />
                </div>
              ))}
              <button 
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-app-purple underline"
              >
                Clear all filters
              </button>
            </div>
          )}
          
          <div className="scrollbar-hide overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              <Button
                onClick={() => setActiveCategory(null)}
                variant="ghost"
                className={`${!activeCategory ? 'bg-app-purple text-white' : 'bg-white'} text-sm whitespace-nowrap`}
              >
                All Categories
              </Button>
              
              {careerCategories.map(category => (
                <Button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
                  variant="ghost"
                  className={`${category.name === activeCategory ? 'bg-app-purple text-white' : 'bg-white'} text-sm whitespace-nowrap`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="scrollbar-hide overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {allTraits.map(trait => (
                <Button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  variant="outline"
                  size="sm"
                  className={`${
                    selectedTraits.includes(trait) 
                      ? 'bg-app-purple text-white border-app-purple' 
                      : 'bg-white border-gray-200'
                  } text-xs`}
                >
                  {trait}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          {filteredCareers.length > 0 ? (
            <>
              <p className="text-sm text-gray-500">
                Showing {filteredCareers.length} careers
                {activeCategory ? ` in ${activeCategory}` : ''}
                {searchTerm ? ` matching "${searchTerm}"` : ''}
              </p>
              
              {filteredCareers.map((career) => {
                const matchData = careerMatches.find(m => m.title === career.title);
                return (
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
                                className={`px-2 py-1 text-xs rounded-full ${
                                  selectedTraits.includes(trait)
                                    ? 'bg-app-purple text-white'
                                    : 'bg-app-purple/10 text-app-purple-dark'
                                }`}
                              >
                                {trait}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {matchData && (
                          <div className="text-right">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-app-green">
                              <span className="font-bold text-gray-800">
                                {formatScoreAsPercentage(matchData.score)}%
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Match</p>
                          </div>
                        )}
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
                );
              })}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">No careers found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
              <Button 
                onClick={clearFilters}
                variant="outline" 
                className="mt-4"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default CareerLibrary;
