import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {

        setInputValue(e.target.value)
        console.log("handleinputchange llamado")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats] )
            setInputValue('')
        }
        //setCategories( cats => [...cats, inputValue] )
        //console.log('submit hecho')
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}