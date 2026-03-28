import { Box, Typography } from "@mui/material";

function generateLastDays(days = 90) {
  const dates = [];

  for (let i = days; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split("T")[0]);
  }

  return dates;
}

function HabitsHeatmap({ habits }) {
  const dates = generateLastDays(90);

  const getIntensity = (date) => {
    let count = 0;

    habits.forEach((h) => {
      if (h.history?.[date]) count++;
    });

    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    return 3;
  };

  const colorMap = [
    "#e5e7eb", // none
    "#86efac",
    "#4ade80",
    "#16a34a"
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Consistência
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(30, 10px)",
          gap: "4px"
        }}
      >
        {dates.map((date) => {
          const level = getIntensity(date);

          return (
            <Box
              key={date}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "2px",
                backgroundColor: colorMap[level]
              }}
              title={date}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default HabitsHeatmap;