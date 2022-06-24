import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import {useState, useEffect } from 'react'

function Shopping() {
    
    const [datasCart, setDatasCart] = useState([])
    
    
    
    return ( 
        <div>
        <ShoppingCart/>
        </div>
    );
}

export default Shopping