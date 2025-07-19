import { useState } from 'react'
import './App.css'
import img from './assets/logo.png'
function App() {

 
  return (
    <>
    
      <div className='container'>
        <img
          src={img}
          alt="logo"
          className='logo'
        />
        <h2 className='title'>categories</h2>
        <section className='categories'>
          <button className='category-bt'>Motivation</button>
          <button className='category-bt'>Good Day</button> 

        </section>
            <button className='btn'>Best Phrase</button>
            <h2 className='bestPhrases'> the Phrases</h2>
    </div>
    </>
  )
}

export default App
