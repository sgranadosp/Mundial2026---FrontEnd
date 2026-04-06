import LandingForm from "../components/LandingForm";
import NavBarPreLogIn from "../components/NavBarPreLogIn";

const LandingPage = () => {
  return (
    <>
      {/* Barra de navegación superior sin sección de perfil */}
      <div>
        <NavBarPreLogIn />
      </div>
      {/* Contenido principal: formulario de inicio */}
      <div>
        <LandingForm />
      </div>
    </>
  );
};

export default LandingPage;
