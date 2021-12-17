import React from 'react'
import 'animate.css';
export const GifGripItem = ({img}) => {
    return (
        <div className='card animate__animate animate__bounceOut'>
            <img src={img.url} alt={img.title}></img>
            <p>{img.title}</p>
        </div>
    )
}
