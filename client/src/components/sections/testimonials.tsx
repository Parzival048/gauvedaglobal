import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    farmSize: "50 acres",
    initials: "RK",
    rating: 5,
    quote:
      "After switching to Gauvedaglobal's organic manure, my wheat yield increased by 35%. The soil health has improved dramatically, and I've reduced my fertilizer costs significantly.",
  },
  {
    name: "Priya Sharma",
    location: "Maharashtra, India",
    farmSize: "25 acres",
    initials: "PS",
    rating: 5,
    quote:
      "The quality is exceptional. My organic vegetable farm has never been more productive. Customers notice the difference in taste and freshness of our produce.",
  },
  {
    name: "Arun Patel",
    location: "Gujarat, India",
    farmSize: "100 acres",
    initials: "AP",
    rating: 5,
    quote:
      "We've been using this manure for 3 years now. The consistent quality and reliable delivery make it our go-to choice for large-scale organic cotton farming.",
  },
  {
    name: "Lakshmi Devi",
    location: "Karnataka, India",
    farmSize: "15 acres",
    initials: "LD",
    rating: 5,
    quote:
      "As a small-scale farmer, affordability matters. Gauvedaglobal offers the best value for premium organic manure. My coffee plantation thrives with their products.",
  },
];

const certifications = [
  { name: "USDA Organic", abbr: "USDA" },
  { name: "India Organic", abbr: "IO" },
  { name: "NPOP Certified", abbr: "NPOP" },
  { name: "ISO 9001:2015", abbr: "ISO" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4" data-testid="text-testimonials-badge">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4" data-testid="text-testimonials-heading">
            Trusted by Farmers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Hear from the thousands of farmers who have transformed their
            agricultural practices with our organic solutions.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border-card-border" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                    <div className="flex gap-1" data-testid={`rating-${index}`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-6 text-lg" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12 bg-primary/20">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold" data-testid={`avatar-${index}`}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-location-${index}`}>
                        {testimonial.location} • {testimonial.farmSize}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 border border-card-border" data-testid="certifications-container">
            <h3 className="text-center text-lg font-medium text-muted-foreground mb-8" data-testid="text-certifications-heading">
              Certified & Trusted Quality
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                  data-testid={`certification-${index}`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary" data-testid={`text-cert-abbr-${index}`}>
                      {cert.abbr}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground text-center" data-testid={`text-cert-name-${index}`}>
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
