import React, { useState } from 'react';
import style from './App.module.scss';
import Navbar from './Components/Navbar/navbar';
import Main from './Components/Main/main';
import Card from './Components/Card/card';
import Footer from './Components/Footer/footer';

function App() {
  const [offset, setOffset] = useState(1);
  const [navBackground, setNavBackground] = useState('');

  const handleScroll = event => {
    const { scrollTop } = event.target;
      setOffset(offset + 8); 

    if (scrollTop < 1) {
      setNavBackground("transparent")
    } else {
      setNavBackground("white")
    }
  }

  let timerId;
  const debounce = (event, func, time) => {
    if(timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(()=>{
      func(event);
    }, time)
  }

  return (
    <div className={style.app}>
      <Navbar navBackground={navBackground} />
      <article onScroll={(event) => debounce(event, handleScroll, 1000)}>
        <Main />

        <div className={style.tags}>
          <div>
            <button>FRESH</button>
            <button>HOT</button>

          </div>
        </div>
        <hr style={{ margin: '0 15% 1% 15%' }} />

        <Card offset={offset} />
      </article>
      <Footer />
    </div>
  );
}

export default App;
