import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'
import './components/Welcome/Welcome'
import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";
import Welcome from "./components/Welcome/Welcome"
function App() {

    const [bills, setBills] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [vistaACobrar, setVistaACobrar] = useState(true);
    const eventsACobrar = bills.filter((n) => n.event.paidByMe);
    const eventsAPagar = bills.filter((n) => !n.event.paidByMe);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/bills")
                .then(r => r.json())
                .then(setBills)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])


    const addRegistry = (newRegistry) => {
        fetch("http://localhost:8080/registries/add",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newRegistry)
            }
        ).then(_ => setRequiresUpdate(true))

    }
    return (
    <div className="App">
        <Routes>

            <Route path="/" exact element={<MainPage registrosACobrar={registrosACobrar} registrosAPagar={registrosAPagar} vistaACobrar={vistaACobrar} setVistaACobrar={setVistaACobrar}/>}/>
            <Route path="/form" element={<Form registrosACobrar={registrosACobrar} registrosAPagar={registrosAPagar} onSubmit={e => addRegistry(e)}/>}/>
            <Route path ="/welcome" element={<Welcome/>}/>
            </Routes>

    </div>
  );
}

export default App;
