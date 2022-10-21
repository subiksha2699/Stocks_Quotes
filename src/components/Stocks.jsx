import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import { parse } from "papaparse";


const Stocks = (props) => {

    const [AllStocks, setAllStocks] = useState([]);

    useEffect(() => {
        getStocks();
    }, [])

    const getStocks = () => {
        let url = process.env["REACT_APP_InputService"] + "/v2/instruments";
        fetch(url, { method: "GET" })
            .then((response) => response.text())
            .then(data => {
                if (data) {
                    let aTableData = parse(data);
                    setAllStocks(aTableData.data);
                }
            })
    }
    return (<div>Stocks{AllStocks.length > 0  && AllStocks[0][0]}</div>)
}

export default Stocks;