import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";

import { useThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

function Settings() {
  const { mode, setMode } = useThemeContext();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        backgroundColor: "background.default",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Configurações da conta
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
            Defina preferências da aplicação
          </Typography>

          {/* SELECT DE TEMA */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tema</InputLabel>
            <Select
              value={mode}
              label="Tema"
              onChange={(e) => setMode(e.target.value)}
            >
              <MenuItem value="light">Claro</MenuItem>
              <MenuItem value="dark">Escuro</MenuItem>
            </Select>
          </FormControl>

          {/* AÇÕES */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() =>
                setMode(mode === "light" ? "dark" : "light")
              }
            >
              Alternar tema
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Sair
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Settings;