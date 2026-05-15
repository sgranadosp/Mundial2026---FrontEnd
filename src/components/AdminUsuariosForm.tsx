import { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import "./AdminUsuariosForm.css";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: "USER" | "ADMIN";
  estado: "Activo" | "Bloqueado";
}

const usuariosIniciales: Usuario[] = [
  {
    id: 42,
    nombre: "Juan Díaz",
    email: "juan.diaz@gmail.com",
    rol: "USER",
    estado: "Activo",
  },
  {
    id: 41,
    nombre: "Sofía Rodríguez",
    email: "sofia.r@gmail.com",
    rol: "USER",
    estado: "Activo",
  },
  {
    id: 38,
    nombre: "Carlos Mora",
    email: "carlos.m@gmail.com",
    rol: "ADMIN",
    estado: "Activo",
  },
  {
    id: 35,
    nombre: "Pedro Sánchez",
    email: "pedro.s@gmail.com",
    rol: "USER",
    estado: "Bloqueado",
  },
  {
    id: 30,
    nombre: "Laura Vargas",
    email: "laura.v@gmail.com",
    rol: "USER",
    estado: "Activo",
  },
];

const AdminUsuariosForm = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [confirmando, setConfirmando] = useState<{
    accion: string;
    id: number;
  } | null>(null);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleBloquear = (id: number) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, estado: "Bloqueado" } : u)),
    );
    setConfirmando(null);
    showToast("Usuario bloqueado correctamente.");
  };

  const handleDesbloquear = (id: number) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, estado: "Activo" } : u)),
    );
    setConfirmando(null);
    showToast("Usuario desbloqueado correctamente.");
  };

  const handleEliminar = (id: number) => {
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
    setConfirmando(null);
    showToast("Usuario eliminado del sistema.");
  };

  const handleRol = (id: number, nuevoRol: "USER" | "ADMIN") => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, rol: nuevoRol } : u)),
    );
    showToast("Rol actualizado correctamente.");
  };

  const filtrados = usuarios.filter(
    (u) =>
      u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      u.email.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const totalActivos = usuarios.filter((u) => u.estado === "Activo").length;
  const totalBloqueados = usuarios.filter(
    (u) => u.estado === "Bloqueado",
  ).length;
  const totalAdmins = usuarios.filter((u) => u.rol === "ADMIN").length;

  return (
    <div className="admin-container">
      <SidebarAdmin />

      <section className="admin-content">
        {/* TOAST */}
        {toast && <div className="admin-toast">{toast}</div>}

        {/* HEADER */}
        <div className="admin-header">
          <div>
            <h2>Gestión de usuarios</h2>
            <p>Administración de cuentas y roles del sistema</p>
          </div>
        </div>

        {/* STATS */}
        <div
          className="admin-stat-cards"
          style={{ gridTemplateColumns: "repeat(3,1fr)" }}
        >
          <div className="admin-stat-card">
            <div className="stat-label">Total usuarios</div>
            <div className="stat-value">{usuarios.length}</div>
          </div>
          <div className="admin-stat-card golden">
            <div className="stat-label">Bloqueados</div>
            <div className="stat-value">{totalBloqueados}</div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-label">Administradores</div>
            <div className="stat-value">{totalAdmins}</div>
          </div>
        </div>

        {/* TABLA */}
        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div className="usuarios-title-row">
            <div className="admin-card-title" style={{ marginBottom: 0 }}>
              Usuarios registrados
            </div>
            <input
              className="usuarios-search"
              placeholder="Buscar por nombre o email..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="usuarios-table">
            <div className="usuarios-thead">
              <span>ID</span>
              <span>Nombre</span>
              <span>Email</span>
              <span>Rol</span>
              <span>Estado</span>
              <span>Acciones</span>
            </div>

            {filtrados.length === 0 ? (
              <div className="usuarios-empty">No se encontraron usuarios.</div>
            ) : (
              filtrados.map((u) => (
                <div
                  className={`usuarios-row ${u.estado === "Bloqueado" ? "row-bloqueado" : ""}`}
                  key={u.id}
                >
                  <span className="col-id">#{u.id}</span>
                  <span className="col-nombre">{u.nombre}</span>
                  <span className="col-email">{u.email}</span>
                  <span className="col-rol">
                    <select
                      className={`rol-select ${u.rol === "ADMIN" ? "rol-admin" : "rol-user"}`}
                      value={u.rol}
                      onChange={(e) =>
                        handleRol(u.id, e.target.value as "USER" | "ADMIN")
                      }
                    >
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </span>
                  <span className="col-estado">
                    <span
                      className={`estado-badge ${u.estado === "Activo" ? "estado-activo" : "estado-bloqueado"}`}
                    >
                      {u.estado}
                    </span>
                  </span>
                  <span className="col-acciones">
                    {u.estado === "Activo" ? (
                      <button
                        className="btn-bloquear"
                        onClick={() =>
                          setConfirmando({ accion: "bloquear", id: u.id })
                        }
                      >
                        Bloquear
                      </button>
                    ) : (
                      <button
                        className="btn-desbloquear"
                        onClick={() => handleDesbloquear(u.id)}
                      >
                        Desbloquear
                      </button>
                    )}
                    <button
                      className="btn-eliminar"
                      onClick={() =>
                        setConfirmando({ accion: "eliminar", id: u.id })
                      }
                    >
                      Eliminar
                    </button>
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* MODAL CONFIRMACIÓN */}
        {confirmando && (
          <div className="modal-overlay">
            <div className="modal-box">
              <p>
                ¿Confirmas{" "}
                {confirmando.accion === "bloquear" ? "bloquear" : "eliminar"} al
                usuario #{confirmando.id}?
              </p>
              {confirmando.accion === "eliminar" && (
                <p className="modal-warning">
                  Esta acción no se puede deshacer.
                </p>
              )}
              <div className="modal-actions">
                <button
                  className="btn-cancelar"
                  onClick={() => setConfirmando(null)}
                >
                  Cancelar
                </button>
                <button
                  className="btn-confirmar-peligro"
                  onClick={() =>
                    confirmando.accion === "bloquear"
                      ? handleBloquear(confirmando.id)
                      : handleEliminar(confirmando.id)
                  }
                >
                  {confirmando.accion === "bloquear"
                    ? "Sí, bloquear"
                    : "Sí, eliminar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminUsuariosForm;
