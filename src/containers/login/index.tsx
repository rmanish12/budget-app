import React, { useState } from 'react'

import Login from '../../components/login'

import { connect } from 'react-redux'
import { onLogin } from '../../store/actions/user'

interface ILoginContainerProps {
    openRegisterForm: React.MouseEventHandler<HTMLButtonElement>;
    onLogin: Function
}

const login: React.FC<ILoginContainerProps> = (props): JSX.Element  => {

    const { openRegisterForm, onLogin } = props

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
        console.log('form submitted: ', email, password)
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

const mapDispatchToAction = dispatch => {
    return {
        onLogin: (user) => dispatch(onLogin(user))
    }
}

export default connect(null, mapDispatchToAction)(login)