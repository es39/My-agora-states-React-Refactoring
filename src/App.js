import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'

import { Form } from './Components/Form'
import { Discussions } from './Components/Discussions'
import Footer from './Footer'



export function App() {
  const [discussions, setDiscussions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000")
    .then(res => res.json())
    .then(data => {
      setDiscussions(data)
    }, [])
  })

  return (
    <div className="App">
        <main>
          <section>
            <Form />
            <Discussions discussions={discussions}/>
          </section>
        </main>
        <Footer />
    </div>
  );
}

export default App;
