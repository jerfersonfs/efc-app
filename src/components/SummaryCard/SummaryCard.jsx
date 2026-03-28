import { Typography } from "@mui/material";
import BaseCard from "../BaseCard/BaseCard";

export default function SummaryCard({ title, value, description }) {
  return (
    <BaseCard>
      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "#94a3b8",
          fontWeight: 500
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: "0.4rem",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "#0f172a"
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          mt: "0.25rem",
          fontSize: "0.8rem",
          color: "#94a3b8"
        }}
      >
        {description}
      </Typography>
    </BaseCard>
  );
}