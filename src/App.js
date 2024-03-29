
import './App.css';
import {ROUTES} from "./router";
import {useRoutes} from "react-router-dom";

function App() {
  return (
    useRoutes(ROUTES)
  );
}

export default App;
