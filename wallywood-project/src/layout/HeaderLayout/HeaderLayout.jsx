import { useEffect, useState } from 'react'
import style from './HeaderLayout.module.scss'

import { NavLink } from 'react-router-dom'

export const HeaderLayout = () => {



    const linksArray = [
        { url: '/', page: 'Home' },
        { url: '/poster', page: 'Plakater' },
        { url: '/about', page: 'Om os' },
        { url: '/contact', page: 'Kontakt' },
        { url: '/login', page: 'Login' }
    ]

    const [cartItems, setCartItems] = useState()


    if (JSON.parse(localStorage.getItem('user'))) {

        const userToken = JSON.parse(localStorage.getItem('user')).access_token

        useEffect(() => {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userToken}`
                }
            };

            fetch('http://localhost:4000/cart', options)
                .then(response => response.json())
                .then(data => setCartItems(data));
        }, [])
    }


    console.log(cartItems)


    return (
        <div className={style.headerLayoutContainer}>



            <div className={style.logo}>
                <h1><NavLink to='/'>WALLYWOOD</NavLink></h1>
            </div>



            <div className={style.linksAndCart}>
                <div className={style.cart}>
                    <img src="/basket.svg" alt="" />
                    <div className={style.cartItems}>
                        {cartItems?.map((item, index) => {
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