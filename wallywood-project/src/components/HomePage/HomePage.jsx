import { useEffect, useState } from "react"
import style from './HomePage.module.scss'

export const HomePage = () => {

    const url = 'http://localhost:4000/poster/list'

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    return (
        <>
            <div className={style.homePageContainer}>
                <img src="/curtains.jpg" alt="" className={style.curtains}/>
                <h2>Sidste nyt...</h2>
                <div>
                </div>
            </div>

        </>
    )
}