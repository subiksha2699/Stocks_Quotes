import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: "#003454", 
        },
        background: {
            default: "#FFFAFA",
            paper: "#FFFFFF",
            secondary:"#F5F5F5",
        },
        secondary: {
            main: "#C3E6FF",
        },
        text: {
            primary: "#404040",
            secondary: "#757575"
        },
        table:{
            primary:"#EEEEEE",
            rowprimary:"#FAFAFA",
            rowsecondary:"#FFFFFF"
        }
    },
    typography: {
        h1: {
            fontSize: "24px",
            fontWeight: "500",
        },
        h2: {
            fontSize: "18px",
            fontWeight: "normal",
        },
        h3: {
            fontSize: "16px",
            fontWeight: "500",
        },
        h3Bold:{
            fontSize: "16px",
            fontWeight: "600",
        },
        h4: {
            fontSize: "14px",
            fontWeight: "400",
        },
        h5: {
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "14px",
        },
        h6: {
            fontSize: "10px",
            fontWeight: "normal",
        },
    },
});
