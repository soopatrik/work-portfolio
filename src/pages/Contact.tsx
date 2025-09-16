import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Calendar, Send } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "1patrikrehak@gmail.com",
    href: "mailto:1patrikrehak@gmail.com",
    description: "Best for project inquiries and detailed discussions",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+45 91 87 67 55",
    href: "tel:+4591876755",
    description: "Available during Danish business hours",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    value: "patrik-rehák-ba4b6a26b",
    href: "https://linkedin.com/in/patrik-rehák-ba4b6a26b",
    description: "Professional networking and quick messages",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Schedule Call",
    value: "Book 30-min consultation",
    href: "#",
    description: "Free consultation to discuss your project",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your application or implement AI systems? Let's
            discuss your project and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gradient-surface border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="focus-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      className="focus-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="focus-ring"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <select
                      id="project"
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus-ring"
                    >
                      <option value="">Select project type</option>
                      <option value="performance">
                        Frontend/Performance Optimization
                      </option>
                      <option value="ai-systems">
                        AI Systems Implementation
                      </option>
                      <option value="founding-engineer">
                        Founding Engineer Partnership
                      </option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, challenges, and goals..."
                      rows={5}
                      className="focus-ring resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Other Ways to Connect
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose the communication method that works best for you. I'm
                available across multiple time zones and always responsive.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-label={`${method.title}: ${method.value}`}
                >
                  <Card className="hover-lift hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/15">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-lg mb-1">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {method.description}
                          </p>
                          <span className="text-primary underline decoration-transparent underline-offset-4 group-hover:text-primary-hover group-hover:decoration-primary/40 transition-colors">
                            {method.value}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}

            {/* Availability Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Current Availability
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I'm currently accepting new projects for Q2 2025. For urgent
                    performance optimizations or AI system implementations, I
                    can often accommodate shorter timelines.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Before You Reach Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What information should I include?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tell me about your current performance challenges, tech stack,
                  user base size, and specific goals. The more context you
                  provide, the better I can help.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How quickly do you respond?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I typically respond within 24 hours, often much sooner. For
                  urgent matters, feel free to mention "urgent" in your subject
                  line.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer free consultations?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Yes! I offer a free 30-minute consultation to discuss your
                  project, assess fit, and provide initial recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What's your typical project timeline?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Performance optimizations: 2-4 weeks. AI systems: 4-8 weeks.
                  Founding engineer partnerships: 3-6 months initial engagement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
