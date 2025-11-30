import { motion } from "framer-motion";
import { Heart, Globe, Users, Leaf, Wheat, CircleDot, Sprout, Earth } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/motion";

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "Every batch is crafted with care and commitment to excellence.",
  },
  {
    icon: Globe,
    title: "Environmental Care",
    description: "Sustainable practices that protect and nurture our planet.",
  },
  {
    icon: Users,
    title: "Farmer Partnership",
    description: "Building lasting relationships with our farming community.",
  },
  {
    icon: Leaf,
    title: "Pure & Natural",
    description: "No additives, no chemicals, just nature's best fertilizer.",
  },
];

const imageCards = [
  {
    icon: Wheat,
    label: "Organic Farms",
    image: "/images/WhatsApp Image 2025-10-08 at 7.26.42 PM.webp",
    color: "from-primary/30 to-primary/10"
  },
  {
    icon: CircleDot,
    label: "Healthy Cattle",
    image: "/images/WhatsApp Image 2025-10-08 at 7.26.42 PM (1).webp",
    color: "from-accent/30 to-accent/10"
  },
  {
    icon: Sprout,
    label: "Natural Growth",
    image: "/images/cow-dung-manure.webp",
    color: "from-accent/20 to-secondary/30"
  },
  {
    icon: Earth,
    label: "Eco-Friendly",
    image: "/images/organic-fertilizer.webp",
    color: "from-primary/20 to-primary/5"
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {imageCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    whileHover={{ scale: 1.02 }}
                    className={`aspect-square rounded-2xl overflow-hidden shadow-lg relative ${
                      index === 1 ? "translate-y-8" : index === 2 ? "-translate-y-4" : index === 3 ? "translate-y-4" : ""
                    }`}
                    data-testid={`card-about-${card.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-4">
                      <div className="text-center">
                        <card.icon className="w-8 h-8 mx-auto mb-1 text-white" />
                        <div className="text-sm font-medium text-white" data-testid={`text-about-card-${index}`}>
                          {card.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl z-10"
                data-testid="badge-years-experience"
              >
                <div className="text-center text-primary-foreground">
                  <div className="text-2xl font-bold" data-testid="text-years-count">15+</div>
                  <div className="text-xs" data-testid="text-years-label">Years</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4" data-testid="text-about-badge">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-about-heading">
                Rooted in Tradition,{" "}
                <span className="text-primary">Growing Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description-1">
                For over 15 years, Gauvedaglobal has been at the forefront of
                organic agriculture solutions. Founded by farmers who understood
                the value of traditional practices, we've grown into a trusted
                name in sustainable farming.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description-2">
                Our mission is simple: provide farmers with the highest quality
                organic manure while preserving the environment for future
                generations. We work directly with organic dairy farms, ensuring
                ethical practices and premium quality in every product.
              </p>
            </ScrollReveal>

            <StaggerContainer
              className="grid grid-cols-2 gap-4"
              staggerDelay={0.1}
            >
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-card border border-card-border hover:shadow-md transition-shadow duration-300"
                    data-testid={`card-value-${index}`}
                  >
                    <value.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1" data-testid={`text-value-title-${index}`}>
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
