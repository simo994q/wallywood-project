import style from './ContactPage.module.scss'
import { useForm } from "react-hook-form";
import { useState } from 'react';

export const ContactPage = () => {

    const { register, handleSubmit } = useForm();

    const setData = (data) => {
        console.log(data);
        setName(data.name)
        setEmail(data.email)
        setMessage(data.message)
    }

    const onSubmit = data => setData(data);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <div className={style.contactPageContainer}>
                <h2>Kontakt os</h2>
                <form className={style.reactFormInput} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">
                        Dit navn: <span>*</span>
                    </label>
                    <input {...register('name', {required: true})} name="name" id="name" />
                    <label htmlFor="email">
                        Din email: <span>*</span>
                    </label>
                    <input {...register('email', {required: true})} name="email" id="email" />
                    <label htmlFor="message">
                        Din besked: <span>*</span>
                    </label>
                    <textarea {...register("message", { required: true })} name="message" id="message" rows={5} />
                    <input type="submit" value="Send" className={style.sendButton} />
                </form>
            </div>
        </>
    )
}