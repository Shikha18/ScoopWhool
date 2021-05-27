import React, { useState } from 'react';
import style from './App.module.scss';
import Navbar from './Components/Navbar/navbar';
import Main from './Components/Main/main';
import Card from './Components/Card/card';
import Footer from './Components/Footer/footer';


function App() {
  const [tag, setTag] = useState(false);


  return (
    <div className={style.app}>
      <Navbar />
      <Main />

      <div className={style.tags}>
        <div onChange={()=> setTag(true)}>
        { tag? <button>FRESH</button>:<button>HOT</button>
        // <button>FRESH</button>
        // <button>HOT</button>
        }
        </div>
      </div>
        <hr style={{margin: '0 15% 1% 15%'}}/>

      <Card />

      <Footer />
      </div>
  );
}

export default App;
