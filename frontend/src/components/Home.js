import React from 'react'
import Topbar from '../scenes/global/Topbar1';
import Dashboard from '../scenes/dashboard';
import About from './About'

import CarouselComponent from './Courousel';
function Home() {
  return (
    <div>
      <Topbar/>
      <CarouselComponent/>
      {/* <Dashboard /> */}
    </div>
  )
}

export default Home
