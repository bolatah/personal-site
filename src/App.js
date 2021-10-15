import React, {Component} from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Interests from './pages/Interests';
import MasterThesis from './pages/MasterThesis';
import ContactMee from './pages/ContactForm/ContactMee';
import LanguageMan from './pages/LanguageMan'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';




class App extends Component {

render() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"> <Home/></Route>
          <Route path="/aboutMe" ><AboutMe/></Route> 
          <Route path="/interests" > <Interests/> </Route>
          <Route path="/masterthesis" ><MasterThesis/></Route>
          <Route path="/contactMe" ><ContactMee/></Route>
          <Route path="/languageMan"> <LanguageMan /></Route>
          <Redirect to="/" />
        </Switch>
     </Router>
     </div>
    );
  }
}
export default App;
