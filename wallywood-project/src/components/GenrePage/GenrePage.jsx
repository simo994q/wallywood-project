import style from './GenrePage.module.scss'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Filter } from '../Filter/Filter'

export const GenrePage = () => {

    const { genre } = useParams()

    const [url, setUrl] = useState(`http://localhost:4000/poster/list/${genre}`)

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    const setSort = (sort) => {
        switch (sort) {
            case 'low':
                setUrl(`http://localhost:4000/poster/list/${genre}?sort_key=price&sort_direction=asc`)
                // url = 'http://localhost:4000/poster/list?sort_key=price&sort_direction=asc'
                break;
            case 'high':
                // url = 'http://localhost:4000/poster/list?sort_key=price&sort_direction=desc'
                setUrl(`http://localhost:4000/poster/list/${genre}?sort_key=price&sort_direction=desc`)
                break;
            case 'title':
                // url = 'http://localhost:4000/poster/list?sort_key=name'
                setUrl(`http://localhost:4000/poster/list/${genre}?sort_key=name`)
                break;
        }
    }

    return (
        <>
            <div className={style.genrePageContainer}>
                <div className={style.headerAndSelect}>
                    <h2>Plakater</h2>
                    <select>
                        <option value="" disabled selected hidden>Sortér</option>
                        <option value="">Pris - stigende</option>
                        <option value="">Pris - faldene</option>
                        <option value="">Titel</option>
                    </select>
                </div>
                <div className={style.filterAndPosters}>
                <Filter />
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
            </div>
        </div>
        </>
    )
}