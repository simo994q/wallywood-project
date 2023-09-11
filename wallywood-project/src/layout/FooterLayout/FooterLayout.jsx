import style from './FooterLayout.module.scss'

export const FooterLayout = () => {


    return (
        <div className={style.footerLayoutContainer}>
            footer

            
            left side
            <div>
                address
                <div></div>
                info
                <div></div>
            </div>



            icons
            <div>
                <img src="/pinterest.svg" alt="" />
                <img src="/instagram.svg" alt="" />
                <img src="/facebook.svg" alt="" />
                <img src="/twitter.svg" alt="" />
            </div>
        </div>
    )
}