import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(null)

    return (
        <>
            <CartContext.Provider value={{cart, setCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}