'use client'

import React from 'react'
import Image from 'next/image'
import './FormItem.scss'


interface IFormData {
    // Image
    imageLink: string,
    imageWidth?: number,
    imageHeight?: number,
    imageAlt: string,
    // Input
    inputPlaceholder: string
    inputValue?: string | number,
    inputType: string

}

const FormItem = (formData: IFormData) => {
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