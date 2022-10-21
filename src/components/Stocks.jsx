import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import { parse } from "papaparse";


const Stocks = (props) => {

    useEffect(() => {
        getStocks();
    }, [])

    const getStocks = () => {
        let url = process.env["REACT_APP_InputService"] + "/v2/instruments";
        fetch(url, { method: "GET" })
            .then((response) => response.text())
            .then(data => {
                let aTableData = parse(data);
                console.log(aTableData);
            })
    }
    return (<div>Stocks</div>)
}

export default Stocks;