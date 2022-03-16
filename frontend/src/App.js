import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'

import {useEffect, useState} from "react";
import CardList from "./components/CardList/CardList";
import CardList2 from "./components/CardList2/CardList2";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import {Route, Routes,} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";
import {MainPage2} from "./components/MainPage2/MainPage2";

function App() {

  const [records, setRecords] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/registries")
                .then(r => r.json())
                .then(setRecords)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<MainPage  records={records}/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
