import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-navy-light rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner with XPOXPERRT?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Connect with our export specialists to discuss your requirements. 
            We're here to help you source quality products from India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12">
                View Products
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
            <a href="mailto:export@xpoxperrt.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
              export@xpoxperrt.com
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="w-5 h-5" />
              +91 123 456 7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
