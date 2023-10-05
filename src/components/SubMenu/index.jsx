import React from 'react'
import { NavbarItems } from '../NavbarItems'
import './subMenu.css'

export const SubMenu = () => {
    const subItemsNav = [{
        name: 'laptos',
        id: '0'
    },{
        name: 'desktops',
        id: '1'
    },{
        name: 'workstations',
        id: '2'
    },{
        name: 'tablets',
        id: '3'
    },{
        name: 'accessories & software',
        id: '4'
    },{
        name: 'monitors',
        id: '5'
    },{
        name: 'smart home',
        id: '6'
    },{
        name: 'home & office furniture',
        id: '7'
    },{
        name: 'gaming',
        id: '8'
    },{
        name: 'business',
        id: '9'
    },{
        name: 'students',
        id: '10'
    },{
        name: 'sale',
        id: '11'
    }]

    return (
        <nav className='sub-menu'>
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
        </nav>
    )
}
