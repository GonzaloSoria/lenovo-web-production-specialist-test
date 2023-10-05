import React from 'react'
import './item.css'

export const Item = ({name, price, img, cuponCode, doorbuster}) => {
    const isDoorbuster = doorbuster ? <span className='doorbuster'>doorbuster</span> : ''

    return (
        <article className='card'>
            {isDoorbuster}
            <img src={img} alt={name} className='card-img'/>
            <h3 className='card-name'>{name}</h3>
            <h4 className='card-price'>{price}</h4>
            <p className='card-cupon-code'>Use eCoupon: <strong>{cuponCode}</strong></p>
            <button className='card-button'>Add to Cart</button>
        </article>
    )
}
