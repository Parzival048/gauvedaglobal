import { motion } from "framer-motion";
import { Truck, Package, MapPin, Clock, IndianRupee, Shield } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/animations/motion";

export default function ShippingPolicy() {
  const sections = [
    {
      icon: MapPin,
      title: "Shipping Coverage",
      content: `We ship our organic products across India:

Pan-India Delivery:
• We deliver to all states and union territories
• Both urban and rural areas are covered
• Remote locations may have extended delivery times

International Shipping:
• Currently available on request for bulk orders
• Please contact us for international shipping quotes
• Customs duties and taxes are the responsibility of the buyer`,
    },
    {
      icon: Clock,
      title: "Processing and Delivery Time",
      content: `Order Processing:
• Orders are processed within 1-2 business days
• Custom/bulk orders may require 2-5 business days for processing
• Orders placed on weekends/holidays will be processed on the next business day

Estimated Delivery Time:
• Metro Cities: 3-5 business days
• Tier 2 Cities: 5-7 business days
• Rural Areas: 7-10 business days
• Bulk Orders: Delivery time varies based on quantity and location

Note: These are estimated times and may vary during peak seasons or due to unforeseen circumstances.`,
    },
    {
      icon: IndianRupee,
      title: "Shipping Charges",
      content: `Standard Shipping:
• Orders above ₹2,000: FREE shipping
• Orders below ₹2,000: ₹100 flat shipping charge
• Metro cities: ₹80 for orders below ₹2,000

Bulk Orders:
• Special shipping rates available for bulk orders
• Contact us for custom shipping quotes
• Possible discounts on freight charges for large quantities

Express Shipping:
• Available in select cities
• Additional charges apply
• Delivery in 1-3 business days`,
    },
    {
      icon: Package,
      title: "Packaging",
      content: `We take great care in packaging your organic products:

Eco-Friendly Packaging:
• We use recyclable and biodegradable materials
• Products are sealed to maintain freshness
• Moisture-proof packaging for protection

Quality Assurance:
• Products are inspected before packaging
• Tamper-proof sealing for safety
• Proper labeling with product information and batch numbers
• Handling instructions included where necessary

Bulk Order Packaging:
• Industrial-grade packaging for large quantities
• Customized packaging available on request`,
    },
    {
      icon: Truck,
      title: "Tracking Your Order",
      content: `Stay updated on your order status:

Order Confirmation:
• You will receive an email confirmation upon order placement
• SMS updates will be sent to your registered mobile number

Tracking Information:
• Tracking details will be shared once the order is dispatched
• Track your order using the tracking number provided
• Real-time updates on delivery status

Delivery Notifications:
• SMS and email notifications before delivery
• Our delivery partner will contact you for delivery coordination`,
    },
    {
      icon: Shield,
      title: "Delivery Policy",
      content: `Receiving Your Order:

At Delivery:
• Please check the package for any visible damage before accepting
• Verify the contents upon delivery
• Sign the delivery receipt only after inspection

Delivery Attempts:
• Our courier partner will make up to 3 delivery attempts
• If delivery fails after 3 attempts, the order will be returned
• Redelivery charges may apply for failed deliveries due to incorrect address

Damaged/Missing Items:
• Report any damage or missing items within 24 hours of delivery
• Provide photographic evidence of damage
• We will arrange for replacement or refund as appropriate`,
    },
    {
      icon: MapPin,
      title: "Delivery Challenges",
      content: `Handling Special Situations:

Incorrect Address:
• Ensure your delivery address is complete and accurate
• Changes to address after dispatch may incur additional charges
• We are not responsible for delays due to incorrect address information

Delivery Delays:
• We strive to deliver within estimated timelines
• Delays may occur due to weather, festivals, or other unforeseen circumstances
• We will keep you informed of any significant delays

Remote Locations:
• Additional time may be required for remote or difficult-to-access areas
• Extra shipping charges may apply
• Please contact us to confirm delivery to your location`,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "Every product is carefully packed to ensure safe delivery",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Partnered with trusted courier services across India",
    },
    {
      icon: Clock,
      title: "Timely Shipping",
      description: "Fast processing and dispatch of all orders",
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
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                  Shipping Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  Last updated: November 30, 2025
                </p>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  We are committed to delivering our premium organic products safely and efficiently to your doorstep. Read our comprehensive shipping policy below.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 text-center border border-card-border">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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

            <ScrollReveal delay={0.7}>
              <div className="mt-12 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Need Help with Shipping?
                </h2>
                <p className="text-muted-foreground mb-6">
                  For any questions about shipping, tracking, or delivery, please contact us:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Package className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:contact@gauvedaglobal.com" className="hover:text-primary transition-colors">
                        contact@gauvedaglobal.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a href="tel:+917758077875" className="hover:text-primary transition-colors">
                        +91 77580 77875
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  This shipping policy is subject to change. We reserve the right to modify shipping rates and delivery timelines based on operational requirements.
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
