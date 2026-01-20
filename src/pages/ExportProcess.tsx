import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Package, Ship, FileCheck, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileSearch,
    title: "Inquiry & Consultation",
    description: "Share your product requirements with our export specialists. We analyze your needs and provide detailed product information and pricing.",
  },
  {
    icon: Package,
    title: "Product Sourcing",
    description: "We source products from our network of certified manufacturers, ensuring quality standards and regulatory compliance for your market.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    description: "Complete export documentation including COA, GMP certificates, registration support, and country-specific regulatory compliance.",
  },
  {
    icon: Ship,
    title: "Packaging & Shipping",
    description: "Export-grade packaging with proper labeling. Flexible shipping options including sea freight, air cargo, and temperature-controlled logistics.",
  },
  {
    icon: Truck,
    title: "Delivery & Tracking",
    description: "Real-time shipment tracking with dedicated support. We ensure timely delivery to your destination port or warehouse.",
  },
  {
    icon: CheckCircle,
    title: "Post-Delivery Support",
    description: "Ongoing support for reorders, quality feedback, and building long-term trade partnerships for your business growth.",
  },
];

const ExportProcess = () => {
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
              Export Process
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A streamlined, transparent process from inquiry to delivery. 
              We handle the complexities of international trade so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Simple Steps to Start Importing
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary text-secondary-foreground items-center justify-center font-bold text-lg z-10">
                    {index + 1}
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-2 lg:text-right" : ""}>
                    <div className={`bg-card rounded-xl p-8 shadow-card ${index % 2 === 1 ? "lg:mr-12" : "lg:ml-12"}`}>
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Export Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Connect with our team today to discuss your requirements and receive 
              a detailed quotation for your products.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExportProcess;
