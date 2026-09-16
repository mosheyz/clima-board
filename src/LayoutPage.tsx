import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutPage;
