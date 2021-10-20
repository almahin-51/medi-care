import Navbars from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Component/LogIn/Login';
import SignUp from './Component/SignUp/SignUp';
import ContactUs from './Component/ContactUs/ContactUs';
import NotFound from './Component/NotFound/NotFound';
import Booking from './Component/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/Private/PrivateRoute';
import About from './Component/About/About';
;

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbars></Navbars>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <ContactUs></ContactUs>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
