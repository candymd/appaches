import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'

import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";


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

    const deleteBill = (id) => {
        fetch(`http://localhost:8080/bills/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<MainPage deleteBill={deleteBill} eventsACobrar={eventsACobrar} eventsAPagar={eventsAPagar} vistaACobrar={vistaACobrar} setVistaACobrar={setVistaACobrar}/>}/>
            <Route path="/form" element={<Form/>}/>
            </Routes>
    </div>
  );
}

export default App;
