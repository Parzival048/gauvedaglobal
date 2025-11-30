import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
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

const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@gauvedaglobal.com",
    href: "mailto:hello@gauvedaglobal.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Green Farm Road, Gujarat, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9AM - 6PM",
    href: "#",
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
                Bulk Orders
              </h3>
              <p className="text-primary-foreground/80 mb-4" data-testid="text-bulk-description">
                Need large quantities for your farm? Contact us for special
                bulk pricing and delivery arrangements.
              </p>
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-bulk-inquiry"
              >
                Request Bulk Quote
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
