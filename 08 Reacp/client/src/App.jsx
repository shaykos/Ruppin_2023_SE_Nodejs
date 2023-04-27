import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [stores, setStores] = useState([]);

  const LoadStores = async () => {
    let res = await fetch('http://localhost:5500/api/store');
    let data = await res.json();
    setStores(data.stores);
  }

  const StoreClick = (storeId) => {
    alert(storeId);
  }

  useEffect(() => {
    LoadStores();
  }, []);


  return (
    <>
      {stores?.map((store) =>
        <div>
          <h1>{store.name} <small>{store.city}</small></h1>
          <button onClick={() => StoreClick(store.id)}>Show Items</button>
        </div>
      )}
    </>
  )
}

export default App
