import style from './HeaderLayout.module.scss'

import { NavLink } from 'react-router-dom'

export const HeaderLayout = () => {


    return (
        <div className={style.headerLayoutContainer}>



            <div className={style.logo}>
                <h1>WALLYWOOD</h1>
            </div>



            <div className={style.linksAndCart}>
                <img src="/basket.svg" alt="" />
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/'>PLAKATER</NavLink></li>
                    <li><NavLink to='/'>OM OS</NavLink></li>
                    <li><NavLink to='/'>KONTAKT</NavLink></li>
                    <li><NavLink to='/'>LOGIN</NavLink></li>
                </ul>
            </div>

        </div>
    )
}