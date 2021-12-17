import React, {useState} from 'react';
import { CategoryAdd } from './CategoryAdd';
import { GifGrid } from './GifGrid';

const GifExpertApp = ()=>{
     //const categorias = ['BMW','AUDI','MERCEDES BENZ'];
    const [categories, setCategories] = useState([]);
    
    return (
       <>
            <h2>GifExpertApp</h2>  
            <hr></hr>
            <CategoryAdd setCategories = { setCategories }/>
            {
                <ol>
                    {
                        categories.map(category => {
                            return <GifGrid 
                                key = {category}
                                category= { category }
                            />
                        })
                    }
                </ol>
            }
            
       </>
    )
}

export default GifExpertApp;