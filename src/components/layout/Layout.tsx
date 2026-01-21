import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">{children}</main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917303082123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          Chat with us
        </span>
      </a>
    </div>
  );
};
