import { motion } from "framer-motion";
import { FileText, Scale, ShoppingCart, Ban, AlertTriangle, CheckCircle } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/animations/motion";

export default function TermsAndConditions() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: `By accessing and using the Gauvedaglobal website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.`,
    },
    {
      icon: ShoppingCart,
      title: "Products and Orders",
      content: `Product Information:
• All product descriptions, images, and specifications are provided for general information only
• We strive to ensure accuracy but cannot guarantee that all product information is complete or error-free
• Products are subject to availability
• We reserve the right to discontinue any product at any time

Order Processing:
• All orders are subject to acceptance and availability
• We reserve the right to refuse or cancel any order for any reason
• Prices are subject to change without notice
• Custom quotes are valid for 30 days from the date of issue`,
    },
    {
      icon: Scale,
      title: "Pricing and Payment",
      content: `Pricing:
• All prices are listed in Indian Rupees (INR)
• Prices do not include shipping, handling, or applicable taxes unless stated otherwise
• We reserve the right to change prices at any time without prior notice
• The price charged will be the price in effect at the time of order confirmation

Payment:
• Payment must be received before order processing
• We accept various payment methods as indicated on our website
• All payments are processed securely
• Custom payment terms may be arranged for bulk orders`,
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      content: `We are committed to providing 100% organic, high-quality products:

• All products are certified organic and meet industry standards
• Products are processed and packaged under hygienic conditions
• We conduct regular quality checks throughout the production process
• Certificates of authenticity available upon request

If you receive a defective or damaged product, please contact us within 7 days of delivery for a replacement or refund.`,
    },
    {
      icon: Ban,
      title: "Return and Refund Policy",
      content: `Returns:
• Products can be returned within 7 days of delivery if unused and in original packaging
• Custom or bulk orders may have different return conditions
• Shipping costs for returns are the responsibility of the customer unless the product is defective

Refunds:
• Refunds will be processed within 7-10 business days after receiving the returned product
• Refunds will be issued to the original payment method
• Shipping charges are non-refundable unless the return is due to our error`,
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law:

• Gauvedaglobal shall not be liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount paid by you for the product in question
• We are not responsible for delays or failures due to circumstances beyond our control
• We do not guarantee specific results from using our products

You agree to use our products at your own risk and in accordance with applicable agricultural practices.`,
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: `All content on this website, including but not limited to:

• Text, graphics, logos, images
• Product descriptions and specifications
• Website design and layout
• Software and code

...is the property of Gauvedaglobal and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.

By using our services, you consent to the jurisdiction and venue of such courts.`,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-br from-accent/10 via-background to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Scale className="w-8 h-8 text-accent-foreground" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                  Terms & Conditions
                </h1>
                <p className="text-lg text-muted-foreground">
                  Last updated: November 30, 2025
                </p>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Please read these Terms and Conditions carefully before using our website or purchasing our products. These terms govern your use of Gauvedaglobal's services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-card-border"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-foreground pt-2">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-16">
                      {section.content}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.8}>
              <div className="mt-12 bg-accent/5 rounded-2xl p-6 md:p-8 border border-accent/20">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:contact@gauvedaglobal.com" className="text-accent-foreground hover:underline">
                      contact@gauvedaglobal.com
                    </a>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel:+917758077875" className="text-accent-foreground hover:underline">
                      +91 77580 77875
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.9}>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
