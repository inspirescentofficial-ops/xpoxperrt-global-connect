import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pharmaCategory from "@/assets/pharma-category.jpg";
import medicalCategory from "@/assets/medical-category.jpg";
import agroCategory from "@/assets/agro-category.jpg";

const categories = [
  {
    title: "Pharmaceutical Exports",
    description: "Complete range of finished pharmaceutical formulations including tablets, capsules, injectables, syrups, and APIs. All products sourced from WHO-GMP certified manufacturers with full documentation support.",
    products: ["Tablets & Capsules", "Injectables", "Syrups & Suspensions", "APIs", "Nutraceuticals"],
    image: pharmaCategory,
    href: "/products/pharmaceutical",
    alt: "Pharmaceutical export products from India",
  },
  {
    title: "Medical & Surgical Exports",
    description: "Comprehensive range of surgical instruments, medical devices, disposables, and hospital equipment. Quality-assured products for hospitals, clinics, and healthcare distributors worldwide.",
    products: ["Surgical Instruments", "Medical Devices", "Disposables", "Hospital Equipment", "Diagnostic Kits"],
    image: medicalCategory,
    href: "/products/medical",
    alt: "Medical and surgical supplies for export",
  },
  {
    title: "Agro Commodities Exports",
    description: "Premium agricultural products including grains, spices, pulses, and oilseeds. Sourced from certified farms with strict quality control and export-grade packaging.",
    products: ["Basmati Rice", "Indian Spices", "Pulses & Lentils", "Oilseeds", "Organic Products"],
    image: agroCategory,
    href: "/products/agro",
    alt: "Agricultural commodities for international export",
  },
];

const Products = () => {
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
              Our Export Products
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Quality-assured products across pharmaceutical, medical, and agricultural 
              sectors, ready for international markets with complete compliance documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-3">Key Products:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                >
                  View All Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
