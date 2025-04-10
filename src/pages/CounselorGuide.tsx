
import React from "react";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { scoringMethodology, counselorGuidelines, getTotalCareerCount } from "@/data/assessmentData";
import { ArrowLeft, BookOpen, Lightbulb, PersonStanding, Scale, LineChart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CounselorGuide = () => {
  const totalCareerCount = getTotalCareerCount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-purple/5 to-app-blue/10 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="flex items-center mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Assessment
            </Button>
          </Link>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Future Skills School</h1>
            <p className="text-sm text-gray-600">Counselor Guide</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader className="bg-app-purple/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-app-purple" />
                  Guide Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <nav className="space-y-2">
                  {[
                    { label: "Assessment Overview", icon: <PersonStanding className="h-4 w-4" />, href: "#overview" },
                    { label: "Scoring Methodology", icon: <Scale className="h-4 w-4" />, href: "#scoring" },
                    { label: "Interpretation Guidelines", icon: <Lightbulb className="h-4 w-4" />, href: "#interpretation" },
                    { label: "Career Path Analysis", icon: <LineChart className="h-4 w-4" />, href: "#careers" },
                    { label: "Supporting Resources", icon: <GraduationCap className="h-4 w-4" />, href: "#resources" }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-app-purple/10 text-gray-700 hover:text-app-purple-dark transition-colors"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Facts</CardTitle>
                <CardDescription>Key statistics about the assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-sm text-gray-600">Total Questions</span>
                  <span className="font-semibold">{personalityQuestions.length + interestQuestions.length}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-sm text-gray-600">Career Options</span>
                  <span className="font-semibold">{totalCareerCount}+</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-sm text-gray-600">Trait Categories</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completion Time</span>
                  <span className="font-semibold">5-7 minutes</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section id="overview" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <PersonStanding className="h-6 w-6 text-app-purple" />
                Assessment Overview
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    The Future Skills School Career Assessment is designed to help students discover high-income, 
                    future-ready career paths that align with their natural strengths and interests. The assessment 
                    measures 15 different trait categories across two main sections:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-app-purple-light p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-2">Mind Map Section</h3>
                      <p className="text-sm text-gray-700">
                        Evaluates personality traits, work styles, and natural tendencies across 
                        various situations. These questions reveal how students naturally approach 
                        tasks and interact with others.
                      </p>
                    </div>
                    <div className="bg-app-green p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-2">Interest Finder Section</h3>
                      <p className="text-sm text-gray-700">
                        Identifies activities and subject areas that energize the student. 
                        These questions help match students with career fields they're likely 
                        to find engaging and rewarding.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Together, these sections create a comprehensive profile that matches students 
                    with over {totalCareerCount} future-ready, high-income career options. Each 
                    career match includes actionable steps, required skills, and educational pathways.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="scoring" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Scale className="h-6 w-6 text-app-purple" />
                Scoring Methodology
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="question">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="question">Question Scoring</TabsTrigger>
                      <TabsTrigger value="trait">Trait Calculation</TabsTrigger>
                      <TabsTrigger value="career">Career Matching</TabsTrigger>
                      <TabsTrigger value="interpretation">Interpretation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="question" className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">Question Scoring</h3>
                      <p>{scoringMethodology.questionScoring}</p>
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h4 className="font-medium text-gray-800 mb-2">Response Scale:</h4>
                        <ol className="space-y-2 pl-5 list-decimal">
                          <li className="text-gray-700"><span className="font-medium">1:</span> Not at all like me</li>
                          <li className="text-gray-700"><span className="font-medium">2:</span> Not really like me</li>
                          <li className="text-gray-700"><span className="font-medium">3:</span> Somewhat like me</li>
                          <li className="text-gray-700"><span className="font-medium">4:</span> Like me</li>
                          <li className="text-gray-700"><span className="font-medium">5:</span> Very much like me</li>
                        </ol>
                      </div>
                    </TabsContent>
                    <TabsContent value="trait" className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">Trait Calculation</h3>
                      <p>{scoringMethodology.traitCalculation}</p>
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h4 className="font-medium text-gray-800 mb-2">Example:</h4>
                        <p className="text-gray-700">
                          If a student answers 3 questions related to the "Analytical" trait with scores of 
                          5, 4, and 3, their trait score would be (5+4+3)/3 = 4.0.
                        </p>
                        <p className="text-gray-700 mt-2">
                          For StressManagement, if a student scores 2 on a question, the inverted score 
                          would be (6-2) = 4, indicating better stress management ability.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="career" className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">Career Matching</h3>
                      <p>{scoringMethodology.careerMatching}</p>
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h4 className="font-medium text-gray-800 mb-2">Example:</h4>
                        <p className="text-gray-700">
                          For "Data Scientist" with primary trait "Analytical" and secondary traits 
                          "TechAptitude" and "WorkHabits":
                        </p>
                        <ul className="mt-2 space-y-1">
                          <li className="text-gray-700">- If Analytical = 4.5, TechAptitude = 4.0, WorkHabits = 3.5</li>
                          <li className="text-gray-700">- Primary trait contribution: 4.5/5 × 0.5 = 0.45</li>
                          <li className="text-gray-700">- Secondary traits: (4.0/5 × 0.25) + (3.5/5 × 0.25) = 0.2 + 0.175 = 0.375</li>
                          <li className="text-gray-700">- Total match score: 0.45 + 0.375 = 0.825 = 82.5%</li>
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="interpretation" className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">Interpretation Guidance</h3>
                      <p>{scoringMethodology.interpretationGuidance}</p>
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h4 className="font-medium text-gray-800 mb-2">Score Ranges:</h4>
                        <ul className="space-y-2">
                          <li className="text-gray-700"><span className="font-medium">4.5-5.0:</span> Exceptional strength</li>
                          <li className="text-gray-700"><span className="font-medium">3.5-4.4:</span> Strong characteristic</li>
                          <li className="text-gray-700"><span className="font-medium">2.5-3.4:</span> Moderate presence</li>
                          <li className="text-gray-700"><span className="font-medium">1.5-2.4:</span> Limited presence</li>
                          <li className="text-gray-700"><span className="font-medium">1.0-1.4:</span> Minimal alignment</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            <section id="interpretation" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-app-purple" />
                Interpretation Guidelines
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6">
                    When discussing assessment results with students, consider these key areas to provide 
                    comprehensive guidance and support their career exploration journey:
                  </p>
                  <Accordion type="multiple" className="space-y-4">
                    {counselorGuidelines.map((guideline, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                        <AccordionTrigger className="px-4 py-2 hover:bg-gray-50">
                          {guideline.area}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 bg-gray-50">
                          <p className="text-gray-700">{guideline.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            <section id="careers" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <LineChart className="h-6 w-6 text-app-purple" />
                Career Path Analysis
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    The Future Skills School assessment features over {totalCareerCount} high-income, future-ready 
                    careers that represent opportunities across various industries. Each career includes:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-semibold text-gray-800 mb-1">Career Information</h3>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Descriptive overview</li>
                        <li>• Required traits</li>
                        <li>• Key skills needed</li>
                        <li>• Educational requirements</li>
                        <li>• Salary range (in ₹)</li>
                        <li>• Career outlook</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-semibold text-gray-800 mb-1">Actionable Steps</h3>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Specific learning resources</li>
                        <li>• Skill development activities</li>
                        <li>• Portfolio building suggestions</li>
                        <li>• Community engagement opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-app-purple/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">When Discussing Career Matches:</h3>
                    <ol className="space-y-3 pl-5 list-decimal">
                      <li className="text-gray-700">
                        <span className="font-medium">Focus on patterns, not just titles</span> - Help students 
                        recognize patterns across their top career matches rather than fixating on specific job titles.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Discuss transferable skills</span> - Highlight how core skills 
                        are applicable across multiple related careers.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Balance passion and practicality</span> - Guide students in 
                        finding careers that balance personal interests with practical considerations like market 
                        demand and income potential.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Encourage exploration</span> - Suggest informational interviews, 
                        job shadowing, or internships to explore top-matching careers firsthand.
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="resources" className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-app-purple" />
                Supporting Resources
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6">
                    Here are additional resources to support your counseling sessions with students:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">For Counselors</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-purple/20 rounded-full flex items-center justify-center text-app-purple mt-0.5">1</div>
                          <span className="text-gray-700">Discussion guide for exploring assessment results</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-purple/20 rounded-full flex items-center justify-center text-app-purple mt-0.5">2</div>
                          <span className="text-gray-700">Workshop materials for group career exploration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-purple/20 rounded-full flex items-center justify-center text-app-purple mt-0.5">3</div>
                          <span className="text-gray-700">Career development milestone planning templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-purple/20 rounded-full flex items-center justify-center text-app-purple mt-0.5">4</div>
                          <span className="text-gray-700">Supplementary industry trend reports and insights</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-gray-800">For Students</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-green rounded-full flex items-center justify-center text-emerald-700 mt-0.5">1</div>
                          <span className="text-gray-700">Career exploration workbook for self-reflection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-green rounded-full flex items-center justify-center text-emerald-700 mt-0.5">2</div>
                          <span className="text-gray-700">Skill development resource directory by career path</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-green rounded-full flex items-center justify-center text-emerald-700 mt-0.5">3</div>
                          <span className="text-gray-700">Educational pathway planning worksheets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 flex-shrink-0 bg-app-green rounded-full flex items-center justify-center text-emerald-700 mt-0.5">4</div>
                          <span className="text-gray-700">Future Skills School career research guide</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 bg-app-blue/50 p-4 rounded-lg text-center">
                    <p className="text-gray-800 font-medium">
                      For additional support and resources, contact the Future Skills School team at:
                    </p>
                    <p className="text-app-purple-dark font-semibold mt-1">
                      support@futureskillsschool.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for display purposes
const personalityQuestions = { length: 13 };
const interestQuestions = { length: 16 };

export default CounselorGuide;
