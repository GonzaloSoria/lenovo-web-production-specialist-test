import React from 'react'
import { ItemsContainer } from '../ItemsContainer'
import { AsidePriceFilter } from '../AsidePriceFilter'
import { BannerDashboard } from '../BannerDashboard'
import './dashboard.css'

export const Dashboard = () => {
  return (
    <>
        <section className='dashboard'>
          <div className="dashboard-container container mx-auto">
            <h2>Models</h2>
            <div className='dashboard-content'>
              <AsidePriceFilter />
              <ItemsContainer />
            </div>
            <BannerDashboard />
          </div>
        </section>
    </>
  )
}
