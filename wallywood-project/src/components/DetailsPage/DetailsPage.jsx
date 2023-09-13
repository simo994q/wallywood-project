import { useParams } from 'react-router-dom'
import style from './DetailsPage.module.scss'
import { useEffect, useState } from 'react'

export const DetailsPage = () => {

    const { id } = useParams()

    let url = `http://localhost:4000/poster/details/${id}`

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

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

    return (
        <>
            <div className={style.detailsPageContainer}>
                <div className={style.headerAndSelect}>
                    <h2>Plakater</h2>
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
                    </div>
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
                                    <input type="number" className={style.addAmount} defaultValue='0'/>
                                    <input type="submit" value="Læg i kurv" className={style.addToCart} />
                                </div>
                                <p style={{color: data?.stock === 0 ? 'red' : 'green'}}>{data?.stock} på lager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}