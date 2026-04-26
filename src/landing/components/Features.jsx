import {
  Box,
  Typography,
  Grid,
  Stack,
  Chip,
  Divider
} from "@mui/material";
import {
  EventNoteRounded,
  PlayCircleRounded,
  QueryStatsRounded,
  CheckCircleRounded,
  SavingsRounded,
  RepeatRounded,
  ArrowForwardRounded
} from "@mui/icons-material";
import img from "../../assets/work_byIA.png"

const journeyBlocks = [
  {
    key: "planejar",
    title: "Planejar",
    headline: "Defina o que importa em minutos",
    description:
      "Transforme metas amplas em ações claras para começar com foco já no primeiro dia.",
    icon: EventNoteRounded,
    badge: "Mais clareza em suas prioridades",
    metrics: [
      {
        icon: CheckCircleRounded,
        area: "Hábitos",
        result: "Plano semanal com até 7 hábitos priorizados.",
      },
      {
        icon: CheckCircleRounded,
        area: "Atividades",
        result: "Backlog diário com prazos e esforço estimado.",
      },
      {
        icon: CheckCircleRounded,
        area: "Finanças",
        result: "Orçamento mensal com limite por categoria.",
      },
    ],
  },
  {
    key: "executar",
    title: "Executar",
    headline: "Mantenha ritmo sem perder consistência",
    description:
      "Registre progresso com poucos cliques e mantenha cadência nas tarefas que geram resultado.",
    icon: PlayCircleRounded,
    badge: "Até 2x mais tarefas concluídas",
    metrics: [
      {
        icon: RepeatRounded,
        area: "Hábitos",
        result: "Streaks visíveis para reforçar frequência diária.",
      },
      {
        icon: RepeatRounded,
        area: "Atividades",
        result: "Check-ins rápidos para acompanhar execução em tempo real.",
      },
      {
        icon: SavingsRounded,
        area: "Finanças",
        result: "Lançamentos recorrentes com categorização automática.",
      },
    ],
  },
  {
    key: "acompanhar",
    title: "Acompanhar",
    headline: "Meça evolução com indicadores objetivos",
    description:
      "Visualize ganhos semanais e ajuste a rota com base em dados, não em achismos.",
    icon: QueryStatsRounded,
    badge: "Visão consolidada em 1 painel",
    metrics: [
      {
        icon: QueryStatsRounded,
        area: "Hábitos",
        result: "Taxa de consistência e melhor sequência do mês.",
      },
      {
        icon: QueryStatsRounded,
        area: "Atividades",
        result: "Percentual de entregas no prazo por semana.",
      },
      {
        icon: QueryStatsRounded,
        area: "Finanças",
        result: "Saldo projetado e economia acumulada no período.",
      },
    ],
  },
];

export default function Features() {
  return ( 
     <Box
      sx={{
        minHeight:"100vh",
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundImage:
          `linear-gradient(rgba(2, 6, 23, 0.93), rgba(2, 6, 23, 0.45)), url(${img})`,
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
        color: "#F8FAFC",

      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 1.5,
            textAlign: "center",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Planeje, execute e acompanhe sem fricção
        </Typography>
        <Typography
          sx={{
            mb: 6,
            textAlign: "center",
            color: "rgba(248,250,252,0.82)",
            maxWidth: 760,
            mx: "auto",
            fontSize: { xs: "0.98rem", md: "1.05rem" },
          }}
        >
          Uma jornada única para evoluir hábitos, atividades e finanças com
          metas claras e resultado mensurável.
        </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr auto 1fr auto 1fr" },
              gap: { xs: 2.5, md: 3 },
              alignItems: "stretch",
              "@keyframes arrowPulse": {
                "0%, 100%": { opacity: 0.4, transform: "translateX(0px)" },
                "50%": { opacity: 1, transform: "translateX(6px)" },
              },
            }}
          >
            {journeyBlocks.map((block, index) => {
              const BlockIcon = block.icon;

              return (
                <Box key={block.key} sx={{ display: "contents" }}>
                  {/* CARD */}
                  <Box
                    sx={{
                      minHeight: "100%",
                      height:"100%",
                      boxSizing:"border-box",
                      p: { xs: 3, md: 3.5 },
                      borderRadius: 5,
                      background: "rgba(32, 38, 53, 0.78)", // nova cor dos cards
                      border: "2px solid rgba(49, 109, 194, 0.13)",
                      boxShadow: "0 12px 28px rgba(123, 147, 255, 0.21)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1.5}
                      sx={{
                        animation: "fadeSlideUp 700ms ease-out both", 
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        fontWeight: 800,
                        mb: 0.5,
                        color:"#f0eded",
                        backgroundColor: "#a5f3fc1f",
                        boxShadow: "0 1px 5px rgba(123, 147, 255, 0.35)",
                        p: 1,
                        borderRadius: 3
                      }}>
                          {block.title}
                      </Typography>
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            display: "grid",
                            placeItems: "center",
                            color: "#22D3EE",
                            background: "rgba(34, 211, 238, 0.16)",
                          }}
                        >
                          <BlockIcon fontSize="small" />
                        </Box>
                    </Stack>

                    <Box>
                      <Typography
                        sx={{
                          color: "rgba(226, 232, 240, 0.86)",
                          lineHeight: 1.55,
                          fontSize: "0.95rem",
                        }}
                      >
                        {block.description}
                      </Typography>
                    </Box>

                    <Chip
                      label={block.badge}
                      size="small"
                      sx={{
                        width: "fit-content",
                        fontWeight: 700,
                        border: "1px solid rgba(34, 211, 238, 0.4)",
                        color: "#67E8F9",
                        backgroundColor: "rgba(8, 47, 73, 0.4)",
                      }}
                    />
                   
                  </Box>

                  {/* SETA ENTRE CARDS (somente desktop) */}
                  {index < journeyBlocks.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: "none", lg: "grid" },
                        placeItems: "center",
                        px: 0.5,
                      }}
                    >
                      <ArrowForwardRounded
                        sx={{
                          color: "#7DD3FC",
                          fontSize: 36,
                          animation: "arrowPulse 1.4s ease-in-out infinite",
                          animationDelay: `${index * 0.15}s`,
                          filter: "drop-shadow(0 0 10px rgba(56,189,248,.35))",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
      </Box>
    </Box>
  );
}