import React from "react"
import {Routes, Route, Link} from 'react-router-dom';

import Login from './Login.js';

function App(){
    return(
        <div>
            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </div>
    )
}

export default App;