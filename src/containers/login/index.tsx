import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 

import { onLogin } from '../../store/actions/user'
import Login from '../../components/login'

import { ILoginContainerProps } from '../types'

const login: React.FC<ILoginContainerProps> = (props): JSX.Element  => {

    const { openRegisterForm, onLogin, user } = props

    const { isAuthenticated } = user

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
        if(!email && !password) {
            onErrorChange('Please provide username and password')
        } else {
            const user = {
                email,
                password
            }

            onLogin(user)
        }
    }

    const onErrorChange = (message: string) => {
        setError(message)
    }

    // if user is authenticated, redirect to homepage
    useEffect(() => {
        if(isAuthenticated) {
            props.history.push("/home")
        }
    }, [isAuthenticated])

    return (
        <>
            <Login
                email={email}
                password={password}
                error={error}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onFormSubmit={onFormSubmit}
                openRegisterForm={openRegisterForm}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToAction = dispatch => {
    return {
        onLogin: (user) => dispatch(onLogin(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToAction)(login))