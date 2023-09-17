import React from 'react'
import Form from '../components/auth/Form/Form'

import './Auth.scss'


const Auth = () => {

    return (
        <div className='auth-page'>
            <div className="decor__circle orange"></div>
            <div className="decor__circle green"></div>
            <div className="decor__circle purple"></div>

            <div className="auth-page__inner">
                <div className="auth-page__inner__title">CUPIX</div>
                <div className="auth-page__inner__form">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Auth