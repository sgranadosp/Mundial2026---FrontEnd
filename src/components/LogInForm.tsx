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
          border: "2px solid #d6a049",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
          backgroundColor: "#121212",
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
            sx={{
                input: { color: "#fff" }, // texto que escribes
                "& input::placeholder": { color: "#aaa" }, // placeholder
                label: { color: "#fefefe" }, // label normal
                "& label.Mui-focused": { color: "#d6a049" }, // label activo

                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#c4c4c4" }, // borde normal
                "&:hover fieldset": { borderColor: "#d6a049" }, // hover
                "&.Mui-focused fieldset": { borderColor: "#d6a049" } // focus
                },

                "& .MuiFormHelperText-root": {
                color: "#fbfbfb" 
                }
            }}
          />
        <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            placeholder="Digite su contraseña"
            margin="dense"
            fullWidth
            helperText="* Campo obligatorio"
            sx={{
                input: { color: "#fff" }, // texto que escribes
                "& input::placeholder": { color: "#aaa" }, // placeholder
                label: { color: "#ffffff" }, // label normal
                "& label.Mui-focused": { color: "#d6a049" }, // label activo

                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#c8c8c8" }, // borde normal
                "&:hover fieldset": { borderColor: "#d6a049" }, // hover
                "&.Mui-focused fieldset": { borderColor: "#d6a049" } // focus
                },

                "& .MuiFormHelperText-root": {
                color: "#ffffff" 
                }
            }}
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