import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  MapPin,
  Target,
  Zap,
  Code,
  Brain,
  Rocket,
} from "lucide-react";
import { useRef } from "react";

const milestones = [
  {
    id: 1,
    year: "2025",
    company: "Scale AI",
    role: "AI Engineer",
    description: "LLM training, debugging, and human evaluation systems",
    impact: "95% task acceptance rate",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    details: [
      "Worked as an AI Engineer at Scale AI, founded by Alexander Wang, collaborating with leading AI labs",
      "Trained large language models (LLMs) through code quality assessment, debugging, and human feedback",
      "Contributed to the advancement of generative and conversational AI progress",
      "Completed 100+ AI training tasks with a 95% acceptance rate",
    ],
  },
  {
    id: 2,
    year: "2024",
    company: "Bricksite",
    role: "Frontend Developer",
    description:
      "Performance optimization, Frontend build, and UX/UI enhancements",
    impact: "1.3s → <10ms interactions",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Optimized large React application performance (1.3s → <10ms per interaction)",
      'Enhanced UX/UI with features like section duplication, intuitive "Add element" flow, and dynamic typography',
      "Built new customizable elements using Redux, APIs, and SVG manipulation",
    ],
  },
  {
    id: 3,
    year: "2023-now",
    company: "COR-X",
    role: "Co-Founder & Full-Stack Engineer",
    description:
      "Built entire tech stack, marketing campaigns, automized digital asset creation, and AI customer service integration",
    impact: "Scaled to athletes & gyms nationwide",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    details: [
      "Built entire tech stack: front-end, back-end, and e-commerce functionality",
      "Integrated AI solutions into marketing, creative design, customer support, and outreach",
      "Implemented live AI chatbot via OpenAI's API, later migrating to OpenRouter for cost efficiency",
      "Scaled platform to athletes and gyms globally with secure payments and optimized campaigns",
    ],
  },
  {
    id: 4,
    year: "2023",
    company: "Breachers Tracker",
    role: "Full-Stack Developer",
    description: "React/TypeScript + MongoDB with live analytics",
    impact: "Enhanced gaming community experience",
    icon: Code,
    color: "from-orange-500 to-red-500",
    details: [
      "Developed a full-featured web application with React, TypeScript, Tailwind, and MongoDB",
      "Implemented live analytics, API integration, and real-time data visualization for gaming performance tracking",
      "Designed a responsive, interactive interface improving the gaming community experience",
    ],
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "OpenRouter",
  "Tailwind CSS",
  "MongoDB",
  "Various API implementation",
  "Supabase",
  "GitHub",
  "Digital Marketing",
  "Automated Asset Creation",
];

const TimelineMilestone = ({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const Icon = milestone.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        x: 0,
        scale: isInView ? 1.05 : 1,
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center gap-8 py-12"
    >
      {/* Timeline line */}
      <div className="absolute left-12 top-0 w-px h-full bg-gradient-to-b from-border via-primary/50 to-border"></div>

      {/* Milestone dot */}
      <div
        className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
          isInView
            ? `bg-gradient-to-br ${milestone.color} shadow-xl shadow-primary/25`
            : "bg-muted"
        }`}
      >
        <Icon
          className={`w-8 h-8 transition-colors duration-500 ${
            isInView ? "text-white" : "text-muted-foreground"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <motion.div
          animate={{
            y: isInView ? 0 : 10,
            opacity: isInView ? 1 : 0.7,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="outline" className="text-xs">
              {milestone.year}
            </Badge>
            <h3 className="text-2xl font-bold">{milestone.company}</h3>
          </div>
          <p className="text-lg font-medium text-primary mb-2">
            {milestone.role}
          </p>
          <p className="text-muted-foreground mb-4">{milestone.description}</p>

          {/* Detailed bullet points */}
          <div className="mb-4">
            <ul className="space-y-2">
              {milestone.details?.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              When you work with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Patrik
              </span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              You get results.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              AI & Frontend Systems Engineer bridging novel technology with real
              business impact
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>Denmark • Available globally</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gamified CV Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Each milestone represents measurable impact and proven results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <TimelineMilestone
                key={milestone.id}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-surface/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Core Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack expertise with a focus on performance and AI
              integration
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Premium CTA Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-primary/5 rounded-3xl" />

              {/* Main CTA Card */}
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl p-12 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-10">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 px-6 py-2 mb-6 text-sm font-medium"
                  >
                    Ready to Transform Your Business?
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Let's Build Something Extraordinary
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join leading companies who've accelerated their growth with
                    our AI solutions and performance optimizations.
                  </p>
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <a href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                    >
                      Book Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/case-studies">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                    >
                      View Case Studies
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>95%+ Client Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span>24hr Response Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <span>Production-Ready Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
