import type { Login } from "@mui/icons-material";
import NavBarPreLogIn from "../components/NavBarPreLogIn";
import LoginForm from "../components/LogInForm";

const LogIn = () => {
  return (
    <>
      {/* Barra de navegación superior sin sección de perfil */}
      <div>
        <NavBarPreLogIn />
      </div>
      {/* Contenido principal: formulario de inicio */}
      <div>
        <LoginForm/>
      </div>
    </>
  );
};

export default LogIn;