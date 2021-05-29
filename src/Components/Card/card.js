import axios from 'axios';
import React, {useState, useEffect} from 'react';
import style from './card.module.scss';

const Card = () => {
    const [detail, setDetail] = useState('');
    const [offset, setOffset] = useState('');
    const [loading, setLoading] = useState(true);
    const apiUrl = `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=8`;

    const getData = () => {
        axios.get(apiUrl).then(res => {
            // setDetail(res.data);
            console.log('data---->', res.data);
            return res.data;
        });
    }

    const handleScroll = event => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        console.log("ScrollTop: ", scrollTop);
        console.log("clientHeight: ", clientHeight);
        console.log("scrollHeight: ", scrollHeight);

        if(scrollHeight - scrollTop === clientHeight) {
            setOffset(prev => prev+1);
        }
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const newData = await getData(offset);
            setDetail(prev => [...prev, ...newData]);
            setLoading(false);
        }
        loadData();
    }, [offset]);

    return (
        <div className={style.container} onScroll={handleScroll}>{
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
        {
            loading && <div> Loading .... </div>
        }
        </div>
    )
}

export default Card;
