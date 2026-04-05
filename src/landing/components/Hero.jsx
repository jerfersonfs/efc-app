import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const previewColumns = [
  [
    {
      title: "Hábito concluído",
      value: "Leitura • 20 min",
      meta: "+12 dias de sequência",
      tone: "#22c55e",
      height: 148,
    },
    {
      title: "Resumo da semana",
      value: "18 tarefas finalizadas",
      meta: "+22% vs semana anterior",
      tone: "#38bdf8",
      height: 190,
    },
  ],
  [
    {
      title: "Tarefa do dia",
      value: "Planejar orçamento de abril",
      meta: "Prazo: hoje • 17:00",
      tone: "#f59e0b",
      height: 182,
    },
    {
      title: "Foco de hábitos",
      value: "Treino + hidratação",
      meta: "2 de 3 metas concluídas",
      tone: "#a78bfa",
      height: 160,
    },
    {
      title: "Saldo mensal",
      value: "R$ 2.430,00",
      meta: "Receitas R$ 6.100 • Gastos R$ 3.670",
      tone: "#14b8a6",
      height: 140,
    },
  ],
  [
    {
      title: "Meta financeira",
      value: "Reserva de emergência",
      meta: "76% concluída",
      tone: "#0ea5e9",
      height: 172,
    },
    {
      title: "Rotina da manhã",
      value: "4 hábitos em sequência",
      meta: "Consistência de 91%",
      tone: "#ec4899",
      height: 168,
    },
  ],
];


export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow:"clip",
        px: 4,
        background:
          "radial-gradient(circle at top, #1e293b, #020617)",
        px: { xs: 2.5, md: 4 },
        py: { xs: 8, md: 3 },
        background: "radial-gradient(circle at top, #1e293b, #020617)",
        color: "white",
          "@keyframes fadeSlideUp": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", xl: "1480px" },
          width: "min(94vw, 1480px)",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr", xl: "1fr 1.2fr" },
          gap: { xs: 4, md: 6, xl: 8 },
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <Stack spacing={6} sx={{ animation: "fadeSlideUp 700ms ease-out both" }}>
          <Typography variant="h3" fontWeight={800} sx={{
            fontSize: "clamp(2.2rem, 3.2vw, 4.4rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: { xs: "100%", xl: "18ch" },
          }}>
            Centralize hábitos, tarefas e finanças
            <Box component="span" sx={{ color: "#38bdf8", ml: 3 }}>
               em um só fluxo
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.78, maxWidth: 600, wordSpacing: 4, letterSpacing:1.2 }}>
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
                  boxShadow: "0 10px 24px rgba(56,189,248,0.35)",
                },
              }}
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Começar agora
            </Button>
            
          </Stack>
        </Stack>
        
        {/* PREVIEW */}
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "linear-gradient(135deg, #111827, #0f172a)",
            p: { xs: 2, md: 2.5 },
            animation: "fadeSlideUp 900ms ease-out 150ms both",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
              gap: 1.5,
            }}
          >
                       {previewColumns.map((column, columnIndex) => (
              <Stack
                key={columnIndex}
                spacing={1.5}
                sx={{
                  display: { xs: columnIndex === 0 ? "flex" : "none", sm: columnIndex === 2 ? "none" : "flex", lg: "flex" },
                }}
              >
                {column.map((card) => (
                  <Box
                    key={card.title}
                    sx={{
                      minHeight: card.height,
                      p: 2,
                      borderRadius: 2.5,
                      background: "rgba(15,23,42,0.88)",
                      border: "1px solid rgba(148,163,184,0.2)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                      willChange: "transform",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 24px rgba(2,6,23,0.35)",
                        borderColor: "rgba(56,189,248,0.35)",
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "rgba(226,232,240,0.9)", mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.75 }}>
                      {card.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: card.tone, fontWeight: 600 }}>
                      {card.meta}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}