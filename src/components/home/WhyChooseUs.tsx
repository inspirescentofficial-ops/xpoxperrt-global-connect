import { motion } from "framer-motion";
import { Shield, FileCheck, Globe, Truck, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage ensures products meet international standards and regulatory requirements.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Complete documentation support including COA, GMP certificates, and country-specific regulatory compliance.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Established relationships with manufacturers and logistics partners across 50+ countries worldwide.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "End-to-end supply chain management with real-time tracking and temperature-controlled shipping options.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "ISO certified operations with WHO-GMP approved manufacturing partners for pharmaceutical products.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Experienced export professionals providing personalized service from inquiry to delivery and beyond.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Why XPOXPERRT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Trusted Name in Export Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine quality, compliance, and reliability to deliver exceptional 
            value for international importers and distributors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <reason.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
