import { Box, Typography, Grid } from "@mui/material";

const features = [
  {
    title: "Produtividade",
    desc: "Organize tarefas e acompanhe seu desempenho diário",
  },
  {
    title: "Finanças",
    desc: "Controle receitas, despesas e visualize seu saldo",
  },
  {
    title: "Hábitos",
    desc: "Construa consistência e acompanhe sua evolução",
  },
];

export default function Features() {
  return (
    <Box sx={{ py: 10, px: 4, background: "#020617", color: "white" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography variant="h4" mb={6} textAlign="center">
          Tudo que você precisa em um só lugar
        </Typography>

        <Grid container spacing={4}>
          {features.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography variant="h6" mb={1}>
                  {item.title}
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}