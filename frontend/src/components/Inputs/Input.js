import React from 'react'

const Input = ({placeholder, valor}) => {
    
    return (
        <input type="text" placeholder={placeholder} defaultValue={valor} className="form-control m-1"/>
    )
}

export default Input
