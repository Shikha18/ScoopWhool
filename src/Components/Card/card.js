import axios from 'axios';
import React, {useState, useEffect} from 'react';
import style from './card.module.scss';

const Card = () => {
    const [detail, setDetail] = useState('');
    const apiUrl = "https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8";

    const getData = () => {
        axios.get(apiUrl).then(res => {
            setDetail(res.data);
            console.log('data---->', res.data);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={style.container}>{
            detail?.data?.map(item => (
                <div>
                    <img src={item.feature_img} />
                    <p>{item.category}</p>
                    <h4>{item.title}</h4>
                    <p>{item.auth_display.display_name}</p>
                    <p>{item.pub_date}</p>
                </div>
            ))
        }
        </div>
    )
}

export default Card;
