import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./components/Home";

import Pricing from "./components/Pricing";
import TestimonyContextProvider from "./contexts/TestimonyContext";
import Footer from './components/Footer';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
       <Router>
      <TestimonyContextProvider>
      <NavBar/>
        <Switch>
            <Route exact path="/FinsweetWebflowDesignnn">
              <Home/>
            </Route>
            <Route path="/FinsweetWebflowDesignnn/price">
              <Pricing/>
            </Route>
        </Switch>
     <Footer/>
     </TestimonyContextProvider>
     </Router>
    </div>
  );
}

export default App;
