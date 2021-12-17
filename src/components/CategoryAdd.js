import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const CategoryAdd = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( categorias => [inputValue, ...categorias]);
            setinputValue('');
        }
        
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange = {handleInputChange}
            >
                
            </input>
            </form>
        </>
    )
}
CategoryAdd.propType = {
    setCategories: PropTypes.func.isRequired
};
