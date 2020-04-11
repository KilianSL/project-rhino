import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Rhino from './Rhino';

export default function AppRoutes(props:object){
    return(
        <>
        <Route path='/' exact component={Rhino} />
        </>
    )
}