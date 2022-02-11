import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./components/Home";

import Pricing from "./components/Pricing";
import TestimonyContextProvider from "./contexts/TestimonyContext";
import Footer from './components/Footer';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <TestimonyContextProvider>
      <NavBar/>
        {/* <Switch> */}
            <Route exact path="/" component={Home} />
            {/* </Route> */}
            <Route path="/price" component={Pricing}/>
            {/* </Route> */}
        {/* </Switch> */}
     <Footer/>
     </TestimonyContextProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
