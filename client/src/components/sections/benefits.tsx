import { Sprout, Leaf, TrendingUp, Recycle, DollarSign, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/motion";

const benefits = [
  {
    icon: Sprout,
    title: "Soil Enrichment",
    description:
      "Rich in essential nutrients like nitrogen, phosphorus, and potassium that naturally improve soil fertility and structure.",
  },
  {
    icon: Leaf,
    title: "Chemical-Free",
    description:
      "100% organic and free from synthetic chemicals, ensuring safe produce for your family and sustainable farming practices.",
  },
  {
    icon: TrendingUp,
    title: "Higher Crop Yield",
    description:
      "Proven to increase crop yields by up to 40% through improved soil health and plant nutrition absorption.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description:
      "Supports eco-friendly farming by recycling organic waste and reducing carbon footprint in agriculture.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Long-lasting benefits reduce the need for expensive chemical fertilizers, saving money over multiple growing seasons.",
  },
  {
    icon: Package,
    title: "Easy Application",
    description:
      "Available in multiple forms - pelletized, powdered, and bulk - for convenient application to any field size.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4" data-testid="text-benefits-badge">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4" data-testid="text-benefits-heading">
            The Natural Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-description">
            Discover why organic cow dung manure is the preferred choice for
            farmers committed to sustainable agriculture and healthier harvests.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={benefit.title}>
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border-card-border group" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-card-foreground mb-3" data-testid={`text-benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
