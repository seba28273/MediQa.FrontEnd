import { TabMenu } from "primereact/tabmenu";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const items = [
  { label: "Usuarios", icon: "pi pi-fw pi-user" },
  {
    label: "Ordenes",
    icon: "pi pi-fw pi-calendar", 
    items: [
      { label: "Ordenes 1 ", icon: "pi pi-fw pi-calendar",expanded:true },
      { label: "Ordenes 2", icon: "pi pi-fw pi-calendar", class: "p-tabmenuitem" },
    ],
    expanded: false,
  },
  { label: "Facturacion", icon: "pi pi-fw pi-file" },
  { label: "Configuracion", icon: "pi pi-fw pi-cog", visible: true },
];
 
function Menu() {
  //console.log({items}); <MegaMenu model={items2} />;
  return <TabMenu model={items} />;



}   

export default Menu;
