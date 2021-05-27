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
                    <img src={Fb} alt="fb"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Insta} alt="insta"/>

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
