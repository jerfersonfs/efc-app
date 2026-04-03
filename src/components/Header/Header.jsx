import { Box, Typography } from "@mui/material";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { ROUTES } from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";

export default function Header({ title, subtitle }) {
  const navigate = useNavigate();

  const {logout} = useAuth()
  console.log("auth:", logout)

  const userMock = {
    initials: "JF",
    name: "Jeferson Freitas",
    email: "jefreitas@email.com"
  };

  const headerMenuItemsMock = [
    { id: "profile", label: "Meu perfil", to: ROUTES.PROFILE },
    { id: "settings", label: "Configurações da conta", to: ROUTES.SETTINGS },
    { id: "payment", label: "Métodos de pagamento" },
    { id: "support", label: "Ajuda e suporte" },
    { id: "logout", label: "Sair",to: ROUTES.LOGIN}
  ];

  const identityContent = (
    <Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.95rem"
        }}
      >
        {userMock.name}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.3 }}
      >
        {userMock.email}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2
      }}
    >
      {/* TITLE */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "text.primary"
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              mt: 0.3
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* USER MENU */}
      <DropdownMenu
        trigger={userMock.initials}
        menuLabel="Opções do usuário"
        headerContent={identityContent}
        items={headerMenuItemsMock}
      />
    </Box>
  );
}