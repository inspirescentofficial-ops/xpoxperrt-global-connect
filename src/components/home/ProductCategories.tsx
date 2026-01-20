import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pharmaCategory from "@/assets/pharma-category.jpg";
import medicalCategory from "@/assets/medical-category.jpg";
import agroCategory from "@/assets/agro-category.jpg";

const categories = [
  {
    title: "Pharmaceutical Exports",
    description: "Quality-assured finished formulations including tablets, capsules, injectables, and APIs for regulated and semi-regulated markets.",
    image: pharmaCategory,
    href: "/products/pharmaceutical",
    alt: "Pharmaceutical manufacturing and export from India",
  },
  {
    title: "Medical & Surgical Exports",
    description: "Comprehensive range of surgical instruments, medical devices, disposables, and hospital equipment for healthcare institutions worldwide.",
    image: medicalCategory,
    href: "/products/medical",
    alt: "Medical and surgical supplies export warehouse",
  },
  {
    title: "Agro Commodities Exports",
    description: "Premium quality grains, spices, pulses, and agricultural products sourced from certified Indian farms for international markets.",
    image: agroCategory,
    href: "/products/agro",
    alt: "Export-grade agricultural commodities and spices",
  },
];

export const ProductCategories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Export Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality Products for Global Markets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From pharmaceutical formulations to agricultural commodities, we deliver 
            compliance-ready products to distributors and institutions worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group block bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
