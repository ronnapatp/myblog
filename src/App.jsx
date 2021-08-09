import React, { useState } from 'react'
import logo from './favicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>RONNAPATP BLOG</h1>
        <button>
          <a href="#blog">
            Click here to see blog.
          </a>
        </button>
        <div className="blog" id="blog"> 
          <h2>My blog</h2>
          <p>
            <a href="#covid" className="App-link">
              Life with covid
            </a>
          </p>
        </div>
        <div id="covid" className="covid">
          <h2 className="first">My life with covid-19</h2>
          <div>
            My life with covid-19 patient <br />
            Around monday(2/8/2021) My mom test Antigen test kid(ATK) and she got positive <br />
            after that my mom stay at condo for 1 night and after that night my mom go to hospitel <br />
            She's good now. Also my grandma test positive in friday(6/8/2021) and now she Homw isolation.
          </div>
          <a href="#blog" className="App-link">
            BACK
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
