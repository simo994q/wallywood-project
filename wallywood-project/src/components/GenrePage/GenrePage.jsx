import style from './GenrePage.module.scss'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { SortAndFilter } from '../SortAndFilter/SortAndFilter'

export const GenrePage = () => {

    const { genre } = useParams()

    let url = `http://localhost:4000/poster/list/${genre}`

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    return (
        <>
            <SortAndFilter>
                <div className={style.posters}>
                    {data && data.map((item) => {

                        const itemLink = `/poster/${item.id}`

                        return (
                            <p key={item.id}><NavLink to={itemLink}>{item.name}</NavLink></p>
                        )
                    })}
                </div>
            </SortAndFilter>
        </>
    )
}