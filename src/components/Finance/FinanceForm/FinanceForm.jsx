import { Box, Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";

export default function FinanceForm({
  type,
  setType,
  category,
  setCategory,
  amount,
  setAmount,
  handleSubmit
}) {
  return (
    <BaseCard>
      <Typography variant="h6" sx={{ mb: "0.7rem" }}>
        Novo lançamento
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: "160px 1fr 180px auto",
          gap: "0.6rem",
          mt: "0.7rem",
          "@media (max-width:900px)": {
            gridTemplateColumns: "1fr"
          }
        }}
      >
        <Select value={type} onChange={(e) => setType(e.target.value)} size="small">
          <MenuItem value="income">Entrada</MenuItem>
          <MenuItem value="expense">Despesa</MenuItem>
          <MenuItem value="investment">Investimento</MenuItem>
        </Select>

        <TextField
          value={category}
          placeholder="Categoria (Ex.: Aluguel)"
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#f9fafb"
            }
          }}
        />

        <TextField
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#f9fafb"
            }
          }}
        />

        <Button
          type="submit"
          sx={{
            backgroundColor: "#111827",
            color: "#fff",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 500,
            px: "1rem",

            "&:hover": {
              backgroundColor: "#1f2937"
            }
          }}
        >
          Salvar
        </Button>
      </Box>
    </BaseCard>
  );
}