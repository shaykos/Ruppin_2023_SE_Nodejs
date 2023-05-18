import { useState } from 'react'
import './App.css'
import CharacterContextProvider from './context/charactersContext'
import CharactersList from './components/charactersList'

function App() {
  return (
    <>
      <CharacterContextProvider>
        <header>
          <h1>Star Wars</h1>
          <img />
        </header>
        <main>
            <CharactersList />
        </main>
      </CharacterContextProvider>
    </>
  )
}

export default App
