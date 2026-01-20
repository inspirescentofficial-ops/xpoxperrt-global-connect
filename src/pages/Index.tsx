import { Layout } from "@/components/layout";
import {
  HeroSection,
  ProductCategories,
  WhyChooseUs,
  StatsSection,
  GlobalReachSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <StatsSection />
      <GlobalReachSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
