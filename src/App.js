import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login';
import Protected from './components/Auth/Protected/Protected';
import Client from './components/Clients/AllClients';
import ClientsProfile from './components/Clients/ClientsProfile.Jsx';
import Home from './components/Dashboard/Home';
import Projects from './components/Projects/Project';
import ProjectDetails from './components/Projects/ProjectDetails';
import ProjectView from './components/Projects/ProjectView';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard">< Protected Cmp={Home} /></Route>
          <Route path="/clients" component={Client} />
          <Route path="/clientsProfile" component={ClientsProfile} />
          <Route path="/projectview" component={ProjectView} />
          <Route path="/projects" component={Projects} />
          <Route path="/projcetsdetails" component={ProjectDetails} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
