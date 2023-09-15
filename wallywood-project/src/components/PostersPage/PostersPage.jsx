import style from './PostersPage.module.scss'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Filter } from '../Filter/Filter'

export const PostersPage = () => {

    const [data, setData] = useState()

    const [showItem, setShowItem] = useState(6)
    const [fetchUrl, setFetchUrl] = useState(`http://localhost:4000/poster/list?limit=`)

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
                                        <input type="button" value="Læg i kurv" />
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