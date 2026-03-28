import { Typography, LinearProgress, Box } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";

function HabitsSummary({ doneCount, total }) {
  const progress = total === 0 ? 0 : (doneCount / total) * 100;

  return (
    <BaseCard>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Resumo do dia
      </Typography>

      <Typography sx={{ mb: 2 }} color="text.secondary">
        Você concluiu <strong>{doneCount}</strong> de{" "}
        <strong>{total}</strong> hábitos hoje.
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 10
        }}
      />
    </BaseCard>
  );
}

export default HabitsSummary;