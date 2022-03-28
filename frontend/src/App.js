import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'
import './components/Welcome/Welcome'
import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import Formulario2 from "./components/Formulario2/Formulario2";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";
import Welcome from "./components/Welcome/Welcome"

function App() {

    const [bills, setBills] = useState([]);
    const [friends, setFriends] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [vistaACobrar, setVistaACobrar] = useState(true);
    const eventsACobrar = bills.filter((n) => n.event.paidByMe);
    const eventsAPagar = bills.filter((n) => !n.event.paidByMe);

   function total(eventType) {
      return eventType.reduce((s, a) => s + a.event.amount, 0);
   }


    useEffect(() => {
        if (requiresUpdate) {
            fetch("/friends")
                .then(r => r.json())
                .then(setFriends)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])


    useEffect(() => {
        if (requiresUpdate) {
            fetch("/bills")
                .then(r => r.json())
                .then(setBills)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addBill = (newBill) => {
        fetch("/bills",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBill)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const deleteBill = (id) => {
        fetch(`/bills/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
    <div className="App">
        <Routes>
            <Route path="/home" exact
                   element={<MainPage deleteBill={deleteBill} eventsACobrar={eventsACobrar} eventsAPagar={eventsAPagar}
                                  totalACobrar={total(eventsACobrar)} totalAPagar={total(eventsAPagar)}    vistaACobrar={vistaACobrar} setVistaACobrar={setVistaACobrar}/>}/>
            <Route path="/form" element={<Form friends={friends} eventsACobrar={eventsACobrar} eventsAPagar={eventsAPagar}
                                               onSubmit={e => addBill(e)}/>}/>element
            <Route path="/" default exact element={<Welcome />}/>

            <Route path="/formulario2" element={<Formulario2 friends={friends}
                                               onSubmit={e => addBill(e)}/>}/>element
            </Routes>
    </div>
  );
}

export default App;
