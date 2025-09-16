"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket, Users, Store, Headphones } from "lucide-react";

const achievements = [
  {
    icon: Users,
    metric: "1000+",
    label:
      "Trusted by over 1000 athletes nationwide who rely on COR-X for peak performance",
  },
  {
    icon: Store,
    metric: "12+",
    label:
      "Available in 12+ physical gyms and retail stores, expanding every month",
  },
  {
    icon: Headphones,
    metric: "24/7",
    label:
      "Seamless automated customer support delivering fast and reliable assistance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function CORXShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Main Showcase Card */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-3xl" />
              <Card className="relative backdrop-blur-sm border-primary/20 bg-card/80 shadow-2xl">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="p-8 pb-0">
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                          <Rocket className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl -z-10" />
                      </motion.div>

                      <div className="flex-1">
                        <Badge
                          variant="outline"
                          className="mb-3 text-primary border-primary/40 bg-primary/10"
                        >
                          Featured Success Story
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            COR-X: From a Concept to
                          </span>
                          <br />
                          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Market Leader
                          </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Built from the ground up with systematic AI
                          engineering. Scaled to help thousands of athletes
                          across entire country, collaborating with production
                          platforms including Shopify and META.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Section */}
                  <div className="px-8 py-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                          <motion.div
                            key={index}
                            className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300"
                            whileHover={{ y: -4, scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative">
                              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>

                              <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                                  {achievement.metric}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {achievement.label}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="p-8 pt-4 border-t border-border/50">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                          asChild
                        >
                          <a href="/case-studies" className="flex items-center">
                            View Full Case Study
                            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          <a
                            href="https://corx.sk"
                            className="flex items-center"
                          >
                            Explore Our Process
                            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-4xl mx-auto leading-relaxed">
              "Efficient systems + disciplined delivery across multiple channels
              helped us scale to a nation-wide level."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mt-8"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
