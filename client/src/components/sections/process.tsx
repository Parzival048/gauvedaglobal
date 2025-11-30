import { motion } from "framer-motion";
import { Truck, Droplets, Sun, ThumbsUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/motion";

const steps = [
  {
    icon: Truck,
    step: "01",
    title: "Collection",
    description: "Fresh cow dung is collected from our partner organic farms with healthy, grass-fed cattle.",
  },
  {
    icon: Droplets,
    step: "02",
    title: "Processing",
    description: "Natural composting and decomposition process that preserves all essential nutrients.",
  },
  {
    icon: Sun,
    step: "03",
    title: "Curing",
    description: "Sun-dried and properly aged for optimal microbial activity and nutrient concentration.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Quality Check",
    description: "Rigorous testing ensures premium quality and certification before packaging and delivery.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4" data-testid="text-process-badge">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4" data-testid="text-process-heading">
            From Farm to Your Field
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            Our meticulous process ensures you receive only the highest quality
            organic manure for your agricultural needs.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            staggerDelay={0.15}
          >
            {steps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative text-center group" data-testid={`step-${index}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 mx-auto w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground shadow-md" data-testid={`text-step-number-${index}`}>
                      {step.step}
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary/20 origin-left"
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
