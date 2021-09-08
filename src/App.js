import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import { getToken } from './Services/getToken';
import { Header } from './components/Header/Header';

function App() {
  getToken()

  console.log(getToken)

  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;
