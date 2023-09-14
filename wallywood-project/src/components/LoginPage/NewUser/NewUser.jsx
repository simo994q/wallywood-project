import { useState } from 'react'
import style from '../LoginPage.module.scss'
import { SaveUser } from '../../../functions/userFunctions'

export const NewUser = ({ children }) => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmed, setUserConfirmed] = useState('')


    const createUser = (e) => {
        e.preventDefault()

        if (userEmail.length > 3 && userPassword.length > 3 && userPassword === userConfirmed) {

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    firstname: 'lars',
                    lastname: 'larsen',
                    email: userEmail,
                    password: userPassword,
                    org_id: 1,
                    is_active: 1
                })
            };

            fetch('http://localhost:4000/users', options)
                .then(response => response.json())
                .then(data => SaveUser(data));
        }
    }

    if (localStorage.getItem('user')) {
        return (
            <>
                <h1>duer er erlogget ind</h1>
                <button onClick={() => logout()}>lgodyudunfew</button>
            </>
        )
    } else {
        return (
            <>
                <form className={style.userForm}>
                    <label htmlFor="email">
                        Email: <span>*</span>
                    </label>
                    <input type="text" name="email" id='email' onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                    <label htmlFor="password">
                        Password: <span>*</span>
                    </label>
                    <input type="text" name="password" id='password' onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                    <label htmlFor="confirmPassword">
                        Confirm password: <span>*</span>
                    </label>
                    <input type="text" name="confirmPassword" id='confirmPassword' onChange={(e) => setUserConfirmed(e.target.value)} value={userConfirmed} />
                    <div className={style.formButtons}>
                        <input type="submit" className={style.submitButton} value='Opret' onClick={(e) => createUser(e)} />
                        {children}
                    </div>
                </form>
            </>
        )
    }
}