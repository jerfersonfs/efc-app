import { Box, Typography, TextField, Button } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";

function HabitForm({ newHabit, setNewHabit, handleAddHabit }) {
  return (
    <BaseCard>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Novo hábito
      </Typography>

      <Box
        component="form"
        onSubmit={handleAddHabit}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 1,
          "@media (max-width:900px)": {
            gridTemplateColumns: "1fr"
          }
        }}
      >
        <TextField
          placeholder="Ex.: Caminhar 20 minutos"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          size="small"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ borderRadius: "10px", textTransform: "none" }}
        >
          Adicionar
        </Button>
      </Box>
    </BaseCard>
  );
}

export default HabitForm;