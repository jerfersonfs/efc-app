import { Box, Typography, Button } from "@mui/material";

function HabitItem({ habit, toggleHabit }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "12px",
        p: "0.9rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.2s",

        backgroundColor: habit.doneToday
          ? "action.selected"
          : "background.paper",

        "&:hover": {
          backgroundColor: "action.hover"
        },

        "@media (max-width:900px)": {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1
        }
      }}
    >
      {/* TEXTO */}
      <Box>
        <Typography fontWeight={600}>
          {habit.name}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 0.3
          }}
          color="text.secondary"
        >
          🔥 {habit.streak} dias
        </Typography>
      </Box>

      {/* BOTÃO */}
      <Button
        onClick={() => toggleHabit(habit.id)}
        variant={habit.doneToday ? "contained" : "outlined"}
        color={habit.doneToday ? "success" : "primary"}
        size="small"
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 500
        }}
      >
        {habit.doneToday
          ? "Concluído"
          : "Marcar como feito"}
      </Button>
    </Box>
  );
}

export default HabitItem;