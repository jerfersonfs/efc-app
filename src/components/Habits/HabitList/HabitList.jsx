import { Typography, List } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard.jsx";
import HabitItem from "../HabitItem/HabitItem.jsx";

function HabitList({ habits, toggleHabit }) {
  return (
    <BaseCard>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Meus hábitos
      </Typography>

      <List
        sx={{
          display: "grid",
          gap: 1.2,
          p: 0
        }}
      >
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            toggleHabit={toggleHabit}
          />
        ))}
      </List>
    </BaseCard>
  );
}

export default HabitList;