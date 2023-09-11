import { Outlet } from "react-router-dom";
import { HeaderLayout } from "../HeaderLayout/HeaderLayout";
import { FooterLayout } from "../FooterLayout/FooterLayout";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";

import style from './MainLayout.module.scss'

export const MainLayout = () => {


    return (
        <ContainerLayout>
            <div className={style.mainLayoutContainer}>
                <HeaderLayout />
                <Outlet />
                <FooterLayout />
            </div>
        </ContainerLayout>
    )
}