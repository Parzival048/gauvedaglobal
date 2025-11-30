import { motion } from "framer-motion";
import { Leaf, ArrowUp } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/animations/motion";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  products: [
    { label: "Powdered Manure", href: "#" },
    { label: "Pelletized Manure", href: "#" },
    { label: "Bulk Orders", href: "#contact" },
    { label: "Organic Fertilizers", href: "#" },
  ],
  resources: [
    { label: "Farming Guide", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="flex items-center gap-2 mb-6"
                data-testid="link-footer-logo"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-serif text-xl font-semibold text-foreground" data-testid="text-footer-brand">
                  Gauveda<span className="text-primary">global</span>
                </span>
              </a>
              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed" data-testid="text-footer-description">
                Premium organic cow dung manure for sustainable farming.
                Trusted by thousands of farmers worldwide for healthier soil
                and better harvests.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3" data-testid="text-newsletter-heading">
                  Subscribe to Our Newsletter
                </h4>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                    data-testid="input-newsletter"
                  />
                  <Button
                    className="bg-primary text-primary-foreground"
                    data-testid="button-subscribe"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-company-heading">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-company-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-products-heading">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-products-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-resources-heading">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-resources-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} Gauvedaglobal. All rights
              reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-foreground transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full"
                data-testid="button-scroll-top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
