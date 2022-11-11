
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import React, { useEffect, useState } from "react";

function Usuarios() {
  const [state, setstate] = useState();
  const [usuarios, setusuarios] = useState([]);
  const fetchUsuarios = () => {
    var myHeaders = new Headers();
    myHeaders.withCredentials = true;
    myHeaders.crossorigin = true;
    myHeaders.method = "GET";
    myHeaders.cache = "default";

    fetch("http://200.115.185.55:4990/GetAllLoginUsuarioAsync", { myHeaders })
      .then((response) => response.json())
      .then((data) => setusuarios(data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchUsuarios();
  }, []);
  return (
    <div className="App">
      
    
      <div className="datatable-doc-demo">
      <div className="card">
        <DataTable value={usuarios} className="p-datatable-customers">
          <Column field="nombreApellido" header="Nombre y Apellido"></Column>
          <Column field="eMail" header="Correo Electronico"></Column>
          <Column field="user" header="Usuario"></Column>
        </DataTable>
      </div>{" "}
    </div>
    </div>
  );
}

export default Usuarios;