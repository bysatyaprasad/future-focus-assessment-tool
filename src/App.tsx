
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { AssessmentProvider } from "./context/AssessmentContext";
import Welcome from "./pages/Welcome";
import AssessmentQuestions from "./pages/AssessmentQuestions";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import CounselorGuide from "./pages/CounselorGuide";
import CareerLibrary from "./pages/CareerLibrary";

function App() {
  return (
    <AssessmentProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/assessment" element={<AssessmentQuestions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/counselor-guide" element={<CounselorGuide />} />
        <Route path="/career-library" element={<CareerLibrary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AssessmentProvider>
  );
}

export default App;
