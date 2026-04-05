import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Preview from "./components/Preview"


export default function LandingPage() {
  return (
    <>
    <Box sx={{
      height:"100vh",
      overflowY:"auto",
      overflowX:"hidden",
      scrollSnapType:"y mandatory",
      scrollBehavior:"smooth",
      scrollbarWidth:"none", // Firefox
      msOverflowStyle:"none", // IE/Edge antigo
      "&::-webkit-scrollbar": {
      display: "none", // Chrome/Safari
    },
    }}>
      <Box
        id="hero"
        sx={{ minHeight:"100svh", scrollSnapAlign:"start" }}>
        <Hero />
      </Box>
      <Box
        id="features"
        sx={{ minHeight: "100svh", scrollSnapAlign: "start", display: "grid", alignItems: "center"}}>
        <Features />
      </Box>
      <Box
       id="preview"
        sx={{ minHeight: "100svh", scrollSnapAlign: "start", display: "grid", alignItems: "center" }}>
        <Preview/>
      </Box>
      <Box
        id="cta"
        sx={{ minHeight: "100svh", scrollSnapAlign: "start", display: "grid", alignItems: "center" }}>
        <CTA />
      </Box>
    </Box>
    </>
  );
}