import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer";
import ListaUsuarios from "./components/lista_usuarios";

function Usuarios() {
    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <ListaUsuarios/>
            <Footer/>
        </div>
    );
}

export default Usuarios;