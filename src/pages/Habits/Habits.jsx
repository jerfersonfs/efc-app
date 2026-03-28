import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import HabitsSummary from "../../components/Habits/HabitsSummary/HabitsSummary.jsx";
import HabitForm from "../../components/Habits/HabitForm/HabitForm.jsx";
import HabitList from "../../components/Habits/HabitList/HabitList.jsx";
import HabitsHeatmap from "../../components/Habits/HabitsHeatmap/HabitsHeatmap.jsx";

const STORAGE_KEY = "efc.habits";

const getToday = () => new Date().toISOString().split("T")[0];

const loadHabits = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  return JSON.parse(stored);
};

const saveHabits = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const initialHabits = [
  { id: 1, name: "Beber água (2L)", streak: 12, doneToday: true, history:{
    "2026-03-28": true,
    "2026-03-27": true
  } },
  { id: 2, name: "Meditar 10 minutos", streak: 6, doneToday: false,history:{
    "2026-03-28": true,
    "2026-03-27": true
  } },
  { id: 3, name: "Ler 20 páginas", streak: 9, doneToday: false,history:{
    "2026-03-28": true,
    "2026-03-27": true
  } }
];

function Habits() {
  const [habits, setHabits] = useState(() => {
    const stored = loadHabits();

    if (!stored) return initialHabits;

    const today = getToday();

    // 🔥 RESET AUTOMÁTICO
    if (stored.lastResetDate !== today) {
      return stored.habits.map((habit) => ({
        ...habit,
        doneToday: false
      }));
    }

    return stored.habits;
  });

  const [newHabit, setNewHabit] = useState("");

  const toggleHabit = (id) => {
    const today = getToday();

    setHabits((current) =>
      current.map((habit) => {
        if (habit.id !== id) return habit;

        const nextDone = !habit.doneToday;

        const updatedHistory = {
          ...habit.history,
          [today]: nextDone
        };

        return {
          ...habit,
          doneToday: nextDone,
          history: updatedHistory,
          streak: nextDone
            ? habit.streak + 1
            : Math.max(habit.streak - 1, 0)
        };
      })
    );
  };

  const handleAddHabit = (event) => {
    event.preventDefault();

    if (!newHabit.trim()) return;

    setHabits((current) => [
      {
        id: Date.now(),
        name: newHabit.trim(),
        streak: 0,
        doneToday: false
      },
      ...current
    ]);

    setNewHabit("");
  };

  // 💾 SALVAR AUTOMATICAMENTE
  useEffect(() => {
    saveHabits({
      habits,
      lastResetDate: getToday()
    });
  }, [habits]);

  const doneCount = habits.filter((h) => h.doneToday).length;

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        backgroundColor: "background.default"
      }}
    >
      <HabitsSummary
        doneCount={doneCount}
        total={habits.length}
      />

      <HabitForm
        newHabit={newHabit}
        setNewHabit={setNewHabit}
        handleAddHabit={handleAddHabit}
      />

      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
      />

      <HabitsHeatmap habits={habits} />
    </Box>
  );
}

export default Habits;