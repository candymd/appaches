import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'

import {useEffect, useState} from "react";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import {Routes, Route} from "react-router-dom";
function App() {

  const [records, setRecords] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/logs")
                .then(r => r.json())
                .then(setRecords)
                .then(_ => setRequiresUpdate(false));
            console.log(records);
        }
    }, [requiresUpdate])

    return (
    <div className="App">
        <Header/>
        <CardList  records={records}/>
        <Footer />
        <Routes>
            <Route path="/form" element={ <Form /> }/>
        </Routes>

    </div>
  );
}

export default App;
