
import React from "react";
import { useAssessment } from "@/context/AssessmentContext";
import Welcome from "./Welcome";
import AssessmentQuestions from "./AssessmentQuestions";
import Results from "./Results";

const Index = () => {
  const { currentView } = useAssessment();

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
