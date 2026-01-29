import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Globe, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on quality. Every product we export meets stringent international standards.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Understanding diverse market requirements across continents drives our export strategy.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building long-term partnerships through transparent communication and reliable service.",
  },
  {
    icon: Award,
    title: "Compliance Excellence",
    description: "Complete documentation and regulatory compliance for seamless international trade.",
  },
];

const About = () => {
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
              About XPOXPERRT
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A professionally managed export house based in India, specializing in the global 
              supply of pharmaceutical finished formulations, surgical and medical products, 
              and high-quality agro commodities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Conduit for Quality Global Trade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XPOXPERRT was founded with a singular vision: to become the trusted conduit 
                  that delivers quality seamlessly into global markets. Based in India, we have 
                  built strong partnerships with WHO-GMP certified pharmaceutical manufacturers, 
                  medical device companies, and premium agricultural producers.
                </p>
                <p>
                  Our team combines decades of export experience with deep industry knowledge 
                  across pharmaceutical formulations, medical supplies, and agro commodities. 
                  We understand the complexities of international trade regulations and work 
                  diligently to ensure complete compliance for every shipment.
                </p>
                <p>
                  Today, XPOXPERRT serves importers, distributors, hospitals, and institutional 
                  buyers across 50+ countries, maintaining our commitment to quality, transparency, 
                  and reliable delivery.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <Target className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To be the most trusted export partner for international buyers seeking 
                  quality products from India.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card mt-8">
                <Eye className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To strengthen India's position as a global hub for pharmaceutical, 
                  medical, and agricultural exports.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
