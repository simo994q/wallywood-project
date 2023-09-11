import style from './AboutPage.module.scss'

export const AboutPage = () => {


    return (
        <>
            <div className={style.aboutPageContainer}>
                <h2>Om os</h2>
                <div className={style.aboutGrid}>
                    <div className={style.aboutText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione voluptatibus impedit? Fuga doloribus saepe, commodi vitae quas eveniet sapiente sit minima blanditiis odit quos voluptatem suscipit atque incidunt beatae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum itaque numquam magni error a consectetur esse. Sapiente fugiat harum cupiditate ipsum sint! Nulla aliquid libero ad vel consequatur illo.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, laboriosam nemo illo, aspernatur praesentium aperiam tempora vitae esse odio impedit voluptate cupiditate minima? Fuga, delectus veritatis consequatur autem sit placeat?</p>
                    </div>
                    <img src="/star.avif" alt="" />
                </div>
            </div>
        </>
    )
}