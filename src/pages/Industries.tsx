import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, Store, Building, Landmark, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Stethoscope,
    title: "Hospitals & Healthcare Facilities",
    description: "Pharmaceutical formulations, surgical instruments, medical devices, and hospital consumables for healthcare institutions worldwide.",
    products: ["Medicines", "Surgical Equipment", "Disposables", "Diagnostic Devices"],
  },
  {
    icon: Store,
    title: "Distributors & Wholesalers",
    description: "Bulk supply partnerships with pharmaceutical and medical product distributors in international markets.",
    products: ["Bulk Pharmaceuticals", "Medical Supplies", "Agro Commodities"],
  },
  {
    icon: Landmark,
    title: "Government & Institutional Buyers",
    description: "Tender-based supplies for government health programs, public hospitals, and institutional procurement.",
    products: ["Essential Medicines", "Medical Equipment", "Agricultural Products"],
  },
  {
    icon: Building2,
    title: "Pharmacy Chains",
    description: "Retail pharmaceutical supply for pharmacy chains and retail healthcare networks.",
    products: ["OTC Products", "Generic Medicines", "Health Supplements"],
  },
  {
    icon: Factory,
    title: "Food & Beverage Industry",
    description: "Premium agricultural commodities, spices, and food ingredients for the F&B sector.",
    products: ["Spices", "Grains", "Pulses", "Oilseeds"],
  },
  {
    icon: Building,
    title: "Trading Companies",
    description: "Partnership opportunities for international trading companies seeking quality Indian products.",
    products: ["All Categories", "Private Label", "Custom Sourcing"],
  },
];

const Industries = () => {
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
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From hospitals to trading companies, we serve diverse industries with 
              tailored export solutions and quality products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <industry.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-muted/50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Looking for a Reliable Export Partner?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whatever your industry, we can help you source quality products from India. 
              Let's discuss how we can support your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
