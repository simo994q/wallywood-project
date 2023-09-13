import { useParams } from 'react-router-dom'
import style from './DetailsPage.module.scss'
import { useEffect, useState } from 'react'
import { SortAndFilter } from '../SortAndFilter/SortAndFilter'

export const DetailsPage = () => {

    const { id } = useParams()

    let url = `http://localhost:4000/poster/details/${id}`

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url])

    return (
        <>
            <SortAndFilter>
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
                                <input type="number" className={style.addAmount} defaultValue='0' />
                                <input type="submit" value="Læg i kurv" className={style.addToCart} />
                            </div>
                            <p style={{ color: data?.stock === 0 ? 'red' : 'green' }}>{data?.stock} på lager</p>
                        </div>
                    </div>
                </div>
            </SortAndFilter>
        </>
    )
}