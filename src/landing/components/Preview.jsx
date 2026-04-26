import {
  Box,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import IconLibary from "../../components/IconLibary/IconLibary";
import mob from "../../assets/mobile_byIA.png"

const previewItems = [
  {
    type: "habit",
    title: "Hábito diário",
    subtitle: "Leitura de 20 min",
    note: "7 dias seguidos. Você está mantendo constância!",
    statusLabel: "Concluído hoje",
    checked: true,
    height: 208,
  },
  {
    type: "weekly",
    title: "Atividade semanal",
    subtitle: "Treino funcional",
    note: "Meta de 4 sessões na semana.",
    progress: 75,
    progressLabel: "3 de 4 sessões",
    height: 232,
  },
  {
    type: "finance",
    title: "Resumo financeiro mensal",
    subtitle: "Abril de 2026",
    note: "Saldo parcial com gasto controlado em alimentação.",
    balanceVariation: "+12,4%",
    trend: "up",
    height: 220,
  },
];

function PreviewCard({ item, index }) {
  return (
    <Box
      sx={{
        p: 3,
        minHeight: item.height,
        borderRadius: 3,
        background: "linear-gradient(160deg, rgba(15,23,42,.95), rgba(2,6,23,.85))",
        border: "1px solid rgba(148,163,184,.22)",
        boxShadow: "0 18px 40px rgba(2,6,23,.35)",
        breakInside: "avoid",
        mb: 2,
        opacity: 0,
        transform: "translateY(14px)",
        animation: "previewStagger .45s ease forwards",
        animationDelay: `${index * 90}ms`,
        transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
        '&:hover': {
          transform: "translateY(-4px)",
          borderColor: "rgba(56,189,248,.55)",
          boxShadow: "0 20px 44px rgba(2,6,23,.45)",
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="overline" sx={{ color: "#94a3b8", letterSpacing: ".08em" }}>
          {item.title}
        </Typography>

        {item.type === "habit" && (
          <Chip
            icon={<IconLibary name="CheckCircleRoundedIcon" sx={{ fontSize: 16 }} />}
            label={item.statusLabel}
            size="small"
            color={item.checked ? "success" : "info"}
            variant={item.checked ? "filled" : "outlined"}
          />
        )}
      </Stack>

      <Typography variant="h6" sx={{ color: "#f8fafc" }}>
        {item.subtitle}
      </Typography>

      <Typography sx={{ color: "#cbd5e1", mt: 1.2, mb: 2, lineHeight: 1.45 }}>
        {item.note}
      </Typography>

      <Divider sx={{ borderColor: "rgba(33, 115, 230, 0.15)", mb: 2 }} />

      {item.type === "weekly" && (
        <Box>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography sx={{ color: "#e2e8f0", fontSize: 13 }}>Progresso semanal</Typography>
            <Typography sx={{ color: "#38bdf8", fontSize: 13 }}>{item.progress}%</Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={item.progress}
            sx={{
              height: 8,
              borderRadius: 999,
              backgroundColor: "rgba(148,163,184,.2)",
              '& .MuiLinearProgress-bar': {
                borderRadius: 999,
                background: "linear-gradient(90deg, #22d3ee 0%, #38bdf8 100%)",
              },
            }}
          />

          <Typography sx={{ color: "#94a3b8", mt: 1, fontSize: 12 }}>{item.progressLabel}</Typography>
        </Box>
      )}

      {item.type === "finance" && (
        <Stack direction="row" alignItems="center" spacing={1}>
          {item.trend === "up" ? (
            <IconLibary name="TrendingUpRoundedIcon" sx={{ color: "#22c55e", fontSize: 20 }} />
          ) : (
            <IconLibary name="TrendingDownRoundedIcon" sx={{ color: "#ef4444", fontSize: 20 }} />
          )}

          <Typography
            sx={{
              fontWeight: 700,
              color: item.trend === "up" ? "#4ade80" : "#f87171",
            }}
          >
            {item.balanceVariation}
          </Typography>

          <Typography sx={{ color: "#94a3b8", fontSize: 13 }}>vs. mês anterior</Typography>
        </Stack>
      )}
    </Box>
  );
}

export default function Preview() {
  return (
    <Box
      sx={{
        minHeight: "100%",
        height:"100%",
        boxSizing:"border-box",
        py: 10,
        px: 4,
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.93), rgba(2, 6, 23, 0.45)), url(${mob})`,
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
        color: "white",
        '@keyframes previewStagger': {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography variant="h4" textAlign="center" mb={1.5}>
          Uma prévia do seu fluxo no ELC
        </Typography>
        <Typography textAlign="center" sx={{ color: "#94a3b8", mb: 5 }}>
          Visão rápida de hábitos, rotinas e finanças com feedback visual imediato.
        </Typography>

        <Box
          sx={{
            columns: { xs: 1, sm: 2, md: 3 },
            columnGap: 2,
          }}
        >
          {previewItems.map((item, index) => (
            <PreviewCard key={`${item.type}-${item.subtitle}`} item={item} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

{/*
  ### FUTURA PREVIEW ####
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
*/}