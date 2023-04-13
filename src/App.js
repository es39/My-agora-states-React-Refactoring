import React, { useState } from "react";
import "./App.css";
import { Discussions } from "./Components/Discussions";
import { Form } from "./Components/Form";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import agoraStatesDiscussions from "./data/data";
import "./index.css";

function App() {
  const [discussions, setDiscussions] = useState(agoraStatesDiscussions);
  // useEffect(() => {
  //   fetch("http://localhost:4000/discussions")
  //   .then(res => res.json())
  //   .then(data => {
  //     setDiscussions(data)
  //   }, [])
  // })

  return (
    <div>
      <main>
        <section>
          <GlobalStyle />
          <Form discussions={discussions} setDiscussions={setDiscussions} />
          <Discussions
            discussions={discussions}
            setDiscussions={setDiscussions}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
