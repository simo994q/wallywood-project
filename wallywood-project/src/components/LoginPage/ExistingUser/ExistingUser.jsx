import style from '../LoginPage.module.scss'
import { useState } from 'react'
import { SaveUser, logout } from '../../../functions/userFunctions'

export const ExistingUser = ({ children }) => {


    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const loginUser = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            body: new URLSearchParams({
                username: userEmail,
                password: userPassword
            })
        };

        fetch('http://localhost:4000/login', options)
            .then(response => response.json())
            .then(data => SaveUser(data));
    }

    if (localStorage.getItem('user')) {
        return (
            <>
                <h1>Du er logget ind som {JSON.parse(localStorage.getItem('user')).firstname}</h1>
                <input type='submit' value='Log ud' onClick={() => logout()} className={style.submitButton}/>
            </>
        )
    } else {
        return (
            <>
                <form className={style.userForm}>
                    <label htmlFor="email">
                        Email: <span>*</span>
                    </label>
                    <input type="text" name="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                    <label htmlFor="password">
                        Password: <span>*</span>
                    </label>
                    <input type="text" name="password" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                    <div className={style.formButtons}>
                        <input type="submit" className={style.submitButton} value='Log ind' onClick={(e) => loginUser(e)} />
                        {children}
                    </div>
                </form>
            </>
        )
    }


}