import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { IProtectedRouteProps } from './types'

const protectedRoute = (props): JSX.Element => {

    const { Component, isAuthenticated, path } = props
    console.log('isAuthenticated: ', isAuthenticated)
    return (
        <Route 
            path = {path}
            render = {() => isAuthenticated ? <Component /> : <Redirect to="/"/>}
        />
    )

}

export default protectedRoute