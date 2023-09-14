import style from '../LoginPage.module.scss'

export const NewUser = ({ children }) => {

    return (
        <>
            <form className={style.userForm}>
                <label htmlFor="email">
                    Email: <span>*</span>
                </label>
                <input type="text" name="email" />
                <label htmlFor="password">
                    Password: <span>*</span>
                </label>
                <input type="text" name="password" />
                <label htmlFor="password">
                    Confirm password: <span>*</span>
                </label>
                <input type="text" name="password" />
                <div className={style.formButtons}>
                    <input type="submit" className={style.submitButton} value='Opret'/>
                    {children}
                </div>
            </form>
        </>
    )
}