import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import globalTrade from "@/assets/global-trade.jpg";

const regions = [
  {
    name: "Europe",
    countries: ["Germany", "United Kingdom", "France", "Netherlands", "Belgium", "Italy", "Spain", "Poland"],
    description: "Strong presence in EU regulated markets with complete documentation support.",
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Jordan", "Iraq", "Bahrain"],
    description: "Established partnerships with major distributors across GCC countries.",
  },
  {
    name: "Africa",
    countries: ["Nigeria", "Kenya", "South Africa", "Ghana", "Tanzania", "Ethiopia", "Uganda", "Egypt"],
    description: "Growing network serving healthcare and agricultural sectors.",
  },
  {
    name: "Southeast Asia",
    countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines", "Indonesia", "Myanmar"],
    description: "Active trade relationships with pharmaceutical distributors and hospitals.",
  },
  {
    name: "Latin America",
    countries: ["Brazil", "Mexico", "Colombia", "Chile", "Argentina", "Peru", "Ecuador"],
    description: "Expanding presence in pharmaceutical and agricultural commodity markets.",
  },
  {
    name: "CIS & Central Asia",
    countries: ["Russia", "Ukraine", "Kazakhstan", "Uzbekistan", "Georgia", "Azerbaijan"],
    description: "Serving pharmaceutical and medical product requirements across the region.",
  },
];

const GlobalReach = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={globalTrade}
            alt="International shipping and global trade"
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Global Reach
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Connecting Indian quality with international markets. Our trade network 
              spans 50+ countries across six continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Countries" },
              { value: "6", label: "Continents" },
              { value: "500+", label: "Active Partners" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Markets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Regions We Serve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover-lift"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {region.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground"
                    >
                      {country}
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
            className="text-center mt-20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your Country Listed?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're constantly expanding our global network. Contact us to discuss 
              export possibilities for your region.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalReach;
