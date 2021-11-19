import './App.css'
import HomePage from './components/HomePage'
// import Cart from './components/Cart'
// import Checkout from './components/Checkout'
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <HomePage />
        <Footer />
        <Switch>
          <Route exact path="/" />
          {/* <Redirect from="/" to="/signin/" /> */}
          <Route path="/cart" component={''} />

          <Route path="/signin" component={''} />
          <Route path="/signup" component={''} />
          <Route path="/checkout" component={''} />
        </Switch>
      </Router>
    </>
  )
}

export default App
