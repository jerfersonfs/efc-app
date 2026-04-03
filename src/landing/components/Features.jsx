import {
  Box,
  Typography,
  Grid,
  Stack,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import {
  EventNoteRounded,
  PlayCircleRounded,
  QueryStatsRounded,
  CheckCircleRounded,
  SavingsRounded,
  RepeatRounded,
} from "@mui/icons-material";

const journeyBlocks = [
  {
    key: "planejar",
    etapa: "Etapa 1",
    title: "Planejar",
    headline: "Defina o que importa em minutos",
    description:
      "Transforme metas amplas em ações claras para começar com foco já no primeiro dia.",
    icon: EventNoteRounded,
    badge: "+40% de clareza nas prioridades",
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
    etapa: "Etapa 2",
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
    etapa: "Etapa 3",
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
  const theme = useTheme();
  return (
     <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        background:
          "radial-gradient(circle at top, #0b1226 0%, #050914 50%, #020617 100%)",
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

               <Grid container spacing={3}>
          {journeyBlocks.map((block, index) => {
            const BlockIcon = block.icon;
            return (
              <Grid item xs={12} md={4} key={block.key}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 4,
                    background: "rgba(15, 23, 42, 0.78)",
                    border: "1px solid rgba(148, 163, 184, 0.24)",
                    boxShadow: "0 12px 28px rgba(2, 6, 23, 0.35)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    order: { xs: index + 1, md: "unset" },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1.5}
                  >
                    <Chip
                      label={block.etapa}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        color: "#0F172A",
                        backgroundColor: "#A5F3FC",
                      }}
                    />
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
                      variant="h6"
                      sx={{ fontWeight: 800, mb: 0.5, color: "#F8FAFC" }}
                    >
                      {block.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "#E2E8F0",
                        mb: 1,
                      }}
                    >
                      {block.headline}
                    </Typography>
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

                  <Divider sx={{ borderColor: "rgba(148,163,184,0.2)" }} />

                  <Stack spacing={1.3}>
                    {block.metrics.map((metric) => {
                      const MetricIcon = metric.icon;

                      return (
                        <Stack
                          key={`${block.key}-${metric.area}`}
                          direction="row"
                          spacing={1.2}
                          alignItems="flex-start"
                        >
                          <MetricIcon
                            sx={{
                              mt: "2px",
                              fontSize: 18,
                              color:
                                theme.palette.mode === "dark"
                                  ? "#7DD3FC"
                                  : "#0284C7",
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#CBD5E1",
                              lineHeight: 1.45,
                              fontSize: "0.92rem",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{ color: "#F1F5F9", fontWeight: 700 }}
                            >
                              {metric.area}: 
                            </Box>
                            {metric.result}
                          </Typography>
                        </Stack>
                      );
                    })}
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}