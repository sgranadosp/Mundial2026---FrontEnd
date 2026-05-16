import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./RegisterForm.css";

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const textFieldSx = {
    input: { color: "#fff" },
    "& input::placeholder": { color: "#aaa" },
    label: { color: "#fefefe" },
    "& label.Mui-focused": { color: "#d6a049" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#c4c4c4" },
      "&:hover fieldset": { borderColor: "#d6a049" },
      "&.Mui-focused fieldset": { borderColor: "#d6a049" },
    },
    "& .MuiFormHelperText-root": {
      color: "#fbfbfb",
    },
  };

  return (
    <div className="register-card-container">
      <Card
        title="Crear Cuenta"
        subTitle="Ingresa tus datos para registrarte"
        className="custom-register-card"
        style={{
          border: "2px solid #d6a049",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
          backgroundColor: "#121212",
        }}
      >
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Nombre"
            variant="outlined"
            placeholder="Digite su nombre"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={textFieldSx}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            placeholder="Digite su apellido"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={textFieldSx}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            placeholder="Digite su correo"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={textFieldSx}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            placeholder="Digite su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={textFieldSx}
          />
          <TextField
            label="Confirmar Contraseña"
            type="password"
            variant="outlined"
            placeholder="Confirme su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={textFieldSx}
          />

          <div className="register-btn-container">
            <button className="btn-register" type="submit">
              Registrarse
            </button>
          </div>

          <p className="login-footer-text">
            ¿Ya tienes una cuenta?{" "}
            <a href="/logIn" className="login-link">
              Inicia sesión aquí
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;