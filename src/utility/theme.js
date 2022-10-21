import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: "#007AD4", 
        },
        background: {
            default: "#FAFCFF",
            paper: "#FFFFFF",
            secondary:"#F5F5F5",
            header:"#FCFCFF",
            navbar: "#FFFFFF",
            input:"#FAFAFA",
            snackbar:"#757575",
            selected:"#C3E6FF"
        },
        secondary: {
            main: "#C3E6FF",
        },
        button: {
            hoverbackground : "#F5F5F5",
            background:"#FFFFFF",
            primary:"#007AD4",
            secondary:"#C3E6FF"
        },
        text: {
            primary: "#007AD4",
            secondary: "#757575", 
            other: "#194E8C",
            heading:"#424242",
            tertiary:"#1D1D11",
            snackbar:"#ffffff"
        },
        icon:{
            primary: "#007AD4",
            secondary: "#757575", 
            other: "#8F8F8F",
            tertiary:"#424242",
            stepper:"#282828"
        },
        table:{
            primary:"#EEEEEE",
            rowprimary:"#FAFAFA",
            rowsecondary:"#FFFFFF"
        }
    },
    typography: {
        button: {
            textTransform: "none",
        },
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
