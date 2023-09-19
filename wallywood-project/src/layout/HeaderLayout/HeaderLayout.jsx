import { useContext, useEffect, useState } from 'react'
import style from './HeaderLayout.module.scss'
import { CartContext } from '../../context/CartContext'

import { NavLink } from 'react-router-dom'

export const HeaderLayout = () => {

    const { cart, setCart } = useContext(CartContext)

    const linksArray = [
        { url: '/', page: 'Home' },
        { url: '/poster', page: 'Plakater' },
        { url: '/about', page: 'Om os' },
        { url: '/contact', page: 'Kontakt' },
        { url: '/login', page: 'Login' }
    ]

    const [showCart, setShowCart] = useState(false)

    return (
        <div className={style.headerLayoutContainer}>



            <div className={style.logo}>
                <h1><NavLink to='/'>WALLYWOOD</NavLink></h1>
            </div>



            <div className={style.linksAndCart}>
                <div className={style.cart} onClick={() => {
                    if (showCart) {
                        setShowCart(false)
                    } else if (!showCart) {
                        setShowCart(true)
                    }
                }}>
                    <img src="/basket.svg" alt="" />
                    <div className={style.cartItems} style={{display: showCart ? 'flex' : 'none'}}>
                        {cart?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.poster.image} alt="" />
                                    <h5>{item.poster.name}</h5>
                                    <p>{item.quantity}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
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