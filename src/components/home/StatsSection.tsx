import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "500+", label: "Products Exported" },
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
