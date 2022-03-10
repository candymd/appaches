import './App.css';
import './components/Footer/Footer'

import {useEffect, useState} from "react";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
function App() {

  const [records, setRecords] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/record")
                .then(r => r.json())
                .then(setRecords)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    return (
    <div className="App">
        <CardList records={records}/>
        <Footer />
    </div>
  );
}

export default App;
