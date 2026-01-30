import { Toaster, Toaster as Sonner, TooltipProvider } from "@/components/ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Bar, RsvpForm, Schedule, DressCode, FAQ, NotFound } from "./pages";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/rsvp" element={<RsvpForm />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/dresscode" element={<DressCode />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
