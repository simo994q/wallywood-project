import style from './ContainerLayout.module.scss'

export const ContainerLayout = ({children}) => {


    return (
        <div className={style.containerLayout}>
            {children}
        </div>
    )
}