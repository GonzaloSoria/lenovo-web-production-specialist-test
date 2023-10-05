import React from 'react'
import arrow from '../../assets/arrow.svg'
import './asidePriceFilter.css'
import { Checkbox } from '../Checkbox'

export const AsidePriceFilter = () => {
    const optionsLabel = [{
        label: '$800-$999.99 (2)',
        id: '800-900'
    },{
        label: '$1,000-$1,499.99 (4)',
        id: '1000-1499'
    },{
        label: '$1,500-$1,999.99 (3)',
        id: '1500-1999'
    }]

    return (
        <aside>
            <ul className='accordion'>
                <li>
                    <input 
                        type="checkbox" 
                        name="accordion" 
                        id="accordion" 
                        className='price-input-radio'
                    />
                    <label 
                        htmlFor="accordion" 
                        className='price-label'
                    >Price</label>                
                    <div className="options">
                        {
                            optionsLabel.map(label => {
                                return(
                                    <Checkbox 
                                        key={label.id}
                                        label={label.label}
                                        id={label.id}
                                    />
                                )
                            })
                        }
                        <a href="#" className='see-more'>See more</a>
                    </div>
                </li>
            </ul>
        </aside>
    )
}
