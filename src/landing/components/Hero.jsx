import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import bg from "../../assets/landing_byIA.png"
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }} // 🔥 entra quando 60% visível
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
    >
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            py: { xs: 8, md: 3 },
            backgroundImage:`linear-gradient(rgba(2, 6, 23, 0.61), rgba(2, 6, 23, 0.45)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            display: "flex",
            alignItems: "center",

            px: {
              xs: 2,
              sm: 4,
              md: 8,
              lg: 10,
            },

            color: "white"
            
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", xl: "1480px" },
              width: "min(94vw, 1480px)",
              mx: "auto",
              display: "flex",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr", xl: "1fr 1.2fr" },
              gap: { xs: 4, md: 6, xl: 8 },
              justifyContent: {
                xs: "center",
                md: "flex-end"
              },
              alignItems: "center",
              px: {
                xs: 2,
                md: 8
              }
            }}
          >
            {/* TEXTO */}
            <Stack spacing={6} 
              sx={{ 
                animation: "fadeSlideUp 700ms ease-out both", 
                maxWidth: 600,
                width: "100%",
                textAlign: {
                  xs: "center",
                  md: "left"
                }
              }}
            >
              <Typography variant="h3" fontWeight={800} sx={{
                fontSize: {
                xs: "2.2rem",   // mobile
                sm: "2.8rem",
                md: "3.5rem",
                lg: "4.5rem",
                },// Muda tamanho por tamanho de tela
                fontFamily: "sans-serif",
                fontWeight: 800,
                lineHeight: 1.12,
                right: 0,
                maxWidth: { xs: "100%", xl: "18ch" }, // Muda largura por tamanho de tela
              }}>
                Centralize hábitos, tarefas e finanças
                <Box component="span" sx={{ color: "#7DD3FC", ml: 3 }}>
                  em um só fluxo
                </Box>
              </Typography>
              <Typography variant="h6" sx={{maxWidth: 600, wordSpacing: 4, letterSpacing:1.2 }}>
                Organize sua vida de um jeito eficiente e prático — sem trocar de app ou criar planilhas.
              </Typography>
            
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "#38bdf8",
                    fontWeight: "bold",
                    px: 4,
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    willChange: "transform",
                    "&:hover": {
                      background: "#38bdf8",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 24px rgba(56,189,248,0.15)",
                    },
                  }}
                  onClick={() => navigate(ROUTES.LOGIN)}
                >
                  Começar agora
                </Button>
              </Stack>
            </Stack>
            
          
          </Box>
        </Box>
    </motion.div>
  );
}