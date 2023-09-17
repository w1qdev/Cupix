import React, { FC } from 'react'
import Image from 'next/image'
import './FormItem.scss'
import { FormItemProps } from './FormItem.props'


const FormItem: FC<FormItemProps> = (formData) => {
  return (
    <div className="form__item">
        <Image 
            src={formData.imageLink} 
            width={formData.imageWidth || 30} 
            height={formData.imageHeight || 30}
            alt={formData.imageAlt}
            className='form__item-img' 
        />
        <input 
            className="form__item-input" 
            placeholder={formData.inputPlaceholder} 
            type={formData.inputType}
        />
    </div>
  )
}

export default FormItem