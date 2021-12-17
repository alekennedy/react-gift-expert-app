import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGripItem } from './GifGripItem';
import 'animate.css';
export const GifGrid = ({category}) => {
    const {loading, data:images} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animate animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map(item =>{
                        return <GifGripItem key={item.id} img={item}></GifGripItem>
                    })
                
                }
            </div>
        </>
        
     )
}
