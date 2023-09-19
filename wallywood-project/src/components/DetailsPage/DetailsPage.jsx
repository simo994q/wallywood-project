import { useParams } from 'react-router-dom'
import style from './DetailsPage.module.scss'
import { useEffect, useState, useContext } from 'react'
import { Filter } from '../Filter/Filter'
import { CartContext } from '../../context/CartContext'

export const DetailsPage = () => {

    const { id } = useParams()

    let url = `http://localhost:4000/poster/details/${id}`

    const { cart, setCart } = useContext(CartContext)

    const [data, setData] = useState()

    const [posterAmount, setPosterAmount] = useState(0)

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    const updateCart = () => {
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
    }

    const addToCart = (id, quantity) => {

        if (JSON.parse(localStorage.getItem('user'))) {
            if (posterAmount !== 0) {
                const checkExists = (poster) => {
                    return poster.poster_id === Number(id)
                }

                let exists = cart.some(checkExists)

                if (!exists) {
                    const userToken = JSON.parse(localStorage.getItem('user')).access_token
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: `Bearer ${userToken}`
                        },
                        body: new URLSearchParams({
                            poster_id: id,
                            quantity: quantity
                        })
                    }
                    fetch('http://localhost:4000/cart', options)
                        .then(response => response.json())
                        .then(data => updateCart())
                } else if (exists) {
                    const userToken = JSON.parse(localStorage.getItem('user')).access_token

                    const options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: `Bearer ${userToken}`
                        },
                        body: new URLSearchParams({
                            poster_id: id,
                            quantity: quantity
                        })
                    }
                    fetch('http://localhost:4000/cart', options)
                        .then(response => response.json())
                        .then(data => updateCart())
                }
            } else {
                alert('Vælg antal')
            }
        } else {
            alert('Du er ikke logget ind')
        }
    }

    return (
        <>
            <div className={style.detailsPageContainer}>
                <div className={style.headerAndSelect}>
                    <h2>Plakater</h2>
                </div>
                <div className={style.filterAndPosters}>
                    <Filter />
                    <div className={style.poster}>
                        <img src={data?.image} alt="" />
                        <div className={style.posterDetails}>
                            <h3>{data?.name}</h3>
                            <p>{data?.description.length > 0 ? data?.description : 'Beskrivelse ikke tilgængelig'}</p>
                            <p>Størrelse: {data?.width} x {data?.height} cm</p>
                            <p>Varenummer (SKU): {data?.id}</p>
                            <h4>Kr. {data?.price},-</h4>
                            <div className={style.cartAndStock}>
                                <div>
                                    <input type="number" className={style.addAmount} defaultValue='0' onChange={(e) => setPosterAmount(e.target.value)} />
                                    <input type="submit" value="Læg i kurv" className={style.addToCart} onClick={() => addToCart(id, posterAmount)} />
                                </div>
                                <p style={{ color: data?.stock === 0 ? 'red' : 'green' }}>{data?.stock} på lager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}