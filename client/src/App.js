import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './layout/Navbar';
import EmployeeList from './layout/EmployeeList';
import CreateEmployee from './employee/CreateEmployee';
import EditEmployee from './employee/EditEmployee';
import './App.scss';

const App = () =>
  <Provider store={store}>
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
  </Provider>

export default App;
