import React from 'react';
import style from './main.module.scss';
import Arrow from '../../assests/arrow.svg';


const main = () => {
    return (
        <div className={style.main}>
            <img src="https://s4.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/77808a56-3907-44bd-a6f2-e270996c225c.jpg" alt="backdrop"/>
            <section>
                <button>ENTERTAINMENT</button>
                <h1>16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                <a href="/entertainment/movies-that-were-copied/?ref=read_masthead">Read Article </a>
                <span><img src={Arrow} alt="arrow"/></span>
            </section>
           
        </div>
    )
}

export default main;
