
import React, { useEffect } from "react";
import { useAssessment } from "@/context/AssessmentContext";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import AssessmentQuestions from "./AssessmentQuestions";
import Results from "./Results";

const Index = () => {
  const { currentView, setCurrentView } = useAssessment();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if there's a stored view in localStorage
    const storedView = localStorage.getItem("currentView") as "welcome" | "assessment" | "results" | "library" | null;
    
    // If there is, restore it and navigate to the appropriate route
    if (storedView) {
      setCurrentView(storedView);
      
      // Navigate to the appropriate route based on the stored view
      switch (storedView) {
        case "welcome":
          navigate("/welcome");
          break;
        case "assessment":
          navigate("/assessment");
          break;
        case "results":
          navigate("/results");
          break;
        default:
          navigate("/welcome");
      }
    }
  }, [setCurrentView, navigate]);

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
