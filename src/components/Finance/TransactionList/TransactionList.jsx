import { Typography, List, ListItem, Box } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";

export default function TransactionList({
  transactions,
  hideValues,
  formatCurrency,
  hideFinancialValue
}) {
  return (
    <BaseCard>
      <Typography variant="h6" sx={{ mb: "0.7rem" }}>
        Últimos lançamentos
      </Typography>

      <List sx={{ mt: "0.7rem", display: "grid", gap: "0.55rem", p: 0 }}>
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            sx={{
              border: "1px solid #f1f5f9",
              borderRadius: "10px",
              p: "0.7rem 0.9rem",
              transition: "all 0.2s",

              "&:hover": {
                backgroundColor: "#afaa7e"
              }
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                {transaction.category}
              </Typography>
              <Typography variant="caption">
                {transaction.date}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
                color:
                  transaction.type === "income"
                    ? "#16a34a"
                    : transaction.type === "investment"
                    ? "#ca8a04"
                    : "#dc2626"
              }}
            >
              {transaction.type === "income" ? "+" : "-"}{" "}
              {hideFinancialValue(hideValues, transaction.amount, formatCurrency)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </BaseCard>
  );
}