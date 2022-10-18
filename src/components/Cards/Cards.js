import React from 'react';


const Cards = (card) => {
    const {name, picture, reviwe,ratings} =card;
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={picture} alt="" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                    <p class="text-gray-700 text-base">{reviwe}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block text-gray-700 mr-2 mb-2">{ratings}</span>
                    {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ratings</span> */}
                </div>
            </div>
        </div>
    );
};

export default Cards;