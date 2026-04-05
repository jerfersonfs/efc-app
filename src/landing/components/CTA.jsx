import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
        py: { xs: 8, md: 10 },
        px: 2,
        textAlign: "center",
        background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
        color: "white",
      }}
    >
      <Stack spacing={2.5} alignItems="center" maxWidth={760} mx="auto">
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Comece hoje e acompanhe sua evolução em hábitos, tarefas e finanças.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ color: "#cbd5e1", maxWidth: 620, lineHeight: 1.6 }}
        >
          Sem complexidade, com visão unificada e progresso diário para você
          manter o foco no que importa.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 1,
            px: 5,
            py: 1.5,
            fontWeight: 700,
            letterSpacing: 0.2,
            borderRadius: 2,
            backgroundColor: "#0ea5e9",
            boxShadow: "0 10px 30px rgba(14, 165, 233, 0.35)",
            '&:hover': {
              backgroundColor: "#38bdf8",
            },
          }}
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          Criar conta
        </Button>
        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
          Leva só 2 minutos para começar.
        </Typography>
      </Stack>
    </Box>
  );
}