import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Rhino from './Rhino';
import Home from './Home';

export default function AppRoutes(props:object){
    return(
        <>
        <Route path='/' exact component={Home} />
        <Route path='/contribute' exact component={Rhino} />
        </>
    )
}