import React from 'react'
import logo from '../../assets/lenovo-logo.png'
import compare from '../../assets/compare.svg'
import wishlist from '../../assets/wishlist.svg'
import locator from '../../assets/locator.svg'
import contact from '../../assets/contact.svg'
import rewards from '../../assets/rewards.svg'
import user from '../../assets/user.svg'
import cart from '../../assets/cart.svg'
import './header.css'

export const Header = () => {
    const headerNav = [{
        icon: `${compare}`,
        name: 'compare',
        id: '0'    
    },{
        icon: `${wishlist}`,
        name: 'wishlist',
        id: '1' 
    },{
        icon: `${locator}`,
        name: 'locator',
        id: '2' 
    },{
        icon: `${contact}`,
        name: 'contact',
        id: '3' 
    },{
        icon: `${rewards}`,
        name: 'rewards',
        id: '4' 
    },{
        icon: `${user}`,
        name: 'user',
        id: '5' 
    },{
        icon: `${cart}`,
        name: 'cart',
        id: '6' 
    }]

    return (
        <>
            <header>
                <nav className='navbar'>
                    <img src={logo} alt="Logo"/>
                    <ul className='header-navbar'>
                        {
                            headerNav.map(icon => {
                                return(
                                    <li className='link' key={icon.id}>
                                        <a href="#">
                                            <img src={icon.icon} alt={icon.name} />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
            
                
            
        </>
        
  )
}
