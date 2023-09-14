import { useEffect, useState } from "react"
import style from './HomePage.module.scss'

export const HomePage = () => {

    const url = 'http://localhost:4000/poster/list?sort_key=id&limit=2'

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    return (
        <>
            <div className={style.homePageContainer}>
                <img src="/curtains.jpg" alt="" className={style.curtains} />
                <h2>Sidste nyt...</h2>
                <div className={style.news}>
                    {data && data.map((item) => {
                        return (
                            <div className={style.poster} key={item.id}>
                                <img src={item.image} alt="" />
                                <div className={style.posterDetails}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description.length > 0 ? item.description : 'Beskrivelse ikke tilgængelig'}</p>
                                    <p>Genre: {item.genres[0].title}</p>
                                    <div className={style.cartAndStock}>
                                        <div>
                                            <input type="submit" value="Læs mere" className={style.readMore} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}