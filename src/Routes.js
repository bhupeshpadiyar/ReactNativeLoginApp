import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './pages/login.js'
import Dashboard from './pages/dashboard.js'
import SignUp from './pages/signup.js'
import ForgotPassword from './pages/forgotpassword.js'

const Routes = () => (
   <Router>
      <Scene key = "root">

         <Scene key = "signup" component = {SignUp} title = "Sign Up" initial = {true}/>
         <Scene key = "forgotpassword" component = {ForgotPassword} title = "Forgot Password" initial = {true}/>
         <Scene key = "signin" component = {Login} title = "Login" initial = {true} />
         <Scene key = "dashboard" component = {Dashboard} title = "Dashboard" />
      </Scene>
   </Router>
)
export default Routes
