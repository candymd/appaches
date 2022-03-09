import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

=======
import {useEffect, useState} from "react";
>>>>>>> 5d11d2eb5b8742c88c549f2fd7ba0269f1713757
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
