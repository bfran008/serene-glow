import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Livraison from "./pages/Livraison";
import Retours from "./pages/Retours";
import Contact from "./pages/Contact";
import Ingredients from "./pages/Ingredients";
import Engagements from "./pages/Engagements";
import Presse from "./pages/Presse";
import CartesCadeaux from "./pages/CartesCadeaux";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CartDrawer />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/retours" element={<Retours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/cartes-cadeaux" element={<CartesCadeaux />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
