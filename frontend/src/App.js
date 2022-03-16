import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'

import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";


function App() {

    const [registries, setRegistries] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [vistaACobrar, setVistaACobrar] = useState(true);
    const registrosACobrar = registries.filter((n) => n.paidByMe);
    const registrosAPagar = registries.filter((n) => !n.paidByMe);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/registries")
                .then(r => r.json())
                .then(setRegistries)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])


    return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<MainPage registrosACobrar={registrosACobrar} registrosAPagar={registrosAPagar} vistaACobrar={vistaACobrar} setVistaACobrar={setVistaACobrar}/>}/>
            <Route path="/form" element={<Form/>}/>
            </Routes>
    </div>
  );
}

export default App;
