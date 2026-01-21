import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands",
  "United Arab Emirates", "Saudi Arabia", "Kenya", "Nigeria", "South Africa",
  "Brazil", "Mexico", "Australia", "Singapore", "Malaysia", "Thailand",
  "Vietnam", "Philippines", "Indonesia", "Russia", "Ukraine", "Other"
];

const productCategories = [
  "Pharmaceutical Products",
  "Medical & Surgical Supplies",
  "Agro Commodities",
  "Multiple Categories"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Submitted Successfully",
      description: "Our export team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Connect with our export specialists to discuss your requirements. 
              We're ready to help you source quality products from India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team is available to answer your inquiries and provide 
                  detailed product information and quotations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Export House, Trade Center<br />
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+91-7303082123" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                      Call Us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:connect.xpoxperrt@gmail.com" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                      Email Us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917303082123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full justify-center py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send an Inquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Your name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <Input
                        required
                        placeholder="Your company"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Country *
                      </label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase()}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Product Category *
                      </label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                          {productCategories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Requirements *
                    </label>
                    <Textarea
                      required
                      placeholder="Please describe the products you're interested in, quantities, and any specific requirements..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-14"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
