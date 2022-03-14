import './App.css';
import './components/Footer/Footer'
import './components/Header/Header'
import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import {Route, Routes,} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";

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
        <Routes>
            <Route path="/" exact element={<MainPage  records={records}/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
