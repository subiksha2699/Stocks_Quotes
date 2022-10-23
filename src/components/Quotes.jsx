import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWrapper } from "../services/fetchWrapper";

const Quotes = (props) => {
    const { symbol } = useParams();
    const [allQuotes, setallQuotes] = useState([]);
    const listHeader = ["Price", "Time", "ValidTill"]

    function getQuotes() {
        fetchWrapper(`/InputService/v2/quotes/${symbol}`, { method: "GET" })
            .then((data) => {
                setallQuotes(data.payload[symbol])
                console.log(data.payload[symbol]);
            })
    }
    useEffect(() => {
        getQuotes();
    }, [])

    return (<div>
        <Stack>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
                sx={{
                    width: "calc(100% - 50vh)",
                    height: "25px",
                    background: '#E7E7E7',
                    borderRadius: "6px 6px 0px 0px",
                    marginLeft: "5vh",
                    padding: "15px",
                    marginTop: "20px"
                }}>
                {listHeader.map((item) => (
                    <Typography>
                        {item}
                    </Typography>
                ))}
            </Stack>
            <Stack>
                {allQuotes.map((row) => (
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{
                            width: "calc(100% - 50vh)",
                            height: "25px",
                            background: '#FFFAFC',
                            marginLeft: "5vh",
                            padding: "15px"
                        }}>
                        <Typography>
                            {row.price}
                        </Typography>
                        <Typography>
                            {row.time}
                        </Typography>
                        <Typography>
                            {row.valid_till}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    </div>)
}

export default Quotes;