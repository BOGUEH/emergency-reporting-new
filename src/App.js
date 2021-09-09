
import './App.css';
import {  Route} from "react-router-dom";
import SignUp from './Components/SignInSignUp/SignUp';

import AdminDashboard from './Components/Admindb/AdminDashboard';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import SignIn from './Components/SignInSignUp/SignIn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Dashboard from './Components/DashBoard/Dashboard';
import Update from './Components/Update/Update';
import Mversion from './Components/MobileEmergency/Mversion';
import Roadsafety from './Components/MobileEmergency/Roadsafety';



function App() {
  
  return (
    <div className="App">
 
              
                <Route  exact path="/">
                  
                  <NavBar />
                  <Home />
                  <Footer/>
                </Route>
                  
                  <Route  path="/dashboard">
                    <Dashboard/>
                  </Route>
                  <Route  path="/signin">
                    <SignIn/>
                  </Route>
                  <Route  path="/signup">
                    <SignUp/>
                  </Route>
                  <Route  path="/create">
                    <AddAdmin/>
                  </Route>
                  <Route  path="/admindb">
                  <AdminDashboard/>
                  </Route>
                  <Route  path="/update">
                  <Update/>
                  </Route>
                  <Route  path="/Mversion">
                  <Mversion/>
                  </Route>
                  <Route  path="/roadsafety">
                  <Roadsafety/>
                  </Route>
            
    </div>
  );
}

export default App;