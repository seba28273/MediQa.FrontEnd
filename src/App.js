import React from "react";
import "./css/App.css";
import Home from "./Home";
import Registro from "../src/Registro";
//import Usuarios from "../src/Usuarios";
import UsuariosSuite from "./Components/UsuariosSuite";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
//import { BrowserRouter as Router, Link  } from 'react-router-dom';
import Login from "./Components/Login";
import LoginSuite from "./Components/LoginSuite";
import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import UserIcon from "@rsuite/icons/legacy/AddressBook";
import RegisterIcon from "@rsuite/icons/legacy/Registered";
import LoginIcon from "@rsuite/icons/legacy/Key";
//import Link from 'next/link';
import NavLink from "./Components/NavLink";

//function App() {
//return <Menu/>;
const App = () => {
  const [active, setActive] = React.useState("home");
  return (
    <div className="subtle">
      <Router>
        <Navbar appearance="subtle" />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Registro" exact element={<Registro />} />
          <Route path="/Usuarios" exact element={<UsuariosSuite />} />
          <Route path="/Login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

const Navbar = ({ active, onSelect, ...props }) => {
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="home" href="/" icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Menu title="Configuracion">
        <Nav.Item as={NavLink} href="/Registro" icon={<RegisterIcon />}>
          Registro
        </Nav.Item>
        <Nav.Item as={NavLink} href="/Usuarios" icon={<UserIcon />}>
          Usuarios
        </Nav.Item>
      </Nav.Menu>

      <Nav.Item as={NavLink} href="/Login" icon={<UserIcon />}>
        Login
      </Nav.Item>
    </Nav>
  );
};

export default App;
