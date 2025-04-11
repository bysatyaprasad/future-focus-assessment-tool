
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { Search, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CareerSuggestion, TraitCategory } from "@/types/assessment";

const CareerLibrary = () => {
  const { getCareerCategories } = useAssessment();
  const careerCategories = getCareerCategories();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCareers, setFilteredCareers] = useState<CareerSuggestion[]>([]);
  
  // Get all careers from all categories
  useEffect(() => {
    const allCareers = Object.values(careerCategories).flatMap(category => 
      category.careers.map(career => ({
        ...career,
        category: category.name
      }))
    );
    
    setFilteredCareers(allCareers);
  }, [careerCategories]);
  
  // Filter careers based on search query and category
  useEffect(() => {
    let careers = Object.values(careerCategories).flatMap(category => 
      category.careers.map(career => ({
        ...career,
        category: category.name
      }))
    );
    
    // Filter by search query
    if (searchQuery) {
      careers = careers.filter(career => 
        career.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      careers = careers.filter(career => career.category === selectedCategory);
    }
    
    setFilteredCareers(careers);
  }, [searchQuery, selectedCategory, careerCategories]);

  return (
    <AssessmentLayout customClass="max-w-4xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button 
              variant="ghost" 
              asChild 
              className="mb-2 hover:bg-transparent hover:text-app-purple p-0"
            >
              <Link to="/results" className="flex items-center gap-1 text-gray-600">
                <ArrowLeft className="h-4 w-4" />
                Back to Results
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-800">Career Library</h1>
          </div>
          <div className="flex items-center gap-2 bg-app-yellow/20 p-2 rounded-md">
            <BookOpen className="text-app-yellow-dark" />
            <span className="text-sm font-medium text-app-yellow-dark">
              {filteredCareers.length} careers
            </span>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search careers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger 
              value="all" 
              onClick={() => setSelectedCategory("all")}
            >
              All
            </TabsTrigger>
            {Object.values(careerCategories).map((category, index) => (
              <TabsTrigger 
                key={index} 
                value={category.name}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCareers.map((career, index) => (
              <CareerCard key={index} career={career} />
            ))}
          </TabsContent>
          
          {Object.values(careerCategories).map((category, index) => (
            <TabsContent key={index} value={category.name} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCareers
                .filter(career => career.category === category.name)
                .map((career, idx) => (
                  <CareerCard key={idx} career={career} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </AssessmentLayout>
  );
};

// Career card component
const CareerCard = ({ career }: { career: CareerSuggestion & { category: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-gray-800">{career.title}</h3>
      </div>
      <div className="mb-3">
        <span className="inline-block bg-app-purple/10 text-app-purple text-xs px-2 py-1 rounded-full">
          {career.category}
        </span>
      </div>
      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
        {career.description}
      </p>
      <div className="text-xs text-gray-500">
        Required traits: {career.traits.join(", ")}
      </div>
    </motion.div>
  );
};

export default CareerLibrary;
