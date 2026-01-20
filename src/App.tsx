import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ExportProcess from "./pages/ExportProcess";
import GlobalReach from "./pages/GlobalReach";
import Industries from "./pages/Industries";
import WhyChooseUs from "./pages/WhyChooseUs";
import PharmaceuticalProducts from "./pages/products/Pharmaceutical";
import MedicalProducts from "./pages/products/Medical";
import AgroProducts from "./pages/products/Agro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/pharmaceutical" element={<PharmaceuticalProducts />} />
          <Route path="/products/medical" element={<MedicalProducts />} />
          <Route path="/products/agro" element={<AgroProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/export-process" element={<ExportProcess />} />
          <Route path="/global-reach" element={<GlobalReach />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
