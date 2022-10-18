
import React, { useEffect, useState } from 'react';
import "../Cards/Cards";
import Cards from '../Cards/Cards';

const Card = () => {
    const[cards,setCard]=useState([]);
    useEffect(()=>{
        fetch('reviwe.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div>
            {
                cards.map(cards=><Cards
                    card={cards}
                    ></Cards>)
            }
        </div>
    );
};

export default Card;