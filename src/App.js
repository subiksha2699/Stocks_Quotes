import "./App.css";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./utility/theme";
import { lazy,Suspense } from "react";
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
      <Router>
        <Suspense fallback={<>...</>}>
          <Routes>
            <Route path="/stocks" exact element={<Stocks />}></Route>
            <Route path="/quotes" exact element={<Quotes />}></Route>
            <Route path="*" element={<Navigate to="/stocks" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
