/**
 * Created by HP on 17-Dec-17.
 */

import React from 'react';
import DishItem from '../components/DishItem';


/**
 * Divides a given array on chunks and puts them in a new array
 * @param n (items in a row)
 * @param list (array for chunking)
 * @param orderPage
 * @param addButton (function for adding an item)
 * @returns {Array}
 */
const getRowsOfDishes = (n,list, orderPage=false, addButton, addedItems = []) => {
    let items = [...list];
    let chunks = [[]];
    let currentChunk = 0;
    items.forEach((item, i) =>{
        if (i !== 0 && (i % n === 0)) {
            chunks.push([]);
            currentChunk++;
        }
        chunks[currentChunk].push(item);
    });
    //console.log(chunks);
    return chunks.map((ch,it) => {
        return (
            <div className="dishlist__chunkRow" key={`${it}c`}>
                {ch.map((d,i) => {
                    return (
                        <div key={i} className={addedItems.indexOf(d.title) >= 0 ? "dishItem orderList--added" : "dishItem"}>
                            <DishItem
                                title={d.title}
                                price={d.price}
                                description={d.description}
                                path={d.path}
                                amount={d.amount}
                                orderPage={orderPage}
                            />
                            {!orderPage &&
                            <button className="btn btn-secondary dishItem__add-btn" onClick={() => addButton(d)}>
                                Add to order
                            </button>}
                        </div>
                    )
                })}
            </div>
        )
    });
};

export default getRowsOfDishes;