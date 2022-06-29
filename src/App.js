import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react'
function App() {
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => (setUser(res.data)));
  }, [])

  return (
   <div>
    {user.map( user => (
      <div>
        <h1>{user.id}</h1>
      </div>
    ))}
   </div>
  );
}

export default App;
