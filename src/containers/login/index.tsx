import React, { useState } from 'react'

import Login from '../../components/login'

interface ILoginContainerProps {
    openRegisterForm: React.MouseEventHandler<HTMLButtonElement>
}

const login: React.FC<ILoginContainerProps> = (props): JSX.Element  => {

    const { openRegisterForm } = props

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

export default login