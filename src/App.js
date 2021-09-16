import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Modal from "react-modal";
import { getToken } from './Services/getToken';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { getCandidates } from './Services/getCandidates';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Candidates } from './components/Candidates/Candidates';
import { Footer } from './components/Footer/Footer';
import { Reports } from './components/Reports/Reports';
import './App.css';

Modal.setAppElement("#root")
function App() {


  const [candidates, setCandidates] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  let token = localStorage.getItem("tokenNibble");

  useEffect(() => {
    setLoggedIn(localStorage.getItem("userLoggedIn#10394e1"))
    getToken().then(tokenResponse => {
      localStorage.setItem("tokenNibble", tokenResponse);
      token = localStorage.getItem("tokenNibble");
    })
  }, [])



  useEffect(() => {
    getCandidates(token).then(candidates => {
      setCandidates(candidates)
    })
  }, [token])

  const changeLogIn = () => {
    setLoggedIn(!loggedIn)
  }




  return (
    <div className="App">
      {
        loggedIn
          ?
          <>
            <Header changeLogIn={changeLogIn} />
            <Switch>
              <Route path='/home' component={() => <Candidates candidates={candidates} />} />
              <Route path='/single-candidate/:id' component={(props) => <SingleCandidate {...props} token={token} />} />
              <Route path='/reports' component={(props) => <Reports {...props} token={token} />} />
              <Redirect from='/' to='/home' />
            </Switch>
          </>
          :
          <Switch>
            <Route exact path='/login' component={() => <Login changeLogIn={changeLogIn} />} />
            <Redirect from='/' to='/login' />
          </Switch>
      }
      <Footer />
    </div>
  );
}

export default App;
