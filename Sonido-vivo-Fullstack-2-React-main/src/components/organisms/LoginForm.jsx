import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { validarNombreUsuario, validarCorreo } from "../../utils/validaciones";

function LoginForm() {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    correo: "",
  });

  const [errors, setErrors] = useState({
    nombreUsuario: "",
    correo: "",
  });

  const [touched, setTouched] = useState({
    nombreUsuario: false,
    correo: false,
  });

  const [mensaje, setMensaje] = useState({ texto: "", tipo: "" });

  function handleChange(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    setFormData({
      ...formData,
      [nombre]: valor,
    });
    
  
    if (mensaje.tipo === "danger") {
      setMensaje({ texto: "", tipo: "" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTouched({ nombreUsuario: true, correo: true });

    const errorNombre = validarNombreUsuario(formData.nombreUsuario);
    const errorCorreo = validarCorreo(formData.correo);

    setErrors({
      nombreUsuario: errorNombre,
      correo: errorCorreo
    });


    const esValido = errorNombre === "" && errorCorreo === "";

    if (esValido) {
      setMensaje({
        texto: "¡Formulario enviado correctamente!",
        tipo: "success",
      });
      console.log("Datos a enviar:", formData);
    } else {
      setMensaje({
        texto: "Por favor, corrige los campos marcados en rojo.",
        tipo: "danger",
      });
    }
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Inicio de sesión</h2>

            <Form onSubmit={handleSubmit} noValidate>
              <FormField
                id="nombreUsuario"
                name="nombreUsuario" 
                label="Nombre de usuario"
                placeholder="Pepito Perez"
                value={formData.nombreUsuario}
                onChange={handleChange}
                autoComplete="username"
                error={errors.nombreUsuario}
                isVerified={
                  touched.nombreUsuario &&
                  !errors.nombreUsuario &&
                  formData.nombreUsuario.trim() !== ""
                }
              />

              <FormField
                id="correo"
                name="correo" 
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@gmail.com"
                value={formData.correo}
                onChange={handleChange}
                autoComplete="email"
                error={errors.correo}
                isVerified={
                  touched.correo &&
                  !errors.correo &&
                  formData.correo.trim() !== ""
                }
              />

              <div className="d-grid gap-2 mb-3">
                <Button type="submit" variant="primary" text="Iniciar sesión" />
              </div>

              {mensaje.texto ? (
                <div className={`alert alert-${mensaje.tipo} mt-3`} role="alert">
                  {mensaje.texto}
                </div>
              ) : null}
            </Form>

            <p className="text-center mt-3 mb-0">
              ¿Aún no tienes una cuenta?{" "}
              <a href="registrarse.html" className="text-decoration-none">
                ¡Haz clic aquí!
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;