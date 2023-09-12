import style from './LoginPage.module.scss'
import { useForm } from "react-hook-form";
import { useState } from 'react';

export const LoginPage = () => {

    const { register, handleSubmit } = useForm();

    const setData = (data) => {
        console.log(data);
        setUserame(data.name)
        setPassword(data.email)
    }

    const onSubmit = data => setData(data);

    const [username, setUserame] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className={style.loginPageContainer}>
                <h2>Kontakt os</h2>
                <form className={style.reactFormInput} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        Dit brugernavn: <span>*</span>
                    </label>
                    <input {...register('username', { required: true })} name="username" id="username" />
                    <label htmlFor="password">
                        Dit password: <span>*</span>
                    </label>
                    <input {...register('password', { required: true })} name="password" id="password" />
                    <input type="submit" value="Send" className={style.loginButton} />
                </form>
            </div>
        </>
    )
}