
import React from 'react';
//import { Rout } from './routes/Routes';

//import Form from "./components/SignIn/FormSI";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Landing from "./components/Landing/Landing";

import { NewPassword } from "./components/ResetPassword/NewPassword/NewPassword";
import { ResetPassword } from "./components/ResetPassword/ResetPassword";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route exact path="/Profile" element={<Profile />} />
            {/* <Register /> */}
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;