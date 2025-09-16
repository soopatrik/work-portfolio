import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Code,
  Database,
  Globe,
  Zap,
  Brain,
  Palette,
  Server,
  BarChart3,
  BrainCog,
  Scale3d,
  Atom,
} from "lucide-react";

const caseStudies = [
  {
    title: "Scale AI",
    role: "AI Engineer",
    period: "2023 - Present",
    description:
      "Contributing to the advancement of generative and conversational AI through LLM training and human evaluation systems.",
    contributions: [
      "LLM training and fine-tuning for conversational AI",
      "Code debugging and feedback system development",
      "Human evaluation pipeline implementation",
      "Quality assurance for AI model outputs",
    ],
    impact:
      "95% acceptance rate on AI training tasks, contributing to progress in generative AI capabilities",
    tags: ["AI/ML", "LLM Training", "Python", "Human Evaluation"],
    icon: Brain,
    link: "https://scale.com/",
  },
  {
    title: "Bricksite",
    role: "Front-End Developer",
    period: "2023",
    description:
      "Performance optimization and UX enhancement for a web builder platform, transforming user interaction speeds.",
    contributions: [
      "React performance optimization achieving <10ms interactions",
      "Google Fonts integration and typography system",
      "UX/UI enhancement and responsive design",
      "Code splitting and bundle optimization strategies",
    ],
    impact:
      "Dramatically improved user experience and platform scalability with 130x faster interaction response times",
    tags: ["React", "Performance", "UX/UI", "Optimization"],
    icon: Zap,
    link: "https://bricksite.io",
  },
  {
    title: "COR-X",
    role: "Co-Founder & Full-Stack Engineer",
    period: "2022 - 2023",
    description:
      "Built and scaled an AI-powered fitness platform from concept to production, serving athletes and fitness enthusiasts.",
    contributions: [
      "Complete tech stack architecture and implementation",
      "AI customer service system with LLM integration",
      "Payment processing and financial system reliability",
      "Digital advertising optimization and management",
    ],
    impact:
      "Successfully scaled to serve athletes, gyms, and online users with full AI business integration",
    tags: ["Full-Stack", "AI Integration", "Business", "Scaling"],
    icon: BarChart3,
    link: "https://corx.sk",
  },
  {
    title: "Breachers Tracker",
    role: "Full-Stack Developer",
    period: "2023",
    description:
      "Real-time gaming analytics platform with live data visualization and community engagement features.",
    contributions: [
      "React/TypeScript application with MongoDB backend",
      "Real-time analytics and data visualization",
      "Responsive UI design and user experience",
      "Community features and engagement systems",
    ],
    impact:
      "Enhanced gaming experience with live tracking and community-driven competitive analytics",
    tags: ["React", "TypeScript", "MongoDB", "Real-time"],
    icon: Globe,
    link: "https://breacherstracker.com",
  },
];

const skills = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Vercel", icon: BrainCog },
  { name: "Supabase", icon: Database },
  { name: "OpenRouter", icon: Scale3d },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Case Studies: AI & Engineering in Action
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              From LLM training to full-stack development and AI-powered
              businesses.
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bridging AI research with practical software engineering to create
              scalable growth systems that deliver real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2.5 rounded-lg">
                          <study.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {study.role}
                          </Badge>
                          <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                            {study.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {study.period}
                          </p>
                        </div>
                      </div>

                      {study.link && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={study.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <CardDescription className="text-base mb-4">
                      {study.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">
                          Key Contributions:
                        </h4>
                        <ul className="space-y-2">
                          {study.contributions.map((contribution, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 shrink-0" />
                              <span className="text-muted-foreground">
                                {contribution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <p className="text-sm font-semibold mb-2">Impact:</p>
                        <p className="text-sm text-muted-foreground">
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Skills & Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies I leverage to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-background rounded-lg hover:bg-muted/50 transition-colors"
              >
                <skill.icon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
