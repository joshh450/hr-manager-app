import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import EmployeeList from './layout/EmployeeList';
import CreateEmployee from './employee/CreateEmployee';
import EditEmployee from './employee/EditEmployee';
import './App.scss';

const App = () =>
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={EmployeeList} />
      <Switch>
        <Route exact path="/create" component={CreateEmployee} />
        <Route exact path="/edit" component={EditEmployee} />
      </Switch>
    </Fragment>
  </Router>

export default App;
