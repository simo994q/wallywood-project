import style from './SortAndFilter.module.scss'
import { NavLink } from 'react-router-dom'

export const SortAndFilter = ({children}) => {

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
                                    <li key={index}><NavLink to={`/poster/list/${item.slug}`} style={({ isActive }) => {
                                        return {
                                            color: isActive ? 'red' : '#524641'
                                        };
                                    }}> {item.genre}</NavLink></li>
                                )
                            })}
                        </ul>
                        <h4>Prisområde</h4>
                        <div>
                            ...
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}