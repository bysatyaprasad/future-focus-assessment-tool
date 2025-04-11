
import { AssessmentSection, Question, TraitCategory, CareerSuggestion, AssessmentResult } from "@/types/assessment";
import { additionalCareers } from "./additionalCareers";

// Personality Assessment Questions
const personalityQuestions: Question[] = [
  {
    id: "p1",
    text: "I enjoy exploring new ideas or subjects.",
    category: "MindStyles",
  },
  {
    id: "p2",
    text: "I like learning about new cultures or traditions.",
    category: "MindStyles",
  },
  {
    id: "p3",
    text: "I make sure to complete my homework/assignments on time.",
    category: "WorkHabits",
  },
  {
    id: "p4",
    text: "I am well-organized and keep my study materials/books in order.",
    category: "WorkHabits",
  },
  {
    id: "p5",
    text: "I like being the centre of attention at social gatherings.",
    category: "ExpressionStyle",
  },
  {
    id: "p6",
    text: "I often help my classmates with their studies.",
    category: "TeamSpirit",
  },
  {
    id: "p7",
    text: "I get along well with most of my classmates and teachers.",
    category: "TeamSpirit",
  },
  {
    id: "p8",
    text: "I often feel anxious before exams.",
    category: "StressManagement",
  },
  {
    id: "p9",
    text: "I get upset easily when things don't go as planned or as expected.",
    category: "StressManagement",
  },
  {
    id: "p10",
    text: "I find it easy to adjust to new situations or changes.",
    category: "Adaptability",
  },
  {
    id: "p11",
    text: "I can quickly learn new technologies or digital tools.",
    category: "TechAptitude",
  },
  {
    id: "p12",
    text: "I often think of unique solutions to problems.",
    category: "Innovation",
  },
  {
    id: "p13",
    text: "I keep trying even when things get difficult.",
    category: "Resilience",
  },
];

// Interests Assessment Questions
const interestQuestions: Question[] = [
  {
    id: "i1",
    text: "I enjoy building things with my hands.",
    category: "HandsOn",
  },
  {
    id: "i2",
    text: "I like working with tools, machines, or technology.",
    category: "HandsOn",
  },
  {
    id: "i3",
    text: "I enjoy solving complex problems and puzzles.",
    category: "Analytical",
  },
  {
    id: "i4",
    text: "I'm curious about how things work and why things happen.",
    category: "Analytical",
  },
  {
    id: "i5",
    text: "I enjoy creative activities like art, music, or writing.",
    category: "Creative",
  },
  {
    id: "i6",
    text: "I prefer tasks that allow me to express myself.",
    category: "Creative",
  },
  {
    id: "i7",
    text: "I enjoy helping others and working with people.",
    category: "Helpful",
  },
  {
    id: "i8",
    text: "I'm good at explaining things to others.",
    category: "Helpful",
  },
  {
    id: "i9",
    text: "I like to take charge and lead others.",
    category: "Leadership",
  },
  {
    id: "i10",
    text: "I enjoy persuading others and selling ideas or products.",
    category: "Leadership",
  },
  {
    id: "i11",
    text: "I like following clear procedures and rules.",
    category: "Organized",
  },
  {
    id: "i12",
    text: "I enjoy organizing information and working with data.",
    category: "Organized",
  },
  {
    id: "i13",
    text: "I enjoy working with digital tools and technologies.",
    category: "TechAptitude",
  },
  {
    id: "i14",
    text: "I'm comfortable trying new methods or approaches.",
    category: "Adaptability",
  },
  {
    id: "i15",
    text: "I like coming up with creative solutions to problems.",
    category: "Innovation",
  },
  {
    id: "i16",
    text: "I don't give up easily when facing challenges.",
    category: "Resilience",
  },
];

export const assessmentSections: AssessmentSection[] = [
  {
    id: "personality",
    title: "Mind Map",
    description: "Let's understand how you think and work!",
    questions: personalityQuestions,
  },
  {
    id: "interests",
    title: "Interest Finder",
    description: "What activities make you feel energized and excited?",
    questions: interestQuestions,
  },
];

