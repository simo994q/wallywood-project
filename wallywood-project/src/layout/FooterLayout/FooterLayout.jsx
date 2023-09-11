import style from './FooterLayout.module.scss'

export const FooterLayout = () => {


    return (
        <div className={style.footerLayoutContainer}>
            <div className={style.addressAndIcons}>
                <div className={style.address}>
                    <h4>WALLYWOOD</h4>
                    <p>Øster Uttrupvej 1</p>
                    <p>9000 Aalborg</p>
                </div>
                <div className={style.info}>
                    <p>CVR: 12345678</p>
                    <p>MAIL: info@plakatshoppen.dk</p>
                    <p>MOBIL: +45 9812 3456</p>
                </div>
            </div>
            <div className={style.icons}>
                <img src="/pinterest.svg" alt="" />
                <img src="/instagram.svg" alt="" />
                <img src="/facebook.svg" alt="" />
                <img src="/twitter.svg" alt="" />
            </div>
        </div>
    )
}