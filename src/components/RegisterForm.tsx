import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./RegisterForm.css";

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="register-card-container">
      <Card
        title="Crear Cuenta"
        subTitle="Ingresa tus datos para registrarte"
        className="custom-register-card"
        style={{
          border: "2px solid #673AB7",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
        }}
      >
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Nombre"
            variant="outlined"
            color="secondary"
            placeholder="Digite su nombre"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />
          <TextField
            label="Apellido"
            variant="outlined"
            color="secondary"
            placeholder="Digite su apellido"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            color="secondary"
            placeholder="Digite su correo"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            color="secondary"
            placeholder="Digite su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />
          <TextField
            label="Confirmar Contraseña"
            type="password"
            variant="outlined"
            color="secondary"
            placeholder="Confirme su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
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
