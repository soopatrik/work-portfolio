import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Rocket,
  Target,
  Shield,
  MessageCircle,
  Bot,
  Users,
  Code2,
  Megaphone,
  BarChart3,
  Settings,
  Lock,
  GraduationCap,
  DollarSign,
  Plus,
  Globe,
} from "lucide-react";

const aiStats = {
  experience: "5+ Years",
  projects: "100+",
  models: "25+",
  accuracy: "99.2%",
};

const services = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Frontend/Performance",
    description: "Bridging Software Engineering and Performance",
    features: [
      "React Profiler analysis and optimization",
      "Bundle size reduction and code splitting strategies",
      "New elements based on your needs",
      "State management architecture",
      "Component memoization and render optimization",
    ],
    outcome:
      "Clean, responsive UI, Interactive elements, 70-90% improvement in interaction times",
    pricing: "From $3,000",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "LLM Systems Delivery",
    description: "AI systems that work in production, not just demos",
    features: [
      "RAG systems with proper chunking and retrieval",
      "Agent architectures where they add real value",
      "Evaluation frameworks and quality metrics",
      "Cost optimization (OpenAI → OpenRouter transitions)",
      "Observability and monitoring implementation",
    ],
    outcome:
      "Delivered systems with 95%+ user satisfaction, Revenue boost, Task automatizaiton, Significant daily time saving",
    pricing: "From $5,000",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Founding-Engineer Partner",
    description: "0→1 product development with growth systems built-in",
    features: [
      "Full-stack product development and architecture",
      "Growth loops and analytics implementation",
      "Marketing automation and outreach systems",
      "Payment processing and subscription management",
      "Team scaling and technical leadership",
    ],
    outcome: "End-to-end delivery from concept to revenue",
    pricing: "From $8,000/month",
  },
];

