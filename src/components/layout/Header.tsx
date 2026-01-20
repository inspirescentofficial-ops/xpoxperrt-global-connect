import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Pharmaceutical Exports", href: "/products/pharmaceutical" },
      { name: "Medical & Surgical Exports", href: "/products/medical" },
      { name: "Agro Commodities Exports", href: "/products/agro" },
    ],
  },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Export Process", href: "/export-process" },
  { name: "Industries", href: "/industries" },
  { name: "Global Reach", href: "/global-reach" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">X</span>
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">
            XPOXPERRT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  isActive(item.href)
                    ? "text-secondary bg-secondary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-elevated border border-border overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-6">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium ${
                      isActive(item.href)
                        ? "text-secondary bg-secondary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
