'use client'

import React from 'react'
import Image from 'next/image'


interface IFormData {
    // Image
    imageLink: string,
    imageWidth: number,
    imageHeight: number,
    imageAlt: string,
    // Input
    InputPlaceholder: string
    InputValue: string | number,

}

const FormItem = (formData: IFormData) => {
  return (
    <div className="form__item">
        <Image 
            src={formData.imageLink} 
            width={formData.imageWidth} 
            height={formData.imageHeight}
            alt={formData.imageAlt}
            className='form__item-img' 
        />
        <input 
            className="form__item-input" 
            placeholder={formData.InputPlaceholder} 
        />
    </div>
  )
}

export default FormItem