import { useState } from 'react'
import style from '../LoginPage.module.scss'
import { SaveUser } from '../../../functions/userFunctions'

export const NewUser = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmed, setUserConfirmed] = useState('')


    const createUser = (e) => {
        e.preventDefault()

        if (userName.length > 1 && userLastName.length > 1 && userEmail.length > 3 && userPassword.length > 3 && userPassword === userConfirmed) {

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    firstname: userName,
                    lastname: userLastName,
                    email: userEmail,
                    password: userPassword,
                    org_id: 1,
                    is_active: 1
                })
            };

            fetch('http://localhost:4000/users', options)
                .then(response => response.json())
                .then(data => loginUser());
        }

        
    const loginUser = (e) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: userEmail,
                password: userPassword
            })
        };

        fetch('http://localhost:4000/login', options)
            .then(response => response.json())
            .then(data => SaveUser(data));
    }
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
                    <label htmlFor="name">
                        First name: <span>*</span>
                    </label>
                    <input type="text" name="name" id='name' onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <label htmlFor="lastname">
                        Last name: <span>*</span>
                    </label>
                    <input type="text" name="lastname" id='lastname' onChange={(e) => setUserLastName(e.target.value)} value={userLastName} />
                    <label htmlFor="email">
                        Email: <span>*</span>
                    </label>
                    <input type="text" name="email" id='email' onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                    <label htmlFor="password">
                        Password: <span>*</span>
                    </label>
                    <input type="password" name="password" id='password' onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                    <label htmlFor="confirmPassword">
                        Confirm password: <span>*</span>
                    </label>
                    <input type="password" name="confirmPassword" id='confirmPassword' onChange={(e) => setUserConfirmed(e.target.value)} value={userConfirmed} />
                    <div className={style.formButtons}>
                        <input type="submit" className={style.submitButton} value='Opret' onClick={(e) => createUser(e)} />
                        {children}
                    </div>
                </form>
            </>
        )
    }
}