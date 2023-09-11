import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout";
import { FooterLayout } from "./FooterLayout";

export const MainLayout = () => {


    return (
        <>
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </>
    )
}