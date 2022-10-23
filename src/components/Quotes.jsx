import { Stack, Typography, IconButton, Toolbar } from "@mui/material";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWrapper } from "../services/fetchWrapper";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Quotes = (props) => {
    const { symbol } = useParams();
    const [allQuotes, setallQuotes] = useState([]);
    const listHeader = ["Price", "Time", "ValidTill"];
    const navigate = useNavigate();


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
    const sortDescending = () => {
        let quotes = structuredClone(allQuotes);
        quotes.sort(function (a, b) {
            return new Date(b.time) - new Date(a.time);
        });
        setallQuotes(quotes)
    }
    const sortAscending = () => {
        let quotes = structuredClone(allQuotes);
        quotes.sort((a, b) => new Date(a.time) - new Date(b.time));
        setallQuotes(quotes)
    }
    return (<div>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", minHeight: "34px!important",marginTop:"10px" }}>
            <Stack direction="row" sx={{ marginLeft: "10px" }}>
                <ArrowBackIosIcon fontSize="small" onClick={() => navigate("/stocks")} style={{cursor:"pointer"}} />
                <Breadcrumbs >
                    <Link underline="hover" color="inherit" href="/" onClick={() => navigate("/stocks")}>
                        Stocks
                    </Link>
                    <Typography color="text.primary">Quotes</Typography>
                </Breadcrumbs>
            </Stack>

        </Toolbar>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", minHeight: "34px!important" }}>
            <Typography sx={{ marginLeft: "10px", color: (theme) => theme.palette.primary.main, fontSize: (theme) => theme.typography.h1.fontSize }}>
                Quotes - {symbol}
            </Typography>

        </Toolbar>
        <Stack>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
                sx={{
                    width: "calc(100% - 30vh)",
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
                            <Stack direction="row" key={item}>
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
                                        '&.MuiIconButton-root': {
                                            padding: 0
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
                                        '&.MuiIconButton-root': {
                                            padding: 0
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
                height: "300px",
                overflowY: "overlay",
                width: "calc(100% - 25vh)",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "5vh",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12)"
            }}>
                {allQuotes.map((row) => (
                    <Stack direction="row"
                        key={Math.random()}
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