const aiServices = [
  {
    icon: Target,
    title: "AI Strategy & Roadmaps",
    benefit: "Align use cases to ROI; choose the right models and vendors.",
    keyBenefits: [
      "ROI-driven use case prioritization",
      "Model selection and vendor evaluation",
      "Clear implementation timeline and milestones",
    ],
  },
  {
    icon: Shield,
    title: "Data & Governance",
    benefit: "Secure pipelines, permissioning, auditability for AI.",
    keyBenefits: [
      "Secure pipelines with enterprise-grade encryption",
      "Fine-grained permissioning & role-based access",
      "Full auditability to meet compliance standards",
    ],
  },
  {
    icon: MessageCircle,
    title: "RAG Knowledge Chat",
    benefit: "Trusted answers over your docs/DBs without retraining.",
    keyBenefits: [
      "Trustworthy answers grounded in real company data",
      "Avoid costly retraining with dynamic knowledge updates",
      "Reduce hallucinations for accurate outputs",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents for Ops",
    benefit: "Automate tickets, handoffs, and routine decisions.",
    keyBenefits: [
      "Automate repetitive workflows (tickets, HR, supply chain)",
      "Human-in-the-loop escalation for sensitive tasks",
      "Faster cycle times & measurable efficiency gains",
    ],
  },
  {
    icon: Users,
    title: "Customer Support Automation",
    benefit: "Omni-channel chat/voice with human-in-the-loop.",
    keyBenefits: [
      "24/7 AI-powered chat & voice response",
      "CRM + telephony integrations for smooth workflows",
      "Deflect routine tickets while improving CSAT",
    ],
  },
  {
    icon: Code2,
    title: "Developer Copilots",
    benefit: "Safe code assist and internal Q&A to speed delivery.",
    keyBenefits: [
      "Context-aware code suggestions tuned to your stack",
      "Secure, private deployment (no external data leaks)",
      "Accelerated delivery with fewer bugs",
    ],
  },
  {
    icon: Megaphone,
    title: "Sales & Marketing Gen-AI",
    benefit: "Personalize content and optimize campaigns.",
    keyBenefits: [
      "Hyper-personalized campaigns at scale",
      "Optimized lead scoring & content performance",
      "Guardrails to protect brand voice",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Forecasting",
    benefit: "LLM-enhanced insights for planning and finance.",
    keyBenefits: [
      "Advanced predictive modeling with LLM insights",
      "Automated report generation and trend analysis",
      "Real-time business intelligence dashboards",
    ],
  },
  {
    icon: Settings,
    title: "MLOps for Gen-AI",
    benefit: "Evaluation, monitoring, prompt/version control.",
    keyBenefits: [
      "Automated model evaluation and quality metrics",
      "Continuous monitoring and performance tracking",
      "Version control for prompts and model iterations",
    ],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    benefit: "Data boundaries, privacy, policy guardrails.",
    keyBenefits: [
      "Zero-trust architecture with data boundaries",
      "Privacy-preserving AI with policy enforcement",
      "Regulatory compliance and audit trails",
    ],
  },
  {
    icon: GraduationCap,
    title: "Change Management & Training",
    benefit: "Upskill teams and create adoption playbooks.",
    keyBenefits: [
      "Comprehensive team training and certification",
      "Change management strategies for AI adoption",
      "Custom playbooks and best practice guides",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost & Performance Tuning",
    benefit: "Right-size models; track spend and latency.",
    keyBenefits: [
      "Model optimization for cost-performance balance",
      "Real-time spend tracking and budget controls",
      "Latency optimization for user experience",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Reach out",
    description:
      "Book a quick strategy call to discuss your business goals and identify AI opportunities that drive real ROI.",
  },
  {
    step: "02",
    title: "Recognize",
    description:
      "Analyze your current systems and data to identify the optimal AI architecture and implementation approach.",
  },
  {
    step: "03",
    title: "Learn",
    description:
      "Deep dive into your specific domain requirements to select the best-performing models and frameworks.",
  },
  {
    step: "04",
    title: "Apply & Deploy",
    description:
      "Build, test, and deploy your AI solution with monitoring, optimization, and team training for long-term success.",
  },
];

// Individual AI Service Card Component
const AIServiceCard = ({
  service,
  index,
}: {
  service: (typeof aiServices)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-100px",
  });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              },
            }
          : {}
      }
      className="w-full max-w-md mx-auto"
    >
      <div className="relative group">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

        <Card className="relative bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow overflow-hidden">
          <CardContent className="p-8">
            {/* Icon and Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-primary rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {service.benefit}
              </p>

              {/* Interactive Area */}
              <motion.div
                className="pt-4 border-t border-border/50"
                animate={{ height: isExpanded ? "auto" : "60px" }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full justify-between p-3 h-auto text-primary hover:text-primary hover:bg-primary/10 group/btn transition-all duration-300"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </Button>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-3">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-medium text-sm text-primary mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.keyBenefits.map((benefit, i) => (
                          <li key={i}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-primary hover:shadow-glow"
                      >
                        Get Started
                      </Button>
                      <Button variant="outline" size="sm">
                        Case Study
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

// Scroll Section Component
const HyrosScrollSection = ({ services }: { services: typeof aiServices }) => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background rounded-3xl" />

      <ScrollArea className="relative h-[800px] w-full">
        <div className="p-8 space-y-12">
          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
            >
              AI Solutions Portfolio
            </Badge>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AIServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* Bottom Spacer */}
          <div className="h-20" />
        </div>
      </ScrollArea>
    </div>
  );
};

const Services = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        style={{ y }}
        className="relative overflow-hidden bg-background py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Frontend engineering, AI systems, and founding-engineer
              partnership. Building intelligent applications with scalable
              frameworks and proven methodologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {Object.entries(aiStats).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key === "models" ? "AI Models" : key}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/case-studies">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-lg px-8"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Services will continue below */}

        {/* Services Grid */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-display mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border/50 pt-6">
                      <div className="mb-4">
                        <p className="text-sm font-medium text-primary mb-1">
                          Typical Outcome:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Do - AI Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">AI That Ships</span> Business
              Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I plan, build, and run production-grade AI systems—grounded in
              your data, optimized for ROI, and safe by design.
            </p>
          </div>

          {/* AI Services Scroll Section */}
          <HyrosScrollSection services={aiServices} />
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How do you measure performance improvements?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I use React Profiler, Chrome DevTools, and custom metrics to
                  measure interaction times, bundle sizes, and render
                  performance. All improvements are documented with before/after
                  data and ongoing monitoring setup.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What makes your AI implementations different?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Focus on production-ready systems with proper evaluation, cost
                  optimization, and monitoring. No demo-ware or hype—just
                  systems that work reliably with measurable ROI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you work with startups or enterprises?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Both. For startups, I offer founding-engineer partnership with
                  equity options. For enterprises, I provide consulting and
                  optimization services with clear deliverables and timelines.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Development Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              How do we work together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial consultation to production deployment, we follow a
              proven methodology that ensures your AI solution delivers
              measurable business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Process Steps */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center text-sm font-bold mr-3 shadow-md">
                        1
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Reach out
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Book a quick strategy call to discuss your business goals
                      and identify AI opportunities that drive real ROI.
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center text-sm font-bold mr-3 shadow-md">
                        2
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Recognize
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Analyze your current systems and data to identify the
                      optimal AI architecture and implementation approach.
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center text-sm font-bold mr-3 shadow-md">
                        3
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Learn
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Deep dive into your specific domain requirements to select
                      the best-performing models and frameworks.
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center text-sm font-bold mr-3 shadow-md">
                        4
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Apply & Deploy
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Build, test, and deploy your AI solution with monitoring,
                      optimization, and team training for long-term success.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 h-full flex flex-col justify-center backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-3 shadow-md">
                        <Globe className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-base text-foreground">
                          OpenRouter Integration
                        </div>
                        <div className="text-sm text-muted-foreground">
                          I select the best LLM for your business solution
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-lg">
                      <div className="text-xs font-mono text-primary">
                        → Claude 4 Opus for reasoning
                      </div>
                      <div className="text-xs font-mono text-secondary">
                        → GPT-4o for multimodal tasks
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        → Optimized for cost & performance
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="text-sm font-medium mb-3 text-foreground">
                      Implementation Progress
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 mb-3 shadow-inner">
                      <div className="bg-gradient-primary h-3 rounded-full w-4/5 shadow-sm"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Phase 4/4: Production deployment ready
                    </div>
                  </div>

                  <div className="bg-gradient-primary p-6 rounded-xl text-primary-foreground shadow-lg">
                    <div className="text-base font-semibold mb-2">
                      Ready for production!
                    </div>
                    <div className="text-sm opacity-90">
                      Your AI solution is optimized and deployment-ready with
                      full monitoring
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-16 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white relative overflow-hidden border-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-purple-500/30 to-cyan-600/20" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Be next. We can plug you in today
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Book a 5 minute set up call below. If your AI solution doesn't
                  scale you don't pay
                </p>

                <a href="/about">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold"
                  >
                    Schedule my demo
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
