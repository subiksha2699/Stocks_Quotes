import "./App.css";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utility/theme";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const Stocks = lazy(() => import("./components/Stocks"));
const Quotes = lazy(() => import("./components/Quotes"));

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ height: "100vh", overflow: "hidden",background:"#FFFAFA" }}>
        <Router>
          <Suspense fallback={<>...</>}>
            <Routes>
              <Route path="/stocks" exact element={<Stocks />}></Route>
              <Route path="/quotes/:symbol" exact element={<Quotes />}></Route>
              <Route path="*" element={<Navigate to="/stocks" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
