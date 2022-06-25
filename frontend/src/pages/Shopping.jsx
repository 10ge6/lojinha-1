import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import EmptyShopping from "../components/EmptyShopping"
import {useState, useEffect } from 'react'

function Shopping() {
    
    const [datasCart, setDatasCart] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8000/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setDatasCart(data.response)
        })
        .catch((err) => console.log(err))

    }, [])

    return ( 
        <div>
            {datasCart.length > 0 ? <ShoppingCart/> : <EmptyShopping/> }
        </div>
    );
}

export default Shopping