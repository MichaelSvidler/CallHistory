
import './App.css';
import Login from './Components/Login/Login';
import {Route, Switch} from 'react-router-dom';
import HistoryCalls from './Components/HistoryCalls/HistoryCalls';
function App() {
  return (
    <div >
      <Switch>
        <Route path ="/Login" component = {Login}/>
        <Route path = "/HistoryCalls" component={HistoryCalls}/>
        <Route path = "/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
