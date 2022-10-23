import { Stack, Typography,IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWrapper } from "../services/fetchWrapper";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
    const sortAscending = () => {
        
    }
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
                {listHeader.map((item) => {
                    if (item === "Time")
                        return (
                            <Stack direction="row">
                                < Typography >
                                    {item}
                                </Typography>
                                <IconButton
                                    onClick={() => sortAscending()}
                                    disableRipple
                                    sx={{
                                        ':hover': {
                                            bgcolor: 'transparent',
                                        },
                                        '&.MuiIconButton-root':{
                                            padding:0
                                        }
                                    }}
                                >
                                    <ArrowDownwardIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => sortDescending()}
                                    disableRipple
                                    sx={{
                                        ':hover': {
                                            bgcolor: 'transparent',
                                        },
                                        '&.MuiIconButton-root':{
                                            padding:0
                                        }
                                    }}
                                >
                                    <ArrowUpwardIcon />
                                </IconButton>
                            </Stack>)
                    else 
                        return (
                            < Typography >
                                {item}
                            </Typography>
                        )
                })}
            </Stack>
            <div style={{
                height: "200px",
                overflowY: "overlay",
                width: "calc(100% - 45vh)",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "5vh",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12)"
            }}>
                {allQuotes.map((row) => (
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{
                            background: '#FFFAFC',
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
            </div>
        </Stack>
    </div >)
}

export default Quotes;