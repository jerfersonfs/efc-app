import { Box, Typography } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";
import LineChart from "../../LineChart/LineChart.jsx";
import DonutChart from "../../DonutChart/DonutChart";

export default function ChartsSection({ lineChartData }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "2fr 1fr"
        },
        gap: 3
      }}
    >
      {/* LINE CHART */}
      <BaseCard>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Eficiência Mensal
        </Typography>

        <LineChart
          data={lineChartData}
          xKey="month"
          lineKey="eficiencia"
          lineKey2="meta"
          height={300}
        />
      </BaseCard>

      {/* DONUT */}
      <BaseCard>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Overview
        </Typography>

        <DonutChart
          height={260}
          data={[
            { name: "Concluído", value: 120 },
            { name: "Em andamento", value: 60 },
            { name: "Pendente", value: 30 }
          ]}
          dataKey="value"
          nameKey="name"
        />
      </BaseCard>
    </Box>
  );
}