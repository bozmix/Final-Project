import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import { getToken } from './Services/getToken';
import { Header } from './components/Header/Header';
import { getCandidates } from './Services/getCandidates';
import { useEffect, useState } from 'react';
import { Candidates } from './components/Candidates/Candidates';
import { Footer } from './components/Footer/Footer';

function App() {

  const [token, setToken] = useState("");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getToken().then(tokenResponse => {
      setToken(tokenResponse)
    })
  }, [])

  useEffect(() => {
    getCandidates(token).then(candidates => {
      setCandidates(candidates)
    })
  }, [token])

  console.log(candidates)

  return (
    <div className="App">
      <Header />
      <Candidates candidates={candidates} />
      <Footer />
    </div>
  );
}

export default App;
