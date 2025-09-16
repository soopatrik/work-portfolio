import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Zap, BarChart3 } from "lucide-react";

const aiStats = {
  experience: "5+ Years",
  projects: "10+",
  models: "25+",
  accuracy: "99.2%",
};

const aiFrameworks = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Machine Learning",
    description: "Advanced ML frameworks for intelligent applications",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    highlight: "Deep Learning",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Natural Language Processing",
    description: "State-of-the-art NLP solutions and language models",
    technologies: ["Transformers", "spaCy", "NLTK", "Hugging Face"],
    highlight: "LLM Expert",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "AI Deployment",
    description: "Scalable AI model deployment and MLOps solutions",
    technologies: ["FastAPI", "Docker", "Kubernetes", "AWS SageMaker"],
    highlight: "Production Ready",
  },
];

const aiServices = [
  {
    category: "AI Strategy & Consulting",
    title: "AI Implementation Strategy",
    description:
      "Strategic AI adoption planning and custom model development for scalable solutions",
    features: [
      "AI readiness assessment and roadmap planning",
      "Custom model architecture design and training",
      "Data pipeline optimization and preprocessing",
      "ROI analysis and performance benchmarking",
    ],
    pricing: "Starting at $5,000",
  },
  {
    category: "Development & Integration",
    title: "Custom AI Development",
    description:
      "Full-stack AI application development with modern frameworks and best practices",
    features: [
      "End-to-end AI application development",
      "API design and model serving architecture",
      "Real-time inference and batch processing",
      "Third-party AI service integrations",
    ],
    pricing: "Starting at $10,000",
  },
  {
    category: "Optimization & Scaling",
    title: "AI Performance Optimization",
    description:
      "Advanced optimization techniques for maximum model performance and efficiency",
    features: [
      "Model compression and quantization",
      "Distributed training and inference optimization",
      "Auto-scaling and load balancing setup",
      "Monitoring and performance analytics",
    ],
    pricing: "Starting at $3,500",
  },
];

const aiTestimonials = [
  {
    quote:
      "Exceptional AI expertise. Delivered a custom NLP solution that increased our customer satisfaction by 40%.",
    author: "Sarah Chen",
    title: "CTO, TechFlow Inc.",
    rating: 5,
  },
  {
    quote:
      "The AI model deployment was seamless and scaled perfectly. Outstanding technical leadership and innovation.",
    author: "Marcus Rodriguez",
    title: "AI Director, DataVision",
    rating: 5,
  },
];

const AIEngineering = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        style={{ y }}
        className="relative overflow-hidden bg-gradient-hero py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-3 w-3 mr-1" />
              Advanced AI Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text">
              AI Frameworks
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Building intelligent applications with the most effective AI
              frameworks and proven methodologies. From machine learning to LLM
              deployment.
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
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow text-lg px-8"
              >
                View AI Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Download AI Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Channel Unification Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Unify all AI models to see the biggest drivers in accuracy,
              performance and business impact
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Hub */}
            <div className="flex items-center justify-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-32 h-32 bg-primary rounded-full flex items-center justify-center relative"
              >
                <BarChart3 className="h-16 w-16 text-primary-foreground" />
              </motion.div>
            </div>

            {/* AI Model Icons in Circle */}
            <div className="relative h-96">
              {[
                {
                  name: "GPT-4",
                  icon: "🤖",
                  metrics: "$280K Revenue Boost",
                  position: "top-0 left-1/2 -translate-x-1/2",
                },
                {
                  name: "BERT",
                  icon: "📝",
                  metrics: "94.2% Accuracy",
                  position: "top-12 right-12",
                },
                {
                  name: "TensorFlow",
                  icon: "🧠",
                  metrics: "15ms Latency",
                  position: "bottom-12 right-12",
                },
                {
                  name: "PyTorch",
                  icon: "🔥",
                  metrics: "99.8% Uptime",
                  position: "bottom-0 left-1/2 -translate-x-1/2",
                },
                {
                  name: "Hugging Face",
                  icon: "🤗",
                  metrics: "$450K Cost Savings",
                  position: "bottom-12 left-12",
                },
                {
                  name: "OpenAI",
                  icon: "⚡",
                  metrics: "85% Efficiency Gain",
                  position: "top-12 left-12",
                },
              ].map((aiModel, index) => (
                <motion.div
                  key={aiModel.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute ${aiModel.position} flex flex-col items-center`}
                >
                  <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center text-2xl mb-3 hover-lift">
                    {aiModel.icon}
                  </div>
                  <div className="bg-muted/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    {aiModel.metrics}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
                  <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200/20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </div>
                      <h3 className="font-display font-semibold text-lg">
                        Recognize
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      AI model analysis identifies optimal architecture using
                      your business requirements and data constraints
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200/20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                        2
                      </div>
                      <h3 className="font-display font-semibold text-lg">
                        Learn
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Deep dive into what AI models work best for your specific
                      domain and performance requirements
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200/20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                        3
                      </div>
                      <h3 className="font-display font-semibold text-lg">
                        Reach out
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      If initial model doesn't deliver results, we pivot and
                      implement alternative proven AI solutions
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200/20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                        4
                      </div>
                      <h3 className="font-display font-semibold text-lg">
                        Interact
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      AI solution is optimized for your business needs and
                      seamlessly integrates with your existing systems
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
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                        <Database className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">
                          AI Model Selection
                        </div>
                        <div className="text-xs text-muted-foreground">
                          GPT-4 + TensorFlow (Recommended)
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-2 rounded text-xs font-mono">
                      Accuracy Score: 99.2/100
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="text-sm font-medium mb-2">
                      Training Progress
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Models: 20/25 completed
                    </div>
                  </div>

                  <div className="bg-gradient-primary p-4 rounded-lg text-primary-foreground">
                    <div className="text-sm font-medium mb-1">
                      Ready for production!
                    </div>
                    <div className="text-xs opacity-90">
                      Your AI model is optimized and deployment-ready
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold"
                >
                  Schedule my demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIEngineering;
