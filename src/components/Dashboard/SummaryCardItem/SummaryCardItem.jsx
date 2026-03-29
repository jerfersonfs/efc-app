import { Typography } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";

export default function SummaryCardItem({ title, value, description }) {
  return (
    <BaseCard>
      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "text.secondary",
          fontWeight: 500
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "text.primary"
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          mt: 0.3,
          fontSize: "0.8rem",
          color: "text.secondary"
        }}
      >
        {description}
      </Typography>
    </BaseCard>
  );
}