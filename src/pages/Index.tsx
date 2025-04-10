
import React, { useEffect } from "react";
import { useAssessment } from "@/context/AssessmentContext";
import Welcome from "./Welcome";
import AssessmentQuestions from "./AssessmentQuestions";
import Results from "./Results";

const Index = () => {
  const { currentView, setCurrentView } = useAssessment();
  
  useEffect(() => {
    // Check if there's a stored view in localStorage
    const storedView = localStorage.getItem("currentView") as "welcome" | "assessment" | "results" | null;
    
    // If there is, restore it
    if (storedView) {
      setCurrentView(storedView);
    }
  }, [setCurrentView]);

  // Return the appropriate view based on the current state
  switch (currentView) {
    case "welcome":
      return <Welcome />;
    case "assessment":
      return <AssessmentQuestions />;
    case "results":
      return <Results />;
    default:
      return <Welcome />;
  }
};

export default Index;
