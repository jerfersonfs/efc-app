import { Card, CardContent } from "@mui/material";

export default function BaseCard({ children }) {
  return (
    <Card
      sx={{
        border: "1px solid #eef2f7",
        borderRadius: "14px",
        p: "1.2rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
        transition: "all 0.2s ease",

        "&:hover": {
          boxShadow: "0 6px 20px rgba(15, 23, 42, 0.06)"
        }
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {children}
      </CardContent>
    </Card>
  );
}