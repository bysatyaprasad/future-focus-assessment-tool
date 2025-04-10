
import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/AssessmentLayout";
import { scoringMethodology, counselorGuidelines, traitDescriptions } from "@/data/assessmentData";
import { 
  BarChart, 
  ClipboardList, 
  FileBarChart, 
  Settings, 
  ArrowLeft,
  Lightbulb,
  BookText,
  Scale,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const CounselorGuide = () => {
  return (
    <AssessmentLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Career Compass Counselor Guide</h1>
            <p className="text-gray-600">
              Detailed interpretation guidelines for career counselors
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Assessment
            </Link>
          </Button>
        </motion.div>

        <Tabs defaultValue="scoring">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="scoring" className="flex items-center gap-1">
              <Scale className="h-4 w-4" />
              <span className="hidden sm:inline">Scoring Methodology</span>
            </TabsTrigger>
            <TabsTrigger value="interpretation" className="flex items-center gap-1">
              <ClipboardList className="h-4 w-4" />
              <span className="hidden sm:inline">Interpretation Guide</span>
            </TabsTrigger>
            <TabsTrigger value="traits" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Trait Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="practices" className="flex items-center gap-1">
              <BookText className="h-4 w-4" />
              <span className="hidden sm:inline">Best Practices</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="scoring">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Alert>
                <FileBarChart className="h-4 w-4" />
                <AlertTitle>Assessment Design</AlertTitle>
                <AlertDescription>
                  Our assessment uses a validated questionnaire of 29 questions across two sections to measure 15 key traits.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scoring System</CardTitle>
                  <CardDescription>How answers are evaluated and scores calculated</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Question Scoring</h3>
                    <p className="text-gray-600">{scoringMethodology.questionScoring}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Trait Calculation</h3>
                    <p className="text-gray-600">{scoringMethodology.traitCalculation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Career Matching</h3>
                    <p className="text-gray-600">{scoringMethodology.careerMatching}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interpretation Guidance</h3>
                    <p className="text-gray-600">{scoringMethodology.interpretationGuidance}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Sections</CardTitle>
                  <CardDescription>Overview of our two-part assessment structure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Mind Map (Personality)</h3>
                    <p className="text-gray-600">13 questions measuring traits related to thinking patterns, work style, social approach, and stress management.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interest Finder</h3>
                    <p className="text-gray-600">16 questions measuring traits related to vocational interests, preferred activities, and work environments.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Career Matching Algorithm</CardTitle>
                  <CardDescription>How the system generates career recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Our algorithm matches students with careers using a weighted approach that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Gives 50% weight to the primary trait required for each career</li>
                    <li>Distributes the remaining 50% weight across secondary traits</li>
                    <li>Normalizes scores when traits are missing</li>
                    <li>Presents careers ranked by match percentage</li>
                  </ul>
                  <p className="text-gray-700 font-medium mt-2">
                    The algorithm evaluates all 30 high-income, future-ready career options in our database.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="interpretation">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Alert>
                <ClipboardList className="h-4 w-4" />
                <AlertTitle>Interpretation Guidelines</AlertTitle>
                <AlertDescription>
                  Effective approaches to help students understand and apply their assessment results.
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {counselorGuidelines.map((guideline, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{guideline.area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{guideline.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Discussing Results With Students</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    When reviewing results with students, consider these approaches:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Begin by highlighting strengths before discussing growth areas</li>
                    <li>Frame results as possibilities rather than limitations</li>
                    <li>Connect trait patterns to concrete examples from the student's life</li>
                    <li>Discuss both the student's reaction to their results and whether they feel the assessment accurately reflects them</li>
                    <li>Help translate career matches into specific next steps and action plans</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="traits">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Alert>
                <Users className="h-4 w-4" />
                <AlertTitle>15 Key Traits</AlertTitle>
                <AlertDescription>
                  Understanding the traits measured by the assessment and their career implications.
                </AlertDescription>
              </Alert>
              
              <ScrollArea className="h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-4">
                  {Object.entries(traitDescriptions).map(([trait, description]) => (
                    <Card key={trait}>
                      <CardHeader>
                        <CardTitle>{trait}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-gray-600">{description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700">Career Relevance:</h4>
                          <p className="text-sm text-gray-600">
                            {trait === "MindStyles" && "Important for research, education, arts, and innovation roles."}
                            {trait === "WorkHabits" && "Critical for management, finance, healthcare, and technical roles."}
                            {trait === "TeamSpirit" && "Valuable in teamwork environments, customer service, and collaborative fields."}
                            {trait === "StressManagement" && "Essential for high-pressure careers like emergency services, healthcare, and leadership positions."}
                            {trait === "ExpressionStyle" && "Important for sales, marketing, performance, and public-facing roles."}
                            {trait === "HandsOn" && "Suited for engineering, construction, manufacturing, and technical fields."}
                            {trait === "Analytical" && "Critical for science, data analysis, research, and problem-solving careers."}
                            {trait === "Creative" && "Valuable in design, content creation, marketing, and innovative roles."}
                            {trait === "Helpful" && "Suited for healthcare, education, counseling, and customer support."}
                            {trait === "Leadership" && "Important for management, entrepreneurship, and team leadership positions."}
                            {trait === "Organized" && "Valuable in administration, logistics, finance, and process-oriented roles."}
                            {trait === "TechAptitude" && "Essential for IT, software development, digital media, and tech-oriented careers."}
                            {trait === "Adaptability" && "Critical in rapidly changing fields like technology, startups, and global business."}
                            {trait === "Innovation" && "Valuable in research, product development, entrepreneurship, and creative fields."}
                            {trait === "Resilience" && "Important for challenging careers with high learning curves or competitive environments."}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="practices">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Best Practices for Assessment Use</AlertTitle>
                <AlertDescription>
                  Guidance for effectively implementing the Career Compass in counseling settings.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardHeader>
                  <CardTitle>Administration Best Practices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Ensure students understand there are no "right" or "wrong" answers</li>
                    <li>Provide a quiet, distraction-free environment for assessment completion</li>
                    <li>Encourage students to answer based on their true preferences, not what they think others expect</li>
                    <li>Schedule sufficient time for both assessment completion and results discussion</li>
                    <li>Prepare students by explaining the purpose and benefits of the assessment beforehand</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ethical Considerations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Present results as possibilities, not definitive predictions or limitations</li>
                    <li>Acknowledge that assessments are one tool among many for career exploration</li>
                    <li>Maintain confidentiality of student results</li>
                    <li>Be mindful of cultural and contextual factors that may influence results</li>
                    <li>Avoid using results to steer students toward or away from specific paths</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Follow-Up Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    After reviewing assessment results with students:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Create a personalized action plan with specific next steps</li>
                    <li>Connect students with resources related to their top career matches</li>
                    <li>Recommend informational interviews or job shadowing opportunities</li>
                    <li>Suggest courses or extracurricular activities that develop key skills</li>
                    <li>Schedule follow-up sessions to track progress and refine plans</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </AssessmentLayout>
  );
};

export default CounselorGuide;
