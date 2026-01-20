import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import pharmaCategory from "@/assets/pharma-category.jpg";

const productCategories = [
  {
    title: "Tablets & Capsules",
    items: ["Antibiotics", "Analgesics", "Cardiovascular", "Anti-diabetic", "Gastrointestinal", "Neurological"],
  },
  {
    title: "Injectables",
    items: ["Small Volume Parenterals", "Large Volume Parenterals", "Lyophilized Injections", "Pre-filled Syringes"],
  },
  {
    title: "Liquid Formulations",
    items: ["Syrups", "Suspensions", "Oral Solutions", "Drops"],
  },
  {
    title: "Specialized Products",
    items: ["Oncology Products", "Biologics", "Vaccines", "Blood Products", "Hormones"],
  },
];

const features = [
  "WHO-GMP certified manufacturers",
  "Complete regulatory documentation",
  "COA for every batch",
  "Stability studies available",
  "Custom packaging options",
  "Country-specific registration support",
];

const PharmaceuticalProducts = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pharmaCategory}
            alt="Pharmaceutical manufacturing and export"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Export Category
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pharmaceutical Exports
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Quality-assured finished pharmaceutical formulations from WHO-GMP certified 
              manufacturers for regulated and semi-regulated markets worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                India's Pharmaceutical Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  India is known as the "Pharmacy of the World," producing over 60% of 
                  global vaccine supply and 20% of all generic medicines. XPOXPERRT connects 
                  international buyers with this pharmaceutical excellence.
                </p>
                <p>
                  We partner exclusively with manufacturers who hold WHO-GMP certifications 
                  and regulatory approvals for key international markets. Every product we 
                  export comes with complete documentation for hassle-free import clearance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {productCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-muted/50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Looking for Pharmaceutical Products?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Send us your requirements and we'll provide detailed product information, 
              pricing, and documentation support.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Request Quotation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PharmaceuticalProducts;
