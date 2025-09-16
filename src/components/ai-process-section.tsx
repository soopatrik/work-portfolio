"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Code,
  TestTube,
  Rocket,
  Users,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const processSteps = [
  {
    id: 1,
    icon: Target,
    title: "Discovery & Strategy",
    shortDesc: "Define objectives and requirements",
    description:
      "We start by understanding your business goals, analyzing your data landscape, and identifying the optimal AI opportunities that will drive measurable ROI.",
    details: [
      "Business requirement analysis",
      "Data audit and feasibility study",
      "ROI projection and timeline",
      "Technology stack selection",
    ],
    duration: "1-2 weeks",
    deliverables:
      "Strategy document, project roadmap, technical specifications",
  },
  {
    id: 2,
    icon: Code,
    title: "AI Development",
    shortDesc: "Build and fine-tune models",
    description:
      "Our expert team develops custom AI models tailored to your specific use case, ensuring optimal performance and seamless integration with your existing systems.",
    details: [
      "Custom model architecture design",
      "Training on your proprietary data",
      "Performance optimization",
      "API development and documentation",
    ],
    duration: "4-8 weeks",
    deliverables: "Trained AI models, APIs, integration guides",
  },
  {
    id: 3,
    icon: TestTube,
    title: "Testing & Validation",
    description:
      "Rigorous testing ensures your AI solution meets the highest standards for accuracy, safety, and reliability before deployment.",
    shortDesc: "Validate performance and safety",
    details: [
      "Comprehensive model validation",
      "Security and bias testing",
      "Performance benchmarking",
      "User acceptance testing",
    ],
    duration: "2-3 weeks",
    deliverables: "Test reports, performance metrics, validation certificates",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Deployment & Scale",
    shortDesc: "Production rollout and monitoring",
    description:
      "We handle the complete deployment process and provide ongoing support to ensure your AI solution delivers continuous value and scales with your business.",
    details: [
      "Production deployment setup",
      "Monitoring and alerting systems",
      "Performance analytics dashboard",
      "Ongoing optimization and support",
    ],
    duration: "1-2 weeks",
    deliverables: "Live AI system, monitoring dashboard, support documentation",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function AIProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === processSteps.length ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setIsAutoPlaying(false);
  };

  const currentStep = processSteps.find((step) => step.id === activeStep)!;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-text bg-clip-text">
              4-Step Process
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that transforms your business challenges into
              intelligent solutions
            </p>
          </motion.div>

          {/* Interactive Process Flow */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Step Navigation */}
            <motion.div variants={itemVariants} className="space-y-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                const isCompleted = activeStep > step.id;

                return (
                  <motion.div
                    key={step.id}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      isActive ? "scale-105" : "hover:scale-102"
                    }`}
                    onClick={() => handleStepClick(step.id)}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary shadow-xl shadow-primary/20 bg-gradient-to-r from-primary/5 to-primary/10"
                          : isCompleted
                          ? "border-primary/30 bg-primary/5"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : isCompleted
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            }`}
                          >
                            {isCompleted && !isActive ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : (
                              <Icon className="w-6 h-6" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3
                                className={`font-semibold text-lg transition-colors ${
                                  isActive ? "text-primary" : "text-foreground"
                                }`}
                              >
                                {step.title}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {step.duration}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {step.shortDesc}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 transition-all duration-300 ${
                              isActive
                                ? "text-primary transform rotate-90"
                                : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Progress line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-full w-0.5 h-4 bg-border z-10">
                        <div
                          className={`w-full bg-primary transition-all duration-500 ${
                            isCompleted ? "h-full" : "h-0"
                          }`}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Step Details */}
            <motion.div variants={itemVariants} className="lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <currentStep.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {currentStep.title}
                          </h3>
                          <p className="text-primary font-medium">
                            Step {currentStep.id} of {processSteps.length}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        {currentStep.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {currentStep.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border/50">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">
                                Duration:
                              </span>
                              <span className="font-medium">
                                {currentStep.duration}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-xs text-muted-foreground mb-1">
                              Deliverables:
                            </p>
                            <p className="text-sm font-medium">
                              {currentStep.deliverables}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex justify-center items-center gap-4">
              <span className="text-sm text-muted-foreground">Progress:</span>
              <div className="flex gap-2">
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      step.id === activeStep
                        ? "w-8 bg-primary"
                        : step.id < activeStep
                        ? "w-2 bg-primary/60"
                        : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                {activeStep}/{processSteps.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
