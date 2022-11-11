import "./css/App.css";
import Home from "./Home";
import Registro from "../src/Registro";
import Usuarios from "../src/Usuarios";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Route, Routes  } from "react-router-dom";
import { BrowserRouter as Router, Link  } from 'react-router-dom';
import Login from "./Components/Login";
//function App() {
  //return <Menu/>;
  export default function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact  element={<Home/>} />
          <Route path="/Registro" exact  element={<Registro/>} />
          <Route path="/Usuarios" exact  element={<Usuarios/>} />
          <Route path="/Login" exact  element={<Login/>} />
        </Routes>
      </Router>
    );
  }
  
  function Navbar() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="Registro">Registro</Link>
        <Link to="Usuarios">Usuarios</Link>
        <Link to="Login">Login</Link>
      </nav>
    )
  };




//export default App;
