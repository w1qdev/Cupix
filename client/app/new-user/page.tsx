import React from 'react'
import FinishUserCreateButton from '../components/new-user/finishButton/FinishUserCreateButton'
import Image from 'next/image'
import './NewUser.scss'


const NewUser = () => {
  return (
    <div className="new-user">

        <div className="new-user__logo">CUPIX</div>

        <div className="new-user__inner">
            <div className="new-user__inner__title">Давайте познакомимся!</div>
            
            <form className="new-user__inner__form">
                <div className="form__body">
                    <div className="form__avatar">
                        <div className="form__avatar-circle">
                            <div className="circle__text">Изменить аватар</div>
                            <Image src="./newUserPage/avatar-img.svg" width={30} height={30} alt='change avatar' />
                        </div>
                    </div>
                    <div className="form__user-info">
                        
                    </div>
                </div>
                

                <FinishUserCreateButton />
            </form>

        </div>
        
        
    </div>
  )
}

export default NewUser