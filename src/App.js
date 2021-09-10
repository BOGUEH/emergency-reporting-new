import './App.css';
import {Route} from "react-router-dom";
import SignUp from './Components/SignInSignUp/SignUp';

import AdminDashboard from './Components/Admindb/AdminDashboard';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import SignIn from './Components/SignInSignUp/SignIn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import NavBarLite from  './Components/NavBarLite/NavBarLite'
import Footer from './Components/Footer';
import Dashboard from './Components/DashBoard/Dashboard';
import Update from './Components/Update/Update';
import Mversion from './Components/MobileEmergency/Mversion';
import Roadsafety from './Components/MobileEmergency/Roadsafety';
import FireService from "./Components/MobileEmergency/FireService";
import MedicalService from "./Components/MobileEmergency/MedicalService";
import PoliceService from "./Components/MobileEmergency/PoliceService";


function App() {

    return (
        <div className="App">


            <Route exact path="/">

                <NavBar/>
                <Home/>
                <Footer/>
            </Route>

            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/signin">
                <NavBarLite/>
                <SignIn/>
                <Footer/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/create">
                <AddAdmin/>
            </Route>
            <Route path="/admindb">
                <NavBarLite/>
                <AdminDashboard/>
                <Footer/>
            </Route>
            <Route path="/update">
                <Update/>
            </Route>
            <Route path="/Mversion">
                <NavBarLite/>
                <Mversion/>
                <Footer/>
            </Route>
            <Route path="/roadsafety">
                <NavBarLite/>
                <Roadsafety/>
                <Footer/>
            </Route>
            <Route path="/fireservice">
                <NavBarLite/>
                <FireService/>
                <Footer/>
            </Route>
            <Route path="/medicalservice">
                <NavBarLite/>
                <MedicalService/>
                <Footer/>
            </Route>
            <Route path="/policeservice">
                <NavBarLite/>
                <PoliceService/>
                <Footer/>
            </Route>
        </div>
    );
}

export default App;