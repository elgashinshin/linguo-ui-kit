
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import CreateFlashcards from "./pages/Flashcards/CreateFlashcards";
import FlashcardPractice from "./pages/Flashcards/FlashcardPractice";
import TranslationPractice from "./pages/Flashcards/TranslationPractice";
import NotFound from "./pages/Error/NotFound";
import Forbidden from "./pages/Error/Forbidden";
import ErrorPage from "./pages/Error/ErrorPage";
import DuoNavbar from "./components/duolingo-ui/DuoNavbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DuoNavbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/create-flashcards" element={<CreateFlashcards />} />
            <Route path="/flashcard-practice" element={<FlashcardPractice />} />
            <Route path="/translation-practice" element={<TranslationPractice />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/forbidden" element={<Forbidden />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
