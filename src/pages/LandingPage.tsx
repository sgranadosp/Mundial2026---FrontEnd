import LandingForm from "../components/LandingForm";
import NavBarPreLogIn from "../components/NavBarPreLogIn";

const LandingPage = () => {
  return (
    <>
      <NavBarPreLogIn />
      {/* paddingTop compensa la altura del navbar fixed (120px) + 50px extra que pides */}
      <div style={{ paddingTop: "170px" }}>
        <LandingForm />
      </div>
    </>
  );
};

export default LandingPage;
