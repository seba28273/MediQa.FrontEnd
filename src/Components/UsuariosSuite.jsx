import React, { useEffect, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Table, Pagination } from "rsuite";
import "../css/App.css";
const { Column, HeaderCell, Cell } = Table;

export default function UsuariosSuite() {
  const [state, setstate] = useState();
  const [usuarios, setusuarios] = useState([]);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return usuarios.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return usuarios;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };
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

    const [limit, setLimit] = React.useState(2);
    const [page, setPage] = React.useState(1);

    const handleChangeLimit = (dataKey) => {
      setPage(1);
      setLimit(dataKey);
    };
   
    return (
      <div>
        <Table className="tablausuarios"
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          loading={loading}
          height={420}
          data={getData()}
        >
          <Column width={500} fixed sortable >
            <HeaderCell>Nombre y Apellido</HeaderCell>
            <Cell dataKey="nombreApellido" />
          </Column>

          <Column width={250}>
            <HeaderCell>Correo Electronico</HeaderCell>
            <Cell dataKey="eMail" />
          </Column>

          <Column width={250} sortable>
            <HeaderCell>Usuario</HeaderCell>
            <Cell dataKey="user" />
          </Column>
        </Table>
        <div style={{ padding: 20 }}>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={["total", "-", "limit", "|", "pager", "skip"]}
            total={usuarios.length}
            limitOptions={[2, 5, 7]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
    );
}
//export default UsuariosSuite;
