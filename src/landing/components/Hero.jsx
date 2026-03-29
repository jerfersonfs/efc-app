import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        background:
          "radial-gradient(circle at top, #1e293b, #020617)",
        color: "white",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <Stack spacing={3}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ lineHeight: 1.2 }}
          >
            Controle total da sua{" "}
            <span style={{ color: "#38bdf8" }}>vida financeira e produtiva</span>
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.7 }}>
            Uma única plataforma para organizar hábitos, tarefas e finanças
            sem complicação.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#38bdf8",
                fontWeight: "bold",
                px: 4,
              }}
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Começar agora
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              Ver demo
            </Button>
          </Stack>
        </Stack>

        {/* PREVIEW */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            sx={{
              height: 400,
              background:
                "linear-gradient(135deg, #1e293b, #0f172a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              opacity: 0.6,
            }}
          >
            Coloque aqui o print do dashboard
          </Box>
        </Box>
      </Box>
    </Box>
  );
}