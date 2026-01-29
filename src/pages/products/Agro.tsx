import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import agroCategory from "@/assets/agro-category.jpg";

const productCategories = [
  {
    title: "Beverage Products",
    items: ["Tea (Assam, Darjeeling, Green)", "Coffee Beans / Powder", "Herbal Tea", "Fruit Juice Concentrate", "Soft Drink Concentrate", "Energy Drink Powder", "Milk Powder", "Flavored Syrups", "Coconut Water", "Instant Drink Mixes"],
  },
  {
    title: "Grains & Cereals",
    items: ["Maize", "Basmati Rice (1121, 1509, Sella, Steam)", "Non-Basmati Rice (IR64, Sona Masuri)", "Wheat Flour / Atta", "Maida / Suji", "Quinoa Seeds"],
  },
  {
    title: "Pulses & Legumes",
    items: ["Toor Dal", "Moong Dal", "Chana Dal", "Masoor Dal", "Chickpeas / Kabuli Chana", "Cowpeas (Lobia)", "Peanuts / Groundnut"],
  },
  {
    title: "Fruits & Dry Fruits",
    items: ["Banana (Fresh)", "Apple", "Grapes", "Raisins", "Dehydrated Bananas", "Walnut", "Almond", "Cashew", "Coconut"],
  },
  {
    title: "Vegetables (Fresh / Dried / Frozen)",
    items: ["Onion (Fresh & Dried)", "Onion Powder", "Garlic Powder", "Ginger & Ginger Powder", "Green & Red Chilli", "Dried Vegetables", "Dehydrated Vegetables", "Frozen Veggies"],
  },
  {
    title: "Spices & Seeds",
    items: ["Turmeric", "Black Pepper", "Cloves", "Nutmeg", "Cardamom", "Fenugreek Seeds", "Ajwain Seeds", "Cumin Seeds", "Dill Seeds", "Coriander Seeds", "Black Seeds", "Chia Seeds", "Asaliya Seeds"],
  },
  {
    title: "Oils & Fats",
    items: ["Vegetable Oil", "Groundnut Oil", "Sunflower Oil", "Mustard Oil", "Black Sesame Oil", "Coconut Oil", "Almond Oil"],
  },
  {
    title: "Sweeteners & Condiments",
    items: ["Jaggery", "Cane Jaggery", "Honey", "Pickled Food"],
  },
  {
    title: "Processed & Ready Items",
    items: ["Frozen Food", "Ready To Eat Indian Food", "Frozen Veg Snacks & Paratha", "Papad", "Bread Rusk", "Sweet Biscuit", "Chocolate"],
  },
  {
    title: "Other Food Products",
    items: ["Starch of Maize (Corn)", "Guar Gum", "Psyllium Husk", "Makhana (Fox Nut)", "Blended Masala"],
  },
];

const features = [
  "APEDA registered exporter",
  "FSSAI certified products",
  "Phytosanitary certificates",
  "Quality grading reports",
  "Fumigation certificates",
  "Organic options available",
];

const AgroProducts = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={agroCategory}
            alt="Agricultural commodities export from India"
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
              Agro Commodities Exports
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Premium quality grains, spices, pulses, and agricultural products sourced 
              from certified Indian farms for international markets.
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
                India's Agricultural Bounty
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  India is one of the world's largest producers of agricultural commodities, 
                  known for premium Basmati rice, exotic spices, and high-quality pulses. 
                  XPOXPERRT brings this agricultural excellence to global markets.
                </p>
                <p>
                  We source directly from certified farms and processing units, ensuring 
                  quality at origin. Every shipment is accompanied by proper documentation 
                  including phytosanitary certificates and quality reports.
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
              {productCategories.map((category) => (
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
              Interested in Indian Agricultural Products?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Share your requirements for competitive pricing, quality specifications, 
              and shipping options to your destination.
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

export default AgroProducts;
