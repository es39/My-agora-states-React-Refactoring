import './App.css';
import './index.css'
import React from 'react';
import { useState, useEffect } from 'react'

import { Form }  from './Components/Form'
import { Discussions } from './Components/Discussions'
import Discussion from './Components/Discussion'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle';



function App() {
  const [discussions, setDiscussions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/discussions")
    .then(res => res.json())
    .then(data => {
      setDiscussions(data)
    }, [])
  })

  return (
    <div>
        <main>
          <section>
            <GlobalStyle />
            <Form />
            <Discussions discussions={discussions}/>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default App;
