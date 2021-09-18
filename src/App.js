import {  useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Modal from "react-modal";
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Candidates } from './components/Candidates/Candidates';
import { Footer } from './components/Footer/Footer';
import { Reports } from './components/Reports/Reports';
import './App.css';

Modal.setAppElement("#root")
function App() {

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('tokenNibble'));


  return (
    <div className="App">
      {
        loggedIn
          ?
          <>
            <Header changeLogIn={setLoggedIn} />
            <Switch>
              <Route path='/home' component={Candidates} />
              <Route path='/single-candidate/:id' component={SingleCandidate} />
              <Route path='/reports' component={Reports} />
              <Redirect from='/' to='/home' />
            </Switch>
          </>
          :
          <Login changeLogIn={setLoggedIn} />
      }
      <Footer />
    </div>
  );
}

export default App;
