import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, ScrollReveal } from "@/components/animations/motion";

const stats = [
  { icon: Users, value: "10,000+", label: "Farmers Trust Us" },
  { icon: Shield, value: "100%", label: "Organic Certified" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

const heroImages = [
  "/images/cow-dung-manure.webp",
  "/images/organic-fertilizer.webp",
  "/images/cow-dung-logs.webp",
];

export function Hero() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6" data-testid="badge-organic-certified">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary" data-testid="text-badge-label">
                  100% Organic Certified
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight mb-6" data-testid="text-hero-heading">
                Nature's Best for{" "}
                <span className="text-primary">Healthier Soil</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed" data-testid="text-hero-description">
                Premium organic cow dung manure that enriches your soil naturally.
                Trusted by thousands of farmers for sustainable, chemical-free
                agriculture that nurtures the earth.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground text-lg px-8 py-6"
                  onClick={() => scrollToSection("#contact")}
                  data-testid="button-hero-shop"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                  onClick={() => scrollToSection("#benefits")}
                  data-testid="button-hero-learn"
                >
                  Learn More
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center sm:text-left"
                    data-testid={`stat-${index}`}
                  >
                    <div className="flex justify-center sm:justify-start mb-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative" data-testid="hero-visual-container">
                <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 shadow-2xl">
                  <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                      {heroImages.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                          <img
                            src={image}
                            alt={`Premium Organic Product ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Overlay Badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl border-4 border-background"
                    data-testid="hero-floating-badge"
                  >
                    <div className="text-center text-primary-foreground p-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                        <img
                          src="/images/logo.webp"
                          alt="Gauvedaglobal"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-sm sm:text-base font-serif font-bold" data-testid="text-hero-badge-title">
                        100% Natural
                      </div>
                      <div className="text-xs opacity-80" data-testid="text-hero-badge-subtitle">
                        Pure Organic
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-4 sm:-left-8 top-1/4 bg-card rounded-xl p-4 shadow-lg border border-card-border"
                  data-testid="card-certified"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm" data-testid="text-certified-title">
                        Certified Organic
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid="text-certified-subtitle">
                        USDA Approved
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 sm:-right-8 bottom-1/4 bg-card rounded-xl p-4 shadow-lg border border-card-border"
                  data-testid="card-premium"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm" data-testid="text-premium-title">
                        Premium Quality
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid="text-premium-subtitle">
                        Farm Fresh
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
