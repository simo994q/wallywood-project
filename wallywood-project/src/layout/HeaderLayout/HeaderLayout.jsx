import style from './HeaderLayout.module.scss'

import { NavLink } from 'react-router-dom'

export const HeaderLayout = () => {

    const linksArray = [
        { url: '/', page: 'Home'},
        { url: '/fefe', page: 'Plakater'},
        { url: '/dewd', page: 'Om os'},
        { url: '/dewf', page: 'Kontakt'},
        { url: '/dewf', page: 'Login'}
    ]


    return (
        <div className={style.headerLayoutContainer}>



            <div className={style.logo}>
                <h1>WALLYWOOD</h1>
            </div>



            <div className={style.linksAndCart}>
                <img src="/basket.svg" alt="" />
                <ul>
                {linksArray.map((item, index) => {
                    return (
                        <li key={index}><NavLink to={item.url} className={style.navbarLink} style={({ isActive }) => {
                            return {
                                color: isActive ? '#D97852' : '#524641'
                            };
                        }}>{item.page}</NavLink></li>
                    )
                })}
                </ul>
            </div>

        </div>
    )
}