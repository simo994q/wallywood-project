import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))) {

            const userToken = JSON.parse(localStorage.getItem('user')).access_token

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userToken}`
                }
            };

            fetch('http://localhost:4000/cart', options)
                .then(response => response.json())
                .then(data => setCart(data))

        } else {
            setCart([])
        }
    }, [])



    return (
        <>
            <CartContext.Provider value={{ cart, setCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}