import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

import { ROUTES } from "../../routes/routes";
import logo from "../../assets/elc-logo2.png";
import IconLibary from "../../components/IconLibary/IconLibary";

export default function Login() {
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(ROUTES.DASHBOARD);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "background.default",
        p: 2
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          minHeight: "720px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 1fr"
          },
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
          backgroundColor: "background.paper"
        }}
      >
        {/* LEFT - BRAND */}
        <Box
          sx={{
            position: "relative",
            background:
              "linear-gradient(180deg, #0f172a 0%, #17223a 55%, #1d2940 100%)",
            color: "#eef3ff",
            display: { xs: "none", md: "grid" },
            placeContent: "center",
            p: 4
          }}
        >
          {/* BLOBS */}
          <Box
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              top: 0,
              left: -35,
              borderRadius: "34px",
              background: "rgba(140,166,212,0.15)"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: 160,
              height: 160,
              top: 120,
              left: -20,
              borderRadius: "34px",
              background: "rgba(140,166,212,0.15)"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: 170,
              height: 170,
              bottom: 40,
              right: 20,
              borderRadius: "34px",
              background: "rgba(140,166,212,0.15)"
            }}
          />

          {/* CONTENT */}
          <Box sx={{ zIndex: 2, textAlign: "center" }}>
            <Box component="img" src={logo} sx={{ width: 120, mb: 2 }} />

            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 800
              }}
            >
              Bem-vindo ao ELC
            </Typography>

            <Typography sx={{ mt: 1.5, opacity: 0.9 }}>
              Seu controle de vida eficiente está aqui
            </Typography>
          </Box>
        </Box>

        {/* RIGHT - FORM */}
        <Box
          sx={{
            display: "grid",
            alignContent: "center",
            p: { xs: 3, md: 4 }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 1
            }}
          >
            Cadastre-se
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mb: 3
            }}
          >
            Comece sua jornada de produtividade
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "grid",
              gap: 1.5
            }}
          >
            <TextField
              type="email"
              label="Email"
              size="small"
              fullWidth
            />

            <TextField
              type="password"
              label="Senha"
              size="small"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                py: 1.2,
                backgroundColor:"#17223ad2 ",
                color:"#fff"
              }}
            >
              Continuar
            </Button>
          </Box>

          {/* DIVIDER */}
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mt: 3,
              mb: 1
            }}
          >
            ou continue com
          </Typography>

          {/* SOCIAL */}
          <Box sx={{ display: "grid", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                "&:hover":{
                  color: "linear-gradient(180deg, #0f172a 0%, #17223a 55%, #1d2940 100%)"
                }
              }}
            >
              Google
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                backgroundColor: "#2164bbe3",
                "&:hover": {
                  backgroundColor: "#166fe5"
                }
              }}
            >
              Facebook
            </Button>
            <Box
            sx={{
              mt:4,
              display:"flex"
            }}
            >
              <Button variant="contained"
              sx={{
                backgroundColor: "#17223ad2 ",
                color:"#fff",
              }}
              onClick={()=>navigate(ROUTES.LANDING)}
              >
                <IconLibary name="ArrowCircleLeftTwoToneIcon"/>Voltar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}