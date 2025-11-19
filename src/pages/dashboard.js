import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import Kpis from "./components/kpis";
import Footer from "./components/footer";

function DashboardHome() {
    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <Kpis/>
            <Footer/>
        </div>
    );
}

export default DashboardHome;