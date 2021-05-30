import axios from 'axios';
import React, {useState, useEffect} from 'react';
import style from './card.module.scss';

const Card = ({offset}) => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const getData = async () => {
        const apiUrl = `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=8`;
        const res = await axios.get(apiUrl);
            return res.data.data;
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const newData = await getData();
            setDetail(prev => [...prev, ...newData]);
            setLoading(false);
        }
        loadData();
    }, [getData]);

    return (
        <div className={style.container}>{
            detail?.map(item => (
                <div>
                    <img src={item.feature_img} />
                    <p>{item.category}</p>
                    <h4>{item.title}</h4>
                    <p>{item.auth_display.display_name}</p>
                    <p>{item.pub_date}</p>
                </div>
            ))
        }
        {
            loading && <div> Loading .... </div>
        }
        </div>
    )
}

export default Card;
