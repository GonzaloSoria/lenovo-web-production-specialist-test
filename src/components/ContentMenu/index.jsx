import React from 'react'
import { NavbarItems } from '../NavbarItems'
import './contentMenu.css'

export const ContentMenu = () => {
    const subItemsNav = [{
        name: 'models',
        id: '0'
    },{
        name: 'tech specs',
        id: '1'
    },{
        name: 'features',
        id: '2'
    },{
        name: 'reviews',
        id: '3'
    },{
        name: 'compatible accessories',
        id: '4'
    },{
        name: 'services & support',
        id: '5'
    }]

    return (
        <nav className='content-menu'>
            <div className="container mx-auto">
                <ul>
                    {
                        subItemsNav.map(item => {
                            return(
                                <NavbarItems 
                                    key={item.id}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
