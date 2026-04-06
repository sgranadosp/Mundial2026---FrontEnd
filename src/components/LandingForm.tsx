import USACard from "./USACard";
import "./LandingForm.css"; // ← importa el css que crearás
import MEXCard from "./MEXCard";
import CANCard from "./CANCard";

const LandingForm = () => {
  return (
    <div className="landing-cards-container">
      <USACard />
      <MEXCard />
      <CANCard />
      {/* Aquí irán después CanadaCard y MexicoCard */}
    </div>
  );
};

export default LandingForm;
