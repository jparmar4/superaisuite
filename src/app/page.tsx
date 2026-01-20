'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Brain, FileText, TrendingUp, MessageSquare, Mail, Heart, Activity, Star, Users, Zap, Check, ArrowRight, ChevronRight, Sparkles, Cpu, Database, Globe, Shield, Menu, X } from "lucide-react"
import { useState } from "react"

export default function SuperAISuite() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message')
      }
    } catch (error) {
      alert('Error sending message')
    }
  }

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Intelligence",
      description: "Instantly analyze, summarize, and extract insights from any document with advanced natural language processing. Save hours of manual reading and comprehension.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Analysis",
      description: "Make data-driven decisions with AI-powered trading insights and predictive market analytics. Stay ahead of market trends with real-time intelligence.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Conversational AI",
      description: "Engage with an intelligent assistant that understands context and provides meaningful responses. Experience natural, human-like conversations.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Smart Communications",
      description: "Generate professional emails, messages, and content tailored to your specific needs and tone. Perfect for business and personal use.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness Support",
      description: "Access personalized mental health resources and guidance powered by empathetic AI technology. Get support whenever you need it.",
      color: "from-rose-500 to-red-500"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Fitness Coaching",
      description: "Achieve your health goals with customized workout plans and AI-powered motivation. Your personal trainer in your pocket.",
      color: "from-indigo-500 to-violet-500"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      content: "SuperAISuite has revolutionized our workflow. The document analysis alone saves our team 20+ hours weekly. Absolutely essential!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Analyst",
      content: "The market analysis features are game-changing. I've improved my trading decisions significantly since adopting this platform.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Business Owner",
      content: "From emails to fitness coaching, SuperAISuite does it all. It's like having a personal assistant, trainer, and advisor rolled into one.",
      avatar: "EW",
      rating: 5
    }
  ]

  const pricing = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "5 AI tools access",
        "100 queries per month",
        "Basic support",
        "Web interface"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Best for professionals",
      features: [
        "All 50+ AI tools",
        "Unlimited queries",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Team collaboration"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom AI models",
        "Dedicated support",
        "SLA guarantee",
        "White-label options",
        "Advanced security",
        "Unlimited team members"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "What makes SuperAISuite different from other AI platforms?",
      answer: "SuperAISuite is an all-in-one platform that combines 50+ AI tools into a seamless experience. From document analysis to fitness coaching, we've integrated powerful AI capabilities across every aspect of your life and work. Our GPT-5 powered engine provides more accurate, context-aware responses than any other platform."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and SOC 2 standards. Your data is never shared with third parties, and you maintain full control over your information. We offer optional local processing for sensitive data."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. We don't believe in long-term contracts. If you cancel, you'll continue to have access until the end of your billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise customers. All payments are processed through secure, PCI-compliant payment gateways."
    },
    {
      question: "How accurate are the AI responses?",
      answer: "Our AI achieves 98.7% accuracy across various tasks. We continuously train and fine-tune our models using the latest data and user feedback. For critical business decisions, we recommend human review, though our results are consistently reliable."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! SuperAISuite is available on iOS and Android devices. The mobile app offers full functionality, allowing you to access all AI tools on the go. We also have a responsive web interface that works perfectly on any device."
    }
  ]

  const stats = [
    { value: "2M+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
    { value: "50+", label: "AI Tools", icon: <Zap className="h-5 w-5" /> },
    { value: "4.9★", label: "User Rating", icon: <Star className="h-5 w-5" /> },
    { value: "99.9%", label: "Uptime", icon: <Shield className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SuperAISuite</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-gradient-to-r from-primary to-primary/80">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t">
              <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="block text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="block text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="ghost" className="flex-1">Sign In</Button>
                <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
                <Sparkles className="h-4 w-4 mr-2" />
                Powered by GPT-5 Technology
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                The Future of AI is Here
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your productivity and creativity with the world's most advanced AI suite.
                Experience intelligent automation that adapts to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  <Cpu className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
                <img
                  src="/superaisuite-hero.png"
                  alt="SuperAISuite AI Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-2">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Analysis Complete</div>
                    <div className="text-sm text-muted-foreground">Processed 1,247 documents</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-card border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Power Level</div>
                    <div className="text-sm text-muted-foreground">98.7% accuracy</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Excel</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover powerful AI tools designed to enhance every aspect of your digital workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Millions</h2>
            <p className="text-xl text-muted-foreground">
              Join millions of users who have already revolutionized their productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-4 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real users who've transformed their productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/50 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for you. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.popular ? "relative" : ""}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <Card className={`h-full ${plan.popular ? "border-2 border-primary shadow-xl scale-105" : "border-2 hover:border-primary/50"}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground text-lg ml-2">{plan.period}</span>}
                    </div>
                    <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 ${plan.popular ? "bg-gradient-to-r from-primary to-primary/80" : ""}`}
                      size="lg"
                    >
                      {plan.cta}
                      {plan.popular && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about SuperAISuite
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Contact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-primary/80">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 md:p-20"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join millions of users who have already revolutionized their productivity with SuperAISuite
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
                  Download Now - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Globe className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/5 to-accent/5 border-t mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">SuperAISuite</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The most advanced AI suite for productivity, creativity, and wellness.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© 2025 SuperAISuite. All rights reserved. Made with ❤️ using AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
