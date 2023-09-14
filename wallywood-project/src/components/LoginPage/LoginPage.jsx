import { useState } from 'react'
import style from './LoginPage.module.scss'
import { ExistingUser } from './ExistingUser/ExistingUser'
import { NewUser } from './NewUser/NewUser'

export const LoginPage = () => {

    const [changeForm, setChangeForm] = useState('login')

    if (changeForm === 'login') {
        return (
            <>
                <div className={style.loginPageContainer}>
                    <ExistingUser>
                        <input type='button' value='Opret bruger her' onClick={() => setChangeForm('create')} className={style.submitButton} />
                    </ExistingUser>
                </div>
            </>
        )
    } else if (changeForm === 'create') {
        return (
            <>
                <div className={style.loginPageContainer}>
                    <NewUser>
                        <input type='button' value='Log ind her' onClick={() => setChangeForm('login')} className={style.submitButton} />
                    </NewUser>
                </div>
            </>
        )
    }


}