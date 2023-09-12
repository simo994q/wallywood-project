import style from './PostersPage.module.scss'

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

    return (
        <>
            <div className={style.postersPageContainer}>
                <div className={style.headerAndSelect}>
                    <h2>Plakater</h2>
                    <select>
                        <option value="Sortér" disabled selected hidden>Sortér</option>
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
                        posters
                    </div>
                </div>
            </div>
        </>
    )
}