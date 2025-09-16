"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Mail,
  ExternalLink,
  Brain,
  TrendingUp,
  Code,
  MapPin,
} from "lucide-react";

const expertise = [
  {
    label:
      "LLM Strategy & Integration: Practical frameworks for embedding AI into business operations",
    icon: Brain,
  },
  {
    label:
      "Business Impact with AI: Proven methods to optimize workflows and scale with LLM-driven automation",
    icon: TrendingUp,
  },
  {
    label:
      "Software Engineering (React/Next.js): High-performance interfaces bridging AI systems with seamless user experiences",
    icon: Code,
  },
];

const techStack = [
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="gradient-text">Solutions</span> that Drive{" "}
            <br className="hidden sm:block" />
            Real <span className="gradient-text">Business Impact</span>
          </motion.h1>
          <div className="mb-12 mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>Denmark • Available globally</span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-10 mt-10 md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Guided by industry leaders, I specialize in applying Large Language
            Models (LLMs), Software Engineering, and proven systems to create
            scalable solutions for modern businesses.
          </motion.p>

          {/* Expertise areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 justify-center items-center mb-8 max-w-4xl mx-auto"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 w-full max-w-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-left leading-relaxed">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <a href="/contact">Book a Call</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg hover:bg-primary/5 hover:border-primary/50"
              asChild
            >
              <a href="/case-studies">
                View Case Studies
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm hover:bg-primary/10 hover:border-primary/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
