import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./LoginForm.css";

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="card-container">
      <Card
        title="Inicio de Sesión"
        subTitle="Ingresa tus credenciales para continuar"
        className="custom-login-card"
        style={{
          border: "2px solid #0800ff",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
        }}
      >
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            placeholder="Digite su correo"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            placeholder="Digite su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
          />

          <div className="btn-container">
            <button className="btn-login" type="submit">
              Ingresar
            </button>
          </div>

          <p className="register-footer-text">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="register-link">
              Regístrate aquí
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;