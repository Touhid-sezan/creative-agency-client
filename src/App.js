import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import PrivateRoute from './Components/SharedComponents/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/Dashboard/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import MakeReview from './Components/Dashboard/MakeReview/MakeReview';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/makeReview">
            <MakeReview />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
