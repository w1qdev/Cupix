'use client'

import React, { useState } from 'react'
import FormItem from '../FormItem/FormItem'
import './Form.scss'


const Form = () => {
    const [authenticationStatus, setAuthenticationStatus] = useState(true) 

    const changeFormStatus = () => {
        setAuthenticationStatus(prevAuthStatus => !prevAuthStatus)
    }

    

    const formStatus = authenticationStatus ? (
        
        <>
            <div className="form__title">Регистрация</div>
            <FormItem 
                imageLink="./authPage/phone.svg"
                imageAlt={"phone"}
                inputPlaceholder="Номер телефона"
                inputType='number'
            />
            <FormItem 
                imageLink="./authPage/password.svg"
                imageAlt={"phone"}
                inputPlaceholder="Придумайте пароль"
                inputType='password'
            />
            <FormItem 
                imageLink="./authPage/password.svg"
                imageAlt={"phone"}
                inputPlaceholder="Повторите пароль"
                inputType='password'
            />
            <button className="form__button" type="submit">Продолжить</button>
            <div className="form__info">
                Уже есть аккаунт? 
                <span onClick={changeFormStatus} className="sign-in">Войти</span>
            </div>
        </>
    ) : (
        <>
            <div className="form__title">Войти</div>
                <FormItem 
                    imageLink="./authPage/phone.svg"
                    imageAlt={"phone"}
                    inputPlaceholder="Номер телефона"
                    inputType='number'
                />
                <FormItem 
                    imageLink="./authPage/password.svg"
                    imageAlt={"phone"}
                    inputPlaceholder="Введите ваш пароль"
                    inputType='password'
                />
            <button className="form__button" type="submit">Продолжить</button>
            <div className="form__info">
                Нет аккаунта? 
                <span onClick={changeFormStatus} className="sign-in">Зарегистрироваться</span>
            </div>
        </>
    )

    return (
        <form className="form">
            {formStatus}
        </form>
  )
}

export default Form