import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Register}/>
        </BrowserRouter>
    )
}