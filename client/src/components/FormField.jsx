import React, {useState} from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange}) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor={name} className='text-sm block font-medium text-gray-900'>
                    {labelName}
                </label>
            </div>
            <input 
                type={type} 
                id={name} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                required 
                onChange={handleChange}
                className='border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6579cd] focus:border-teal outline-none block w-full p-3'
            />
        </div>
    )
}

export default FormField