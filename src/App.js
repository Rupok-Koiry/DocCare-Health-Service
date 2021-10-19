import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./store/auth-context";
//All pages import
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Doctors from "./pages/Doctors/Doctors";
import NotFound from "./pages/NotFound/NotFound";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/Contact/Contact";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* All private route */}
          <PrivateRoute path="/doctors">
            <Doctors />
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <ServiceDetail />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          {/* If user is already login then redirect to home page */}
          <Route path="/login">
            {user.email ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user.email ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};
export default App;