// Original career suggestions from the previous implementation
const originalCareers: CareerSuggestion[] = [
  {
    title: "Data Scientist",
    description: "Analyze complex data sets to find patterns and insights that help organizations make better decisions.",
    traits: ["Analytical", "TechAptitude", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Learn Python, R, and SQL",
      "Take online courses in statistics and machine learning",
      "Build a portfolio of data analysis projects",
      "Participate in data science competitions on Kaggle"
    ],
    skills: ["Statistical analysis", "Machine learning", "Data visualization", "Programming"],
    education: "Bachelor's in statistics, mathematics, computer science, or related field",
    outlook: "Projected 36% growth over the next decade",
    salary: "₹8-35 lakhs per year depending on experience and location"
  },
  {
    title: "AI/Machine Learning Engineer",
    description: "Design and implement artificial intelligence systems and machine learning models.",
    traits: ["TechAptitude", "Analytical", "Innovation"],
    score: 0,
    actionableSteps: [
      "Master programming in Python",
      "Learn machine learning frameworks like TensorFlow and PyTorch",
      "Take courses in deep learning and neural networks",
      "Contribute to open-source AI projects"
    ],
    skills: ["Programming", "Math", "Problem-solving", "Algorithm design"],
    education: "Bachelor's or Master's in computer science or related field",
    outlook: "Projected 40% growth over the next decade",
    salary: "₹10-45 lakhs per year depending on experience and company"
  },
  {
    title: "Blockchain Developer",
    description: "Create and maintain blockchain systems and smart contracts for various applications.",
    traits: ["TechAptitude", "Innovation", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Learn blockchain fundamentals and cryptography",
      "Master programming languages like Solidity and Rust",
      "Build decentralized applications (DApps)",
      "Join blockchain developer communities"
    ],
    skills: ["Smart contract development", "Cryptography", "Distributed systems", "Security"],
    education: "Computer science background with specialized blockchain certifications",
    outlook: "Growing demand as blockchain adoption increases across industries",
    salary: "₹12-40 lakhs per year"
  },
  {
    title: "Digital Healthcare Specialist",
    description: "Implement and manage digital health technologies and telemedicine systems.",
    traits: ["TechAptitude", "Helpful", "Adaptability"],
    score: 0,
    actionableSteps: [
      "Get healthcare IT certifications",
      "Learn about electronic health records systems",
      "Study telemedicine technologies",
      "Understand healthcare data privacy regulations"
    ],
    skills: ["Healthcare IT", "Patient care", "Data management", "Digital communication"],
    education: "Healthcare background with IT specialization or vice versa",
    outlook: "Rapidly growing field with telemedicine adoption",
    salary: "₹7-25 lakhs per year"
  },
  {
    title: "UX/UI Designer",
    description: "Create user-friendly interfaces and experiences for websites and applications.",
    traits: ["Creative", "TechAptitude", "Helpful"],
    score: 0,
    actionableSteps: [
      "Build a portfolio of design projects",
      "Learn design tools like Figma and Adobe XD",
      "Study user research methodologies",
      "Practice prototyping and user testing"
    ],
    skills: ["Visual design", "User research", "Prototyping", "Information architecture"],
    education: "Design degree or specialized UX/UI bootcamp",
    outlook: "Consistent demand across all digital industries",
    salary: "₹5-30 lakhs per year"
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect organizations' computer systems and networks from security threats.",
    traits: ["Analytical", "TechAptitude", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Get certified in security+ or CISSP",
      "Learn ethical hacking techniques",
      "Practice in virtual security labs",
      "Stay updated on latest security threats"
    ],
    skills: ["Network security", "Threat analysis", "Security monitoring", "Incident response"],
    education: "Computer science background with cybersecurity certifications",
    outlook: "Critical growing field with persistent skills gap",
    salary: "₹8-40 lakhs per year"
  },
  {
    title: "Digital Content Creator",
    description: "Create engaging content for social media, websites, and other digital platforms.",
    traits: ["Creative", "ExpressionStyle", "Adaptability"],
    score: 0,
    actionableSteps: [
      "Build a personal brand on social platforms",
      "Learn content creation tools for video, graphics, and audio",
      "Understand digital marketing basics",
      "Create a consistent content calendar"
    ],
    skills: ["Storytelling", "Video production", "Social media management", "Audience engagement"],
    education: "Communications, marketing, or self-taught with strong portfolio",
    outlook: "Expanding rapidly with growing creator economy",
    salary: "₹3-40 lakhs per year (highly variable based on audience and monetization)"
  },
  {
    title: "Digital Marketer",
    description: "Plan and execute marketing campaigns across digital channels.",
    traits: ["Creative", "Leadership", "Analytical"],
    score: 0,
    actionableSteps: [
      "Get Google and social media marketing certifications",
      "Learn SEO and content marketing strategies",
      "Practice data analysis for marketing performance",
      "Create sample campaigns for your portfolio"
    ],
    skills: ["SEO", "Content strategy", "Social media marketing", "Analytics"],
    education: "Marketing degree or specialized digital marketing certifications",
    outlook: "Essential role in virtually all businesses",
    salary: "₹4-25 lakhs per year"
  },
  {
    title: "Product Manager",
    description: "Guide product development from concept to launch, balancing business and user needs.",
    traits: ["Leadership", "Adaptability", "Innovation"],
    score: 0,
    actionableSteps: [
      "Learn product development methodologies like Agile",
      "Understand user research and feedback collection",
      "Practice product roadmapping and prioritization",
      "Develop technical knowledge relevant to your product area"
    ],
    skills: ["Strategic thinking", "Team leadership", "User empathy", "Communication"],
    education: "Business background with technical knowledge or vice versa",
    outlook: "Key role in tech companies and product-based businesses",
    salary: "₹10-40 lakhs per year"
  },
  {
    title: "Business Analytics Manager",
    description: "Use data analysis to improve business operations and guide strategic decisions.",
    traits: ["Analytical", "Leadership", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Master Excel and data visualization tools",
      "Learn SQL for database queries",
      "Study business intelligence platforms",
      "Practice presenting data insights to non-technical audiences"
    ],
    skills: ["Data analysis", "Business strategy", "Reporting", "Problem-solving"],
    education: "Business or analytics degree with professional experience",
    outlook: "Critical role in data-driven organizations",
    salary: "₹8-35 lakhs per year"
  },
  {
    title: "EdTech Specialist",
    description: "Develop and implement technology solutions for educational purposes.",
    traits: ["TechAptitude", "Helpful", "Innovation"],
    score: 0,
    actionableSteps: [
      "Learn about learning management systems",
      "Study instructional design principles",
      "Understand ed-tech tools and platforms",
      "Stay informed about educational psychology and teaching methods"
    ],
    skills: ["Educational technology", "Curriculum design", "Training", "Digital learning"],
    education: "Education background with tech skills or tech background with teaching interest",
    outlook: "Growing field as education continues to digitize",
    salary: "₹5-20 lakhs per year"
  },
  {
    title: "Biotechnology Researcher",
    description: "Develop biological solutions in medicine, agriculture, and environmental conservation.",
    traits: ["Analytical", "Innovation", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Focus on biology, chemistry, and computational biology",
      "Learn lab techniques and procedures",
      "Participate in research projects",
      "Follow advancements in genomics and molecular biology"
    ],
    skills: ["Lab techniques", "Data analysis", "Research methodology", "Scientific writing"],
    education: "Degree in biotechnology, molecular biology, or related field",
    outlook: "Growing field with applications in healthcare, agriculture, and beyond",
    salary: "₹4-30 lakhs per year"
  },
  {
    title: "Environmental Scientist",
    description: "Study environmental conditions and develop solutions to protect the environment.",
    traits: ["Analytical", "MindStyles", "Resilience"],
    score: 0,
    actionableSteps: [
      "Study environmental science fundamentals",
      "Learn about sustainable practices and technologies",
      "Develop field research skills",
      "Understand environmental policy and regulations"
    ],
    skills: ["Environmental analysis", "Conservation", "Sustainable planning", "Research"],
    education: "Environmental science or related degree",
    outlook: "Increasing importance with climate change and sustainability focus",
    salary: "₹5-15 lakhs per year"
  },
  {
    title: "Renewable Energy Engineer",
    description: "Design and develop systems that generate clean, sustainable energy.",
    traits: ["HandsOn", "Innovation", "TechAptitude"],
    score: 0,
    actionableSteps: [
      "Study electrical or mechanical engineering fundamentals",
      "Learn about different renewable energy technologies",
      "Understand energy storage systems",
      "Study energy efficiency principles"
    ],
    skills: ["System design", "Technical problem-solving", "Project management", "Sustainability"],
    education: "Engineering degree with renewable energy specialization",
    outlook: "High growth as countries transition to clean energy",
    salary: "₹6-25 lakhs per year"
  },
  {
    title: "Robotics Engineer",
    description: "Design, build, and maintain robots and automated systems for various applications.",
    traits: ["HandsOn", "TechAptitude", "Analytical"],
    score: 0,
    actionableSteps: [
      "Learn programming for robotics (Python, C++)",
      "Study mechanical and electrical engineering basics",
      "Practice with robotics kits and platforms",
      "Understand AI and computer vision principles"
    ],
    skills: ["Robotics programming", "Mechanical design", "System integration", "Problem-solving"],
    education: "Engineering degree with robotics focus or specialized certifications",
    outlook: "Growing field with applications across industries",
    salary: "₹7-35 lakhs per year"
  },
  {
    title: "Project Manager",
    description: "Plan, execute, and oversee projects from start to finish, ensuring they meet goals.",
    traits: ["Organized", "Leadership", "Adaptability"],
    score: 0,
    actionableSteps: [
      "Learn project management methodologies (Agile, Scrum, etc.)",
      "Get certified in project management (PMP, PRINCE2)",
      "Practice planning and scheduling techniques",
      "Develop team leadership and communication skills"
    ],
    skills: ["Planning", "Team coordination", "Risk management", "Stakeholder communication"],
    education: "Degree with project management certifications",
    outlook: "Essential role across all industries",
    salary: "₹7-30 lakhs per year"
  },
  {
    title: "Supply Chain Analyst",
    description: "Optimize supply chains to improve efficiency, reduce costs, and ensure reliability.",
    traits: ["Organized", "Analytical", "Adaptability"],
    score: 0,
    actionableSteps: [
      "Learn supply chain management fundamentals",
      "Study logistics and inventory management",
      "Understand supply chain software and technologies",
      "Practice data analysis for optimization"
    ],
    skills: ["Logistics planning", "Process optimization", "Analytics", "Vendor management"],
    education: "Business, supply chain, or logistics degree",
    outlook: "Critical role as global supply chains evolve",
    salary: "₹6-20 lakhs per year"
  },
  {
    title: "Financial Analyst",
    description: "Analyze financial data to guide investment decisions and business strategy.",
    traits: ["Analytical", "WorkHabits", "Organized"],
    score: 0,
    actionableSteps: [
      "Learn financial modeling and analysis",
      "Study market trends and investment principles",
      "Practice with financial software and tools",
      "Understand risk assessment and portfolio management"
    ],
    skills: ["Financial modeling", "Data analysis", "Investment knowledge", "Report creation"],
    education: "Finance, accounting, or economics degree",
    outlook: "Consistently important role in business and investment",
    salary: "₹6-30 lakhs per year"
  },
  {
    title: "Cloud Computing Specialist",
    description: "Design, implement, and manage cloud computing infrastructure and services.",
    traits: ["TechAptitude", "Adaptability", "Analytical"],
    score: 0,
    actionableSteps: [
      "Get certified in major cloud platforms (AWS, Azure, Google Cloud)",
      "Learn cloud architecture principles",
      "Study DevOps and automation tools",
      "Understand cloud security best practices"
    ],
    skills: ["Cloud architecture", "Network infrastructure", "Security", "Automation"],
    education: "IT background with cloud certifications",
    outlook: "High demand as businesses move to cloud environments",
    salary: "₹8-35 lakhs per year"
  },
  {
    title: "Augmented/Virtual Reality Developer",
    description: "Create immersive AR/VR experiences for education, entertainment, and business applications.",
    traits: ["TechAptitude", "Creative", "Innovation"],
    score: 0,
    actionableSteps: [
      "Learn 3D modeling and game development engines",
      "Study AR/VR design principles",
      "Practice creating interactive experiences",
      "Understand spatial computing concepts"
    ],
    skills: ["3D development", "Interactive design", "Programming", "User experience"],
    education: "Computer science or design background with AR/VR focus",
    outlook: "Growing field with expanded applications across industries",
    salary: "₹8-25 lakhs per year"
  },
  {
    title: "Quantum Computing Researcher",
    description: "Develop quantum algorithms and applications that solve complex computational problems beyond classical computing capabilities.",
    traits: ["Analytical", "TechAptitude", "Innovation"],
    score: 0,
    actionableSteps: [
      "Study quantum mechanics and linear algebra",
      "Learn quantum programming languages like Qiskit or Cirq",
      "Practice with quantum simulators",
      "Follow quantum computing research publications"
    ],
    skills: ["Quantum algorithms", "Mathematical modeling", "Programming", "Research methodology"],
    education: "Advanced degree in physics, computer science, or mathematics",
    outlook: "Emerging field with transformative potential across industries",
    salary: "₹10-50 lakhs per year"
  },
  {
    title: "Biomedical Engineer",
    description: "Design and develop medical equipment, devices, and software to improve healthcare delivery and patient outcomes.",
    traits: ["HandsOn", "Innovation", "Analytical"],
    score: 0,
    actionableSteps: [
      "Study biology and engineering fundamentals",
      "Learn medical device regulations and standards",
      "Practice with design and simulation software",
      "Understand clinical workflows and healthcare systems"
    ],
    skills: ["Medical device design", "Biomechanics", "Clinical validation", "Regulatory compliance"],
    education: "Degree in biomedical engineering or related field",
    outlook: "Growing with healthcare innovation and aging population",
    salary: "₹7-30 lakhs per year"
  },
  {
    title: "Fintech Product Developer",
    description: "Build innovative financial technology products and services that transform banking, payments, and investments.",
    traits: ["TechAptitude", "Innovation", "Analytical"],
    score: 0,
    actionableSteps: [
      "Understand financial systems and regulations",
      "Learn secure application development",
      "Study payment processing systems and APIs",
      "Keep updated on emerging fintech trends"
    ],
    skills: ["Financial knowledge", "Security", "API integration", "User experience design"],
    education: "Computer science or finance background with interdisciplinary knowledge",
    outlook: "Rapidly growing sector disrupting traditional finance",
    salary: "₹10-40 lakhs per year"
  },
  {
    title: "Legal Technology Specialist",
    description: "Implement and manage technology solutions for legal practices, improving efficiency and access to legal services.",
    traits: ["TechAptitude", "Organized", "Analytical"],
    score: 0,
    actionableSteps: [
      "Learn about legal processes and workflows",
      "Understand legal document management systems",
      "Study legal data analytics and AI applications",
      "Keep updated on legal compliance requirements"
    ],
    skills: ["Legal knowledge", "Process optimization", "Data management", "Compliance"],
    education: "Legal background with technology skills or vice versa",
    outlook: "Growing field as legal industry embraces digital transformation",
    salary: "₹8-30 lakhs per year"
  },
  {
    title: "Digital Forensics Analyst",
    description: "Recover and investigate material found in digital devices related to cybercrime and other digital investigations.",
    traits: ["Analytical", "TechAptitude", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Learn digital forensics tools and methodologies",
      "Study cybersecurity fundamentals",
      "Understand legal and ethical considerations",
      "Practice with incident response scenarios"
    ],
    skills: ["Data recovery", "Malware analysis", "Chain of custody", "Investigative techniques"],
    education: "Cybersecurity or computer science degree with forensics specialization",
    outlook: "Increasing demand with rising cybercrime rates",
    salary: "₹8-35 lakhs per year"
  },
  {
    title: "DevOps Engineer",
    description: "Bridge development and operations to streamline software deployment and infrastructure management.",
    traits: ["TechAptitude", "WorkHabits", "Adaptability"],
    score: 0,
    actionableSteps: [
      "Learn infrastructure as code tools like Terraform",
      "Master containerization with Docker and Kubernetes",
      "Study CI/CD pipelines and automation",
      "Understand cloud infrastructure management"
    ],
    skills: ["Automation", "Cloud architecture", "System administration", "Programming"],
    education: "Computer science or IT background with DevOps certifications",
    outlook: "Essential role in modern software development",
    salary: "₹8-40 lakhs per year"
  },
  {
    title: "AI Ethics Consultant",
    description: "Ensure ethical implementation of AI technologies and address bias, privacy, and fairness concerns.",
    traits: ["Analytical", "Helpful", "MindStyles"],
    score: 0,
    actionableSteps: [
      "Study AI fundamentals and limitations",
      "Learn about ethical frameworks and regulations",
      "Understand fairness and bias in algorithms",
      "Develop skills in AI governance and policy"
    ],
    skills: ["Ethical analysis", "AI knowledge", "Communication", "Policy development"],
    education: "Interdisciplinary background in technology ethics, philosophy, and computer science",
    outlook: "Emerging critical role as AI adoption increases",
    salary: "₹8-35 lakhs per year"
  },
  {
    title: "Sustainable Architecture Designer",
    description: "Design environmentally responsible buildings and spaces using sustainable materials and energy-efficient systems.",
    traits: ["Creative", "HandsOn", "Innovation"],
    score: 0,
    actionableSteps: [
      "Learn green building standards and certifications",
      "Study sustainable materials and construction methods",
      "Understand renewable energy integration in buildings",
      "Develop skills in environmental impact assessment"
    ],
    skills: ["Architectural design", "Environmental analysis", "3D modeling", "Sustainable systems"],
    education: "Architecture degree with sustainability specialization",
    outlook: "Growing field with increasing focus on environmental impact",
    salary: "₹8-35 lakhs per year"
  },
  {
    title: "Chief Sustainability Officer",
    description: "Lead organizational sustainability initiatives, reducing environmental impact while improving business performance.",
    traits: ["Leadership", "Innovation", "WorkHabits"],
    score: 0,
    actionableSteps: [
      "Learn about environmental management systems",
      "Study corporate sustainability reporting frameworks",
      "Understand sustainable supply chain management",
      "Develop skills in stakeholder engagement"
    ],
    skills: ["Strategic planning", "Environmental knowledge", "Change management", "Reporting"],
    education: "Business or environmental science background with sustainability credentials",
    outlook: "Increasingly important C-suite role as sustainability becomes business-critical",
    salary: "₹15-60 lakhs per year"
  },
  {
    title: "Remote Work Experience Designer",
    description: "Create and implement strategies and systems that optimize remote and hybrid work environments.",
    traits: ["Adaptability", "Innovation", "Helpful"],
    score: 0,
    actionableSteps: [
      "Learn about digital collaboration tools and systems",
      "Study remote work psychology and productivity",
      "Understand virtual team building and engagement",
      "Develop skills in workspace design and ergonomics"
    ],
    skills: ["Digital workplace design", "Change management", "Process optimization", "Employee experience"],
    education: "HR, organizational psychology, or design thinking background",
    outlook: "Growing role as remote and hybrid work models become permanent",
    salary: "₹7-25 lakhs per year"
  },
  {
    title: "Bioinformatics Specialist",
    description: "Apply computational techniques to analyze and interpret biological data, especially in genomics and drug discovery.",
    traits: ["Analytical", "TechAptitude", "MindStyles"],
    score: 0,
    actionableSteps: [
      "Learn programming for biological data analysis",
      "Study genomics and molecular biology fundamentals",
      "Understand bioinformatics algorithms and databases",
      "Practice with real-world biological datasets"
    ],
    skills: ["Computational biology", "Data analysis", "Statistical methods", "Research"],
    education: "Biology background with computer science skills or vice versa",
    outlook: "Expanding field with personalized medicine and genomics advancements",
    salary: "₹7-35 lakhs per year"
  }
];

// Combine original careers with additional careers to get 100+ total
export const careerSuggestions: CareerSuggestion[] = [...originalCareers, ...additionalCareers];

export const traitDescriptions: Record<TraitCategory, string> = {
  MindStyles: "You enjoy exploring new ideas and learning about different things.",
  WorkHabits: "You're organized and good at completing tasks on time.",
  TeamSpirit: "You get along well with others and enjoy being part of a team.",
  StressManagement: "Your ability to stay calm and handle challenging situations.",
  ExpressionStyle: "How you express yourself and interact in social situations.",
  HandsOn: "You enjoy working with your hands and building physical things.",
  Analytical: "You like solving problems and understanding how things work.",
  Creative: "You enjoy expressing yourself through creative activities.",
  Helpful: "You find satisfaction in helping and supporting others.",
  Leadership: "You're comfortable taking charge and guiding others.",
  Organized: "You prefer structure, clear rules, and organized information.",
  TechAptitude: "You have a natural ability to understand and work with technology.",
  Adaptability: "You easily adjust to new situations and embrace change.",
  Innovation: "You think outside the box and come up with creative solutions.",
  Resilience: "You bounce back from setbacks and persist through challenges."
};

export const generalCareerAdvice = [
  {
    title: "Build a Digital Portfolio",
    description: "Create an online portfolio showcasing your projects, skills, and achievements. This serves as proof of your abilities beyond just a resume."
  },
  {
    title: "Develop Tech Literacy",
    description: "No matter your career path, basic programming knowledge, data analysis skills, and comfort with digital tools will give you an edge in any field."
  },
  {
    title: "Focus on Hybrid Skills",
    description: "Combine technical skills with soft skills like communication, creativity, and critical thinking. These combinations are rare and highly valuable."
  },
  {
    title: "Embrace Continuous Learning",
    description: "Set aside time each week for learning new skills through online courses, books, or practice. The most successful people never stop learning."
  },
  {
    title: "Build a Professional Network",
    description: "Connect with professionals in your field through LinkedIn, industry events, and online communities. Many opportunities come through networking."
  },
  {
    title: "Create Multiple Income Streams",
    description: "Beyond your main job, develop side projects, freelance work, or passive income sources to increase financial security and growth potential."
  },
  {
    title: "Develop In-demand Skills",
    description: "Research which skills are growing in demand in your field and invest time in mastering them before they become mainstream requirements."
  }
];

