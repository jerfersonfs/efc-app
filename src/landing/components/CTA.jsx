import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "#020617",
        color: "white",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4">
          Comece a organizar sua vida hoje
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ background: "#38bdf8" }}
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          Criar conta
        </Button>
      </Stack>
    </Box>
  );
}