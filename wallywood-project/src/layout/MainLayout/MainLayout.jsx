import { Outlet } from "react-router-dom";
import { HeaderLayout } from "../HeaderLayout/HeaderLayout";
import { FooterLayout } from "../FooterLayout/FooterLayout";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";

export const MainLayout = () => {


    return (
        <ContainerLayout>
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </ContainerLayout>
    )
}