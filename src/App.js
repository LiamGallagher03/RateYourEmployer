import './App.css';
import React/*, {useState}*/ from 'react';
import TabManager from './Components/TabManager.js';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>     
      <header>
        {/*<img src="Sicc.PNG" alt="SICC"></img>*/}
        <a href="#default" class="logo">SICC</a><br/>
        <h1 id="title">Sylvania International Convention Center</h1>
      </header>
      <body>
          <TabManager/>
      </body>
    </div>
  )
}
export default App;