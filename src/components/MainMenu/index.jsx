import React from 'react'
import { NavbarItems } from '../NavbarItems'
import search from '../../assets/search.png'
import './mainMenu.css'

export const MainMenu = () => {
    const mainItemsNav = [{
        name: 'pcs & tablets',
        id: '0'
    },{
        name: 'phones & smart devices',
        id: '1'
    }, {
        name: 'data center',
        id: '2'
    },{
        name: 'services & solutions',
        id: '3'
    },{
        name: 'support',
        id: '4'
    }]

    return (
        <nav className="main-menu">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
            </label>
            <ul className="main-nav-container">
                {
                    mainItemsNav.map(item => {
                        return(
                            <NavbarItems 
                                key={item.id}
                                name={item.name}
                            />
                        )
                    })
                }
            </ul>
            <form action="" className='search-form'>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='What are you looking for today?'
                    className='search-bar'    
                />
                <button className='search-button'>
                    <img src={search} alt="search" />
                </button>
            </form>
        </nav>
    )
}
