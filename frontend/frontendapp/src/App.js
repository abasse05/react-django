import { useState } from 'react';
import './App.css';
import Login from './components/login'
import Books from './components/books'

function App() {

  const [token, setToken] = useState('')

  const userLogin = (tokens) => {
    setToken(tokens)
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <Books token={token}/>
    </div>
  );
}
 
export default App;



