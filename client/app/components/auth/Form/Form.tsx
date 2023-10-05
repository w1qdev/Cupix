'use client'

import React, { useState } from 'react'
import FormItem from '../FormItem/FormItem'
import { FormValues } from './Form.type'
import './Form.scss'


const Form = () => {
    const [authenticationStatus, setAuthenticationStatus] = useState(true) 

    const onSubmitData = () => {
        console.log()
    }

    const [formValues, setFormData] = useState<FormValues>({
        password: "",
        phoneNumber: ""
    })

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
                inputValue={formValues.phoneNumber}
                valueChanger={setFormData}
            />
            <FormItem 
                imageLink="./authPage/password.svg"
                imageAlt={"phone"}
                inputPlaceholder="Придумайте пароль"
                inputType='password'
                inputValue={formValues.password}
                valueChanger={setFormData}
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
                    inputValue={formValues.phoneNumber}
                    valueChanger={setFormData}
                />
                <FormItem 
                    imageLink="./authPage/password.svg"
                    imageAlt={"phone"}
                    inputPlaceholder="Введите ваш пароль"
                    inputType='password'
                    inputValue={formValues.password}
                    valueChanger={setFormData}
                />
            <button className="form__button" type="submit">Продолжить</button>
            <div className="form__info">
                Нет аккаунта? 
                <span onClick={changeFormStatus} className="sign-in">Зарегистрироваться</span>
            </div>
        </>
    )

    return (
        <form className="form" onSubmit={onSubmitData}>
            {formStatus}
        </form>
  )
}

export default Form