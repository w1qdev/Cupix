import React, { FC, useState } from 'react'
import Image from 'next/image'
import './FormItem.scss'
import { FormItemProps } from './FormItem.props'
import { FormValues } from '../Form/Form.type'


const FormItem: FC<FormItemProps> = (formData, { inputValue, valueChanger }) => {
  const [incomingData] = useState(inputValue)

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