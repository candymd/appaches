import './App.css';

import {useEffect, useState} from "react";
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
        {records.map(record =>
            <p>{record.name}</p>)}
    </div>
  );
}

export default App;
