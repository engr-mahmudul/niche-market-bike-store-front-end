import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Shared/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore/Explore';
import Purches from './Pages/Purches/Purches/Purches';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <PrivateRoute exact path='/product/:productId'>
              <Purches></Purches>
            </PrivateRoute>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
