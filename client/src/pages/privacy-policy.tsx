import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/animations/motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:

• Name and contact information (email address, phone number, mailing address)
• Business information for wholesale and bulk orders
• Payment and billing information
• Communication preferences
• Any other information you choose to provide

When you visit our website, we may automatically collect certain information about your device, including:
• Browser type and version
• IP address and general location
• Pages visited and time spent on our site
• Referring website addresses`,
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: `We use the information we collect for the following purposes:

• Processing and fulfilling your orders
• Communicating with you about products, services, and promotions
• Responding to your inquiries and customer service requests
• Improving our website and customer experience
• Analyzing usage patterns and trends
• Complying with legal obligations
• Preventing fraud and ensuring security`,
    },
    {
      icon: Shield,
      title: "Information Security",
      content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it:

• Secure SSL encryption for data transmission
• Regular security audits and updates
• Restricted access to personal information
• Secure payment processing through trusted partners
• Regular staff training on data protection

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With service providers who assist us in operating our business (payment processors, shipping companies, etc.)
• When required by law or to respond to legal processes
• To protect our rights, property, or safety, or that of our users
• With your consent or at your direction

All third-party service providers are required to maintain the confidentiality of your information.`,
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: `You have the following rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Opt-out: Unsubscribe from marketing communications at any time
• Data portability: Request a copy of your data in a commonly used format

To exercise any of these rights, please contact us using the information provided below.`,
    },
    {
      icon: Mail,
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you use our website
• Improve website functionality and user experience
• Analyze website traffic and performance

You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.`,
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                  Privacy Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  Last updated: November 30, 2025
                </p>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  At Gauvedaglobal, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
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
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-primary" />
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

            <ScrollReveal delay={0.6}>
              <div className="mt-12 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:contact@gauvedaglobal.com" className="hover:text-primary transition-colors">
                      contact@gauvedaglobal.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+917758077875" className="hover:text-primary transition-colors">
                      +91 77580 77875
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <span>
                      GAU VEDA GLOBAL LLP<br />
                      SNO.112/1 NR. KHANDOBA MANDIR<br />
                      PUNAWALE, PUNE CITY<br />
                      PUNE-411033, MAHARASHTRA
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  This policy is subject to change. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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
