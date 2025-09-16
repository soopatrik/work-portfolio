"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Clock } from "lucide-react";

const statistics = [
  {
    icon: TrendingUp,
    value: "$200B+",
    label:
      "AI market estimated to reach this value by 2030, with massive growth potential for intelligent automation",
  },
  {
    icon: AlertTriangle,
    value: "73%",
    label:
      "of AI projects fail in production due to poor system design, inadequate evaluation, and lack of robust deployment",
  },
  {
    icon: Clock,
    value: "60%",
    label:
      "reduction in time-to-deployment for AI products with proper architecture and systematic approach",
  },
];

const benefits = [
  {
    icon: "✔️",
    title: "Production-Ready AI Systems",
    description:
      "Deploy robust LLM applications with comprehensive evaluation frameworks and monitoring.",
  },
  {
    icon: "✔️",
    title: "Innovation That Delivers",
    description:
      "Break through AI commoditization with systems thinking and disciplined execution.",
  },
  {
    icon: "✔️",
    title: "Performance-First Development",
    description:
      "Optimize for real-world performance with sub-10ms response times and 99.9% reliability.",
  },
  {
    icon: "✔️",
    title: "Scalable AI Infrastructure",
    description:
      "Build AI systems that scale from prototype to production with enterprise-grade reliability.",
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function AIImpactSection() {
  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Why Section */}
          <div className="text-center mb-20">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              Why AI Systems?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
            >
              In an industry where complexity leads to failure, I aim to bring
              systematic engineering and expertise to ensure your initiatives
              succeed.
            </motion.p>
          </div>

          {/* Statistics */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full text-center hover:shadow-glow transition-all duration-300 border-border/50">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* What We Do */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              What my AI Systems Deliver
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
            >
              Transform your ideas into production-ready AI solutions with
              measurable business impact
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
