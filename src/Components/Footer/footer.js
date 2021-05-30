import React from 'react';
import style from './footer.module.scss';
import Scoop from '../../assests/scoopwhoolLogoFoot.svg';
import Fb from '../../assests/fb.svg';
import Twitter from '../../assests/twitter.svg';
import Insta from '../../assests/insta.svg';



const footer = () => {
    return (
        <div className={style.container}>
            <section>
                <img src={Scoop} />
                <p>ScoopWhoop Media Pvt Ltd.</p>
            </section>
            <section>
                <p>Follow us:</p>
                <div>
                    <a href="https://www.facebook.com/Scoopwhoop/"> <svg width="18" height="18" fill="none"><path fill="#A1A3A5" d="M7.98 9.361h1.604v5.15h1.718v-5.15h1.703V7.643h-1.703V6.78c0-.474.385-.859.86-.859h.858V4.203h-.859A2.577 2.577 0 0 0 9.584 6.78v.863H7.981v1.718z"></path><path class="border" fill="#A1A3A5" fill-rule="evenodd" d="M1.854.768h13.743c.949 0 1.718.769 1.718 1.718v13.743c0 .949-.769 1.718-1.718 1.718H1.854c-.95 0-1.718-.77-1.718-1.718V2.486c0-.95.769-1.718 1.718-1.718zm0 1.718v13.743h13.743V2.486H1.854z" clip-rule="evenodd"></path></svg> </a>
                    <a href="https://twitter.com/scoopwhoop"> <svg width="18" height="18" fill="none"><path class="border" fill="#A1A3A5" fill-rule="evenodd" d="M16.657 3.034l1.216.14-.547 1.09-.8 1.593a1.258 1.258 0 0 1-.17.34c-.034.053-.151.224-.157.232a1.788 1.788 0 0 0-.07.112v2.041c0 5.224-5.082 8.543-9.881 8.543-.982 0-1.728-.047-2.583-.233-1.406-.305-2.452-.912-2.93-1.972L.24 13.83l1.198-.11c1.084-.099 2.024-.304 2.745-.58-1.98-.316-3.09-1.182-3.09-2.807v-.854h.858c.189 0 .36-.016.511-.044C.977 8.55.232 7.132.232 5.164v-.173c-.006-.992.047-1.522.32-2.198.175-.434.428-.835.768-1.202l.648-.7.63.716C4.677 3.967 6.73 5.4 8.827 5.574c.009-2.18 1.664-3.828 3.866-3.828a3.84 3.84 0 0 1 2.69 1.086c.4.082.825.15 1.275.202zm-1.9 1.413l-.263-.06-.181-.198c-.44-.48-.992-.734-1.62-.734-1.258 0-2.149.891-2.149 2.137 0 .203-.005.331-.03.5-.102.67-.48 1.209-1.259 1.209-2.575 0-4.9-1.373-7.165-3.717-.117.353-.144.716-.14 1.397v.183c0 1.75.713 2.708 2.4 3.241l.6.19v.625c0 .758-.722 1.471-1.779 1.79.485.366 1.475.563 3.077.563h.86v.855c0 1.224-1.415 2.183-3.552 2.684.697.212 1.625.303 2.692.303 3.964 0 8.163-2.741 8.163-6.832V6.446c0-.25.073-.469.194-.695.048-.089.1-.173.165-.27l.093-.136.068-.136.33-.658c-.17-.032-.339-.067-.503-.104z" clip-rule="evenodd"></path></svg> </a>
                    <a href="https://www.instagram.com/scoopwhoop/"> <svg width="20" height="20" fill="none"><path fill="#AFB1B2" fill-rule="evenodd" d="M13.333 1.667H6.667a5 5 0 00-5 5v6.666a5 5 0 005 5h6.666a5 5 0 005-5V6.666a5 5 0 00-5-5zm-10 5a3.333 3.333 0 013.334-3.334h6.666a3.333 3.333 0 013.334 3.333v6.667a3.333 3.333 0 01-3.334 3.333H6.667a3.333 3.333 0 01-3.334-3.333V6.666zm6.667 7.5a4.167 4.167 0 110-8.334 4.167 4.167 0 010 8.333zm0-1.667a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm5-6.667a.833.833 0 11-1.667 0 .833.833 0 011.667 0z" clip-rule="evenodd"></path></svg> </a>
                </div>
            </section>
            <section>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="">Careers</a>

            </section>
            <section>
                <a href="">Advertise With Us</a>
                <a href="">Privacy policy</a>
                <a href="">Terms and conditions</a>
            </section>

        </div>
    )
}

export default footer;
