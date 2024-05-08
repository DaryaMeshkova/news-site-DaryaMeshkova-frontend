import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from './pages/AuthPage/SignUp';
import MainPage from './pages/MainPage/MainPage';
import SignIn from './pages/AuthPage/SignIn';


const App = () => {
  return (
    <Router>
<Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
    </Routes>
    </Router>
    
  );
}

export default App;