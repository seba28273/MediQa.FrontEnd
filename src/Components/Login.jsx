import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";

import "../css/App.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.user) {
      errors.name = "Usuario es requerido.";
    }

    if (!data.password) {
      errors.password = "Password es requerido.";
    }

    return errors;
  };

  const [state, setstate] = useState();
  const [login, setlogin] = useState([]);

  const fetchlogin = (user, pass) => {
    var myHeaders = new Headers();
    myHeaders.withCredentials = true;
    myHeaders.crossorigin = true;
    myHeaders.method = "GET";
    myHeaders.cache = "default";

    fetch(
      "http://200.115.185.55:4990/LoginAsync?user=" +
        user +
        "&password=" +
        pass,
      { myHeaders }
    )
      .then((response) => response.json())
      .then((data) => setlogin(data.data))
      .catch((error) => console.log(error));
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    fetchlogin(data.user, data.password);
    setShowMessage(true);

    console.log(login);

    // alert(login.nombreApellido);
    // alert(login.eMail);
    if (login.nombreApellido != null) {
      window.location.href = "/";
    }
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">La contraseña</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Debe contener al menos una minuscula</li>
        <li>Debe contener al menos una mayuscula</li>
        <li>Debe contener al menos un numero</li>
        <li>Debe contener al menos 8 digitos </li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="form-register">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Ingreso exitoso!</h5>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Login</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={{ user: "", password: "", accept: false }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="user"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="user"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="user"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Usuario*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Password
                          id="password"
                          {...input}
                          toggleMask
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                          header={passwordHeader}
                          footer={passwordFooter}
                        />
                        <label
                          htmlFor="password"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Password*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                     
                      <Link className="RecuperarContrasenia" to="/RecuperarContrasenia">
                        Recuperar Contraseña
                      </Link>
                    </div>
                  )}
                />
                <Button type="submit" label="Submit" className="mt-2" />
                <br />
                <br />
                Nuevo en MediQa?<Link to="/Registro">Crea tu cuenta</Link>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

//navegar a otra pagina desde un boton
//<Button label="Registrarse" id='btnregistrarse' to className="mt-2" />

//navegar a otra pagina desde un boton  con parametros
//<Button label="Registrarse" id='btnregistrarse' to={{ pathname: '/home', state: { login: login } }} className="mt-2" />