// Enhanced scoring methodology with more detailed explanations
export const scoringMethodology = {
  questionScoring: "Each question is scored on a 1-5 scale, with 5 representing strong agreement and 1 representing strong disagreement. This provides a nuanced measure of trait intensity rather than a binary yes/no approach.",
  
  traitCalculation: "Trait scores are calculated as the average of all answered questions within that trait category, ensuring that traits with more questions aren't overweighted. For StressManagement, scores are inverted (6 minus the score) so that higher scores represent better stress management ability.",
  
  careerMatching: "Career matches are determined by a weighted scoring algorithm that prioritizes primary traits for each career. The primary trait (first listed) accounts for 50% of the match score, while secondary traits share the remaining 50%. This approach ensures that careers requiring a strong primary trait are matched accordingly.",
  
  interpretationGuidance: "When interpreting results, counselors should focus on patterns across related traits rather than small differences between individual scores. The top three traits and corresponding career matches provide the most meaningful insights, while trait scores below 2.5 may indicate potential areas for personal development."
};

// Expanded counselor guidelines with more specific interpretation advice
export const counselorGuidelines = [
  {
    area: "Identifying Core Strengths",
    description: "Look beyond the top three traits to identify clusters of related strengths. For example, high scores in Analytical, TechAptitude, and Innovation suggest strong technical problem-solving abilities that could be applied across multiple STEM fields. Consider how these strength clusters might translate to career families rather than specific job titles."
  },
  {
    area: "Addressing Growth Areas",
    description: "Lower scored traits represent potential areas for development, not limitations. Help students create specific action plans to develop these traits if they're important for their desired career paths. For each low-scoring trait, identify 2-3 concrete activities that would help build that capacity through practice and exposure."
  },
  {
    area: "Balancing Interests and Aptitudes",
    description: "Sometimes a student's interests (what they enjoy) may differ from their natural aptitudes (what they're good at). Help them explore careers that can balance both or find ways to incorporate interests into careers that match their strengths. Discuss the concept of 'flow state' where challenges match skills for optimal engagement and satisfaction."
  },
  {
    area: "Exploring Career Clusters",
    description: "Guide students to explore groups of related careers rather than fixating on a single job title. This broadens their options and allows for more flexible career planning. Use the O*NET Career Clusters framework to show how different careers within a cluster share underlying skills and knowledge domains, facilitating lateral movement over time."
  },
  {
    area: "Creating Development Pathways",
    description: "Help students create concrete next steps based on career matches, focusing on education, skill development, and experiential learning opportunities that align with their traits and aspirations. Map out both immediate actions (next 3-6 months) and longer-term development goals (1-3 years) to create a practical roadmap."
  },
  {
    area: "Interpreting Mixed Profiles",
    description: "Some students will show high scores across seemingly contrasting traits, such as both Creative and Analytical, or both Leadership and TeamSpirit. Help them see these combinations as unique strengths that could lead to specialized roles that bridge different domains, like creative technology or collaborative leadership positions."
  },
  {
    area: "Discussing Trait Intensity",
    description: "Very high scores (4.5+) in certain traits may indicate particular passion areas that should be central to career planning. Similarly, particularly low scores (below 2.0) might suggest areas where the student would be consistently drained if required to use these traits extensively in their daily work."
  },
  {
    area: "Contextualizing Results",
    description: "Remind students that these assessments capture a point-in-time snapshot and that traits can develop over time with intention and practice. Discuss how life experiences, education, and personal growth can shape these characteristics, and how the assessment results represent tendencies rather than fixed limitations."
  }
];

// Enhanced career matching algorithm with more sophisticated weighting
export const calculateCareerMatches = (results: AssessmentResult): CareerSuggestion[] => {
  const maxPossibleScore = 5; // Max score on our 1-5 scale
  
  // Calculate weighted trait importance for each career
  const calculatedSuggestions = careerSuggestions.map(suggestion => {
    // Give more weight to the primary traits needed for each career
    const primaryTrait = suggestion.traits[0];
    const secondaryTraits = suggestion.traits.slice(1);
    
    // Primary trait gets 50% of the weight, remaining traits split the other 50%
    const primaryWeight = 0.5;
    const secondaryWeight = secondaryTraits.length > 0 ? 0.5 / secondaryTraits.length : 0;
    
    // Calculate weighted score
    let score = 0;
    score += (results[primaryTrait] / maxPossibleScore) * primaryWeight;
    
    secondaryTraits.forEach(trait => {
      score += (results[trait] / maxPossibleScore) * secondaryWeight;
    });
    
    // Convert to percentage and round to integer
    const percentageScore = Math.round(score * 100);
    
    // Return a new object with the calculated score
    return {
      ...suggestion,
      score: percentageScore
    };
  });
  
  // Sort by score descending
  return calculatedSuggestions.sort((a, b) => b.score - a.score);
};
