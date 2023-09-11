import style from './HeaderLayout.module.scss'

export const HeaderLayout = () => {


    return (
        <div className={style.headerLayoutContainer}>



            <div className={style.logo}>
                <h1>WALLYWOOD</h1>
            </div>



            <div className={style.linksAndCart}>
                <img src="/basket.svg" alt="" />
                <ul>
                    <li>w</li>
                    <li>e</li>
                    <li>t</li>
                    <li>e</li>
                    <li>w</li>
                </ul>
            </div>

        </div>
    )
}