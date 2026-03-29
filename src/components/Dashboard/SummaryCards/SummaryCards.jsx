import { Box } from "@mui/material";
import SummaryCardItem from "../SummaryCardItem/SummaryCardItem.jsx";

export default function SummaryCards({ cards }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 2
      }}
    >
      {cards.map((card) => (
        <SummaryCardItem key={card.title} {...card} />
      ))}
    </Box>
  );
}