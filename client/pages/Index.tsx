import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Zap,
  Search,
  Palette,
  Star,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Animated text effect
  const AnimatedText = ({
    text,
    delay = 0,
  }: {
    text: string;
    delay?: number;
  }) => {
    return (
      <span className="text-reveal">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char"
            style={{
              animationDelay: `${delay + index * 0.05}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  const services = [
    {
      icon: Code,
      title: "Custom WordPress Development",
      description: "Hand-coded, fast, and scalable WordPress websites",
    },
    {
      icon: Search,
      title: "Local SEO Optimization",
      description: "Boost your local presence and ranking",
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Lightning-fast loading times guaranteed",
    },
    {
      icon: Palette,
      title: "Elementor Landing Pages",
      description: "Converting designs that drive results",
    },
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Store",
      description: "WooCommerce with custom payment integration",
      image: "/client/pages/Banner img .png",
      technologies: ["WordPress", "WooCommerce", "Custom PHP"],
      category: "E-Commerce",
    },
    {
      title: "Restaurant Website",
      description: "Online ordering system with table booking",
      image: "/client/pages/sas.png",
      technologies: ["WordPress", "Elementor", "SEO"],
      category: "Business",
    },
    {
      title: "Portfolio Site",
      description: "Creative portfolio with custom animations",
      image: "/client/pages/e learning.png",
      technologies: ["WordPress", "Custom CSS", "JavaScript"],
      category: "Portfolio",
    },
  ];

  return (
    <div className="min-h-screen custom-cursor">
      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float" />
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting */}
            <div className="mb-6 slide-in-up">
              <span className="text-lg text-muted-foreground font-medium">
                <AnimatedText text="Hi, I'm" delay={0} />
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8">
              <div className="mb-4">
                <AnimatedText text="Tanzeel" delay={0.5} />
              </div>
              <div className="gradient-text">
                <AnimatedText text="Yousef" delay={1} />
              </div>
            </h1>

            {/* Tagline */}
            <div
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 max-w-5xl mx-auto slide-in-up"
              style={{ animationDelay: "1.5s" }}
            >
              <AnimatedText
                text="Crafting Fast, Custom & SEO-Friendly WordPress Websites"
                delay={1.8}
              />
            </div>

            {/* Subtitle */}
            <p
              className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto slide-in-up"
              style={{ animationDelay: "2.2s" }}
            >
              WordPress Developer & Web Designer with 3+ years of experience
              creating high-performance websites that convert visitors into
              customers.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-in-up"
              style={{ animationDelay: "2.5s" }}
            >
              <Button
                size="lg"
                className="btn-glow group text-lg px-8 py-4 rounded-full"
                asChild
              >
                <Link to="/portfolio" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-glow text-lg px-8 py-4 rounded-full glass"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center space-x-8 mb-16 slide-in-up"
              style={{ animationDelay: "2.8s" }}
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:tanzeeldev@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="lg"
                  className="group hover:bg-primary/10 rounded-full p-4"
                  asChild
                >
                  <a
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div
              className="animate-bounce pulse-glow"
              style={{ animationDelay: "3s" }}
            >
              <ChevronDown className="h-8 w-8 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-section-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 gradient-text">
              What I Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized WordPress development services that help businesses
              grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="card-hover glass group border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="btn-glow glass"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent WordPress websites I've built for satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="card-hover glass group overflow-hidden border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-muted/20 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-glow" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a WordPress website that
            drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-glow pulse-glow" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-glow glass"
              asChild
            >
              <a href="mailto:tanzeeldev@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
