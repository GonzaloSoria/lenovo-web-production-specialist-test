import React, { useEffect, useState } from 'react'
import { Item } from '../Item';
import './itemsContainer.css'

export const ItemsContainer = () => {
  const [items, setItems] = useState([])

  const getItems = async (setItems) => {
    const data = await fetch('data/items.json')
    const dataParsed = await data.json()
    setItems(dataParsed)
  }

  useEffect(() => {
    getItems(setItems)
  }, [])

  return (
    <main className='main-content'>
      <div className='order-container'>
        <span className='results'>{items.length} Matching results</span>
        <select name="showItems" id="showItems" className='select'>
            <option value="">Price Low to High</option>
            <option value="">Price High to Low</option>
        </select>
      </div>
      <div className="items-container flex">
        {
          items.map(item => {
            return(
              <Item 
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                cuponCode={item.cuponCode}
                doorbuster={item.doorbuster}
              />
            )
          })
        }
      </div>
    </main>
  )
}
