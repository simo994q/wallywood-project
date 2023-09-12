import style from './PostersPage.module.scss'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const PostersPage = () => {

    const filterArray = [
        'Action',
        'Dokumentar',
        'Drama',
        'Gyser',
        'Karatefilm',
        'Komedie',
        'Krigsfilm',
        'Krimi - Thriller'
    ]

    let url = 'http://localhost:4000/poster/list'

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    return (
        <>
            <div className={style.postersPageContainer}>
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
                    <div className={style.filter}>
                        <h3>Filtre</h3>
                        <h4>Genre</h4>
                        <ul>
                            {filterArray.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })}
                        </ul>
                        <h4>Prisområde</h4>
                        <div>
                            ...
                        </div>
                    </div>
                    <div className={style.posters}>
                        {data && data.map((item) => {

                            const itemLink = `/posters/${item.id}`

                            return (
                                <p key={item.id}><NavLink to={itemLink}>{item.name}</NavLink></p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}