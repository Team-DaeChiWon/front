import React from "react"
import {Routes, Route, Link} from 'react-router-dom';

import Login from './login/Login.js';
import Register from './login/Register.js';

function App(){
    return(
        <div>
            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
            </Routes>
        </div>
    )
}

export default App;