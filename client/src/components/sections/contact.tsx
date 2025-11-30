import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/animations/motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  inquiryType: z.string().optional(),
  quantity: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const inquiryTypes = [
  { value: "product-inquiry", label: "Product Inquiry" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "custom-quote", label: "Custom Quote" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Customer Support" },
  { value: "other", label: "Other" },
];

const WHATSAPP_NUMBER = "917758077875"; // WhatsApp number without + or spaces

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us Directly",
    value: "+91 77580 77875",
    href: "tel:+917758077875",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@gauvedaglobal.com",
    href: "mailto:contact@gauvedaglobal.com",
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    value: "GAU VEDA GLOBAL LLP, SNO.112/1 NR. KHANDOBA MANDIR, PUNAWALE, PUNE CITY, PUNE-411033, MAHARASHTRA",
    href: "https://maps.google.com/?q=GAU+VEDA+GLOBAL+LLP+PUNAWALE+PUNE",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Get instant response on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Gauvedaglobal!%20I%27m%20interested%20in%20your%20organic%20products.`,
  },
];

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      inquiryType: "",
      quantity: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4" data-testid="text-contact-badge">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4" data-testid="text-contact-heading">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto" data-testid="text-contact-description">
            Contact us today to learn more about our products or place an order.
            We're here to help you grow sustainably.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <ScrollReveal
            direction="left"
            className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background border-border text-foreground"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-background border-border text-foreground"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-background border-border text-foreground"
                          data-testid="input-phone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border text-foreground" data-testid="select-inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Estimated Quantity (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="e.g., 100 kg, 1 ton"
                            className="bg-background border-border text-foreground"
                            data-testid="input-quantity"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your farming needs..."
                          rows={5}
                          className="bg-background border-border text-foreground resize-none"
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={mutation.isPending}
                  className="w-full bg-accent text-accent-foreground text-lg"
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2 space-y-6">
            <div className="bg-primary-foreground/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-serif font-semibold mb-6" data-testid="text-contact-info-heading">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 group"
                    data-testid={`link-contact-${info.label.toLowerCase()}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/60" data-testid={`text-contact-${info.label.toLowerCase()}-label`}>
                        {info.label}
                      </div>
                      <div className="font-medium" data-testid={`text-contact-${info.label.toLowerCase()}-value`}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-accent/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-serif font-semibold mb-4" data-testid="text-bulk-heading">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  data-testid="button-whatsapp"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Gauvedaglobal!%20I%27m%20interested%20in%20your%20organic%20products.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  data-testid="button-directions"
                >
                  <a
                    href="https://maps.google.com/?q=GAU+VEDA+GLOBAL+LLP+PUNAWALE+PUNE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
