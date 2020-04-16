import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Home, Rhino} from '../../components';

export default function AppRoutes(props:object){
    return(
        <>
        <Route path='/' exact component={Home} />
        <Route path='/contribute' exact component={Rhino} />
        </>
    )
}