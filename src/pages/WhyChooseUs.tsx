import { Layout } from "@/components/layout";
import { WhyChooseUs as WhyChooseUsSection } from "@/components/home";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  "ISO 9001:2015 Certified",
  "WHO-GMP Approved Partners",
  "FSSAI Registered",
  "APEDA Certified",
  "IEC Holder",
  "GST Registered",
];

const commitments = [
  {
    title: "Quality Without Compromise",
    description: "Every product undergoes rigorous quality checks before export. We only work with certified manufacturers who meet international standards.",
  },
  {
    title: "Complete Documentation",
    description: "From Certificate of Analysis to regulatory registrations, we provide complete documentation support for hassle-free imports.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, competitive pricing with no hidden costs. We provide detailed quotations covering product, packaging, and logistics.",
  },
  {
    title: "Reliable Logistics",
    description: "End-to-end supply chain management with flexible shipping options and real-time tracking for every shipment.",
  },
];

const WhyChooseUs = () => {
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
              Why Choose XPOXPERRT
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              The trusted export partner that delivers quality, compliance, and 
              reliability for international trade.
            </p>
          </motion.div>
        </div>
      </section>

      <WhyChooseUsSection />

      {/* Certifications */}
      <section className="py-16 bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-primary-foreground">
              Certifications & Registrations
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We Promise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
