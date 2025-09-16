"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Zap } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "LLM Systems Architecture",
    description:
      "Custom-built language models with proprietary fine-tuning and RLHF pipelines for domain-specific performance.",
  },
  {
    icon: Code2,
    title: "Evaluation Frameworks",
    description:
      "Comprehensive testing harnesses with automated benchmarking and performance monitoring across 100+ task categories.",
  },
  {
    icon: Zap,
    title: "Production-Ready Deployment",
    description:
      "Scalable inference infrastructure with sub-10ms response times and 99.9% uptime reliability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function AITechnologySection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}></motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              How AI + Software Engineering works
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              I build intelligent systems with proprietary models and
              battle-tested frameworks, delivering production-ready AI that
              scales with your business needs.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
