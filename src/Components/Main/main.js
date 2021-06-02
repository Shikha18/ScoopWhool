import React from 'react';
import style from './main.module.scss';


const main = () => {
    return (
        <div className={style.main}>
            <img src="https://s4.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/77808a56-3907-44bd-a6f2-e270996c225c.jpg" alt="backdrop"/>
            <section>
                <button>ENTERTAINMENT</button>
                <h1>16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                <a href="/entertainment/movies-that-were-copied/?ref=read_masthead">Read Article </a>
                <span><svg width="17" height="13" fill="none"> <path fill="url(#blueGrad)" fill-rule="evenodd" d="M11.611.739l5.152 5.185a.819.819 0 0 1 0 1.152l-5.152 5.185a.806.806 0 0 1-1.145 0 .818.818 0 0 1 0-1.152l3.77-3.794H0v-1.63h14.236l-3.77-3.794a.818.818 0 0 1 0-1.152.806.806 0 0 1 1.145 0z" clip-rule="evenodd"></path> <defs><linearGradient id="blueGrad" x2="17" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#1B91FF"></stop><stop offset="1" stop-color="#9F49E3"></stop></linearGradient></defs> </svg></span>
            </section>
           
        </div>
    )
}

export default main;
