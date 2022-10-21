import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../services/fetchWrapper";

const Stocks = (props) => {

    useEffect(() => {
        getStocks();
    }, [])
    const getStocks = () => {
        fetchWrapper("/InputService/v2/instruments",{method:"GET"})
        .then((data) => {
            console.log(data)
        })
    }
    return(<div>Stocks</div>)
}

export default Stocks;