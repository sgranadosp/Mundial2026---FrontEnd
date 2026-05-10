import NavBarPreLogIn from "../components/NavBarPreLogIn";
import EventosRecientesForm from "../components/EventosRecientesForm";

const EventosRecientes = () => {
  return (
    <>
      <NavBarPreLogIn />

      <div>
        <EventosRecientesForm />
      </div>
    </>
  );
};

export default EventosRecientes;