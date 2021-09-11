import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { getToken } from './Services/getToken';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { getCandidates } from './Services/getCandidates';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Candidates } from './components/Candidates/Candidates';
import { Footer } from './components/Footer/Footer';
import { isUserLoggedIn } from './Services/isUserLoggedIn';
import './App.css';


function App() {

  const [token, setToken] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    setLoggedIn(localStorage.getItem("userLoggedIn#10394e1"))
    getToken().then(tokenResponse => {
      setToken(tokenResponse)
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
          <Switch>
            <Header changeLogIn={changeLogIn} />
            <Route exact path='/home' component={() => <Candidates candidates={candidates} />} />
            <Route path='/SingleCandidate/:id' component={SingleCandidate} />
            <Redirect from='/' to='/home' />
          </Switch>
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
