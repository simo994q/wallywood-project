import style from './PostersPage.module.scss'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Filter } from '../Filter/Filter'
import { CartContext } from '../../context/CartContext'

export const PostersPage = () => {

    const { cart, setCart } = useContext(CartContext)

    const [data, setData] = useState()

    const [showItem, setShowItem] = useState(6)
    const [fetchUrl, setFetchUrl] = useState(`http://localhost:4000/poster/list?limit=`)

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

            const checkExists = (poster) => {
                return poster.poster_id === id
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
            alert('Du er ikke logget ind')
        }
    }





    useEffect(() => {
        useFetch(fetchUrl)
    }, [showItem, fetchUrl])

    const useFetch = (url) => {
        fetch(url + showItem).then(res => res.json()).then(data => setData(data))
    }

    const setSort = (sort) => {
        switch (sort) {
            case 'low':
                setShowItem(showItem)
                setFetchUrl(`http://localhost:4000/poster/list?sort_key=price&sort_direction=asc&limit=`)
                break;
            case 'high':
                setShowItem(showItem)
                setFetchUrl(`http://localhost:4000/poster/list?sort_key=price&sort_direction=desc&limit=`)
                break;
            case 'title':
                setShowItem(showItem)
                setFetchUrl(`http://localhost:4000/poster/list?sort_key=name&limit=`)
                break;
        }
    }

    return (
        <>
            <div className={style.postersPageContainer}>
                <div className={style.headerAndSelect}>
                    <h2>Plakater</h2>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="" disabled selected hidden>Sortér</option>
                        <option value="low">Pris - stigende</option>
                        <option value="high">Pris - faldene</option>
                        <option value="title">Titel</option>
                    </select>
                </div>
                <div className={style.filterAndPosters}>
                    <Filter />
                    <div className={style.postersContainer}>
                        <div className={style.posters}>
                            {data && data.map((item) => {

                                const itemLink = `/poster/${item.id}`

                                return (
                                    <div key={item.id}>
                                        <NavLink to={itemLink}><img src={item.image} alt={item.name} /></NavLink>
                                        <h3><NavLink to={itemLink}>{item.name}</NavLink></h3>
                                        <p>Kr. {item.price},-</p>
                                        <input type="button" value="Læg i kurv" onClick={() => addToCart(item.id, 1)} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.showMoreContainer}>
                            <input type="button" value="Vis flere" onClick={() => setShowItem(showItem + 6)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}