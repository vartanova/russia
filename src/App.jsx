import React from 'react'
import Header from './components/Header'
import Lead from './components/Lead'
import Intro from './components/Intro'
import PhotoGrid from './components/PhotoGrid'
import Places from './components/Places'
import Cover from './components/Cover'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='pt-1.75 px-3 bg-[#2A2C2F] '>
      <Header />
      <Lead />
      <Intro />
      <PhotoGrid />
      <Places />
      <Cover />
      <Footer />
    </div>
  )
}

export default App
