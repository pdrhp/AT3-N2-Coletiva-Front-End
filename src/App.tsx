import { useState } from 'react'
import MainContent from './components/MainContent'
import SearchContainer from './components/SearchContainer'

function App() {
  

  return (
    <div className='h-screen w-screen bg-background flex flex-col p-3'>
      <SearchContainer/>
      <MainContent/>
    </div>
  )
}

export default App
