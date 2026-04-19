import Countdown from "../components/CountDown";
import LandingForm from "../components/LandingForm";
import NavBarPreLogIn from "../components/NavBarPreLogIn";

const LandingPage = () => {
  return (
    <>
      <NavBarPreLogIn />
      <div style={{ paddingTop: "60px" }}>
        <Countdown />
      </div>
      {/* paddingTop compensa la altura del navbar fixed (120px) + 50px extra que pides */}
      <div style={{ paddingTop: "100px" }}>
        <LandingForm />
      </div>
    </>
  );
};

export default LandingPage;
