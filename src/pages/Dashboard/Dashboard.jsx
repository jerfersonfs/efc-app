import { Box } from "@mui/material";

import SummaryCards from "../../components/Dashboard/SummaryCards/SummaryCards.jsx";
import ChartsSection from "../../components/Dashboard/ChartsSection/ChartsSection.jsx";

const cards = [
  {
    title: "Saldo do mês",
    value: "R$ 4.250,00",
    description: "Receitas - despesas"
  },
  {
    title: "Atividades concluídas",
    value: "17",
    description: "Total desta semana"
  },
  {
    title: "Sequência de hábitos",
    value: "8 dias",
    description: "Rotina matinal ativa"
  }
];

const lineChartData = [
  { month: "Jan", eficiencia: 62, meta: 75 },
  { month: "Fev", eficiencia: 68, meta: 75 },
  { month: "Mar", eficiencia: 74, meta: 75 },
  { month: "Abr", eficiencia: 71, meta: 80 },
  { month: "Mai", eficiencia: 79, meta: 80 },
  { month: "Jun", eficiencia: 83, meta: 80 },
  { month: "Jul", eficiencia: 78, meta: 85 },
  { month: "Ago", eficiencia: 85, meta: 85 },
  { month: "Set", eficiencia: 88, meta: 85 },
  { month: "Out", eficiencia: 84, meta: 90 },
  { month: "Nov", eficiencia: 90, meta: 90 },
  { month: "Dez", eficiencia: 92, meta: 90 }
];

function Dashboard() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        backgroundColor: "background.default"
      }}
    >
      {/* CARDS */}
      <SummaryCards cards={cards} />

      {/* GRÁFICOS */}
      <ChartsSection lineChartData={lineChartData} />
    </Box>
  );
}

export default Dashboard;