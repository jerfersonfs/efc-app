import { Box } from "@mui/material";
import SummaryCard from "../../SummaryCard/SummaryCard";

export default function SummarySection({ summary, formatCardValue }) {
  const summaryItems = [
    {
      title: "Receitas",
      value: formatCardValue(summary.income),
      description: "Entradas registradas"
    },
    {
      title: "Despesas",
      value: formatCardValue(summary.expense),
      description: "Saídas registradas"
    },
    {
      title: "Investimentos",
      value: formatCardValue(summary.investment),
      description: "Aportes aplicados"
    },
    {
      title: "Saldo",
      value: formatCardValue(summary.balance),
      description: "Receitas - Despesas - Investimentos"
    }
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "0.8rem"
      }}
    >
      {summaryItems.map((item) => (
        <SummaryCard key={item.title} {...item} />
      ))}
    </Box>
  );
}