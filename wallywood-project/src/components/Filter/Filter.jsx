import style from './Filter.module.scss'
import { NavLink } from 'react-router-dom'

export const Filter = ({ children }) => {

    const filterArray = [
        { genre: 'Action', slug: 'action' },
        { genre: 'Dokumentar', slug: 'dokumentar' },
        { genre: 'Drama', slug: 'drama' },
        { genre: 'Gysere', slug: 'gysere' },
        { genre: 'Karatefilm', slug: 'karatefilm' },
        { genre: 'Komedie', slug: 'komedie' },
        { genre: 'Krigsfilm', slug: 'krigsfilm' },
        { genre: 'Krimi - Thriller', slug: 'krimi-thriller' }
    ]

    return (
        <>
            <div className={style.filter}>
                <h3>Filtre</h3>
                <h4>Genre</h4>
                <ul>
                    {filterArray.map((item, index) => {


                        return (
                            <li key={index}><NavLink to={`/poster/list/${item.slug}`} style={({ isActive }) => {
                                return {
                                    color: isActive ? '#8f320d' : '#D97852'
                                };
                            }}> {item.genre}</NavLink></li>
                        )
                    })}
                </ul>
                <h4>Prisområde</h4>
                <div className={style.priceRange}>
                    <input type="number" defaultValue='0' />
                    <span> - </span>
                    <input type="number" defaultValue='3800' />
                    <span>kr</span>
                </div>
            </div>
        </>
    )
}