import React, { useState } from 'react'

import Login from '../../containers/login'
import Register from '../../containers/register'

const main = (props): JSX.Element => {

    const [login, setLogin] = useState<boolean>(true)

    const openRegisterForm = (e) => {
        setLogin(false)
    }

    const openLoginForm = (e) => {
        setLogin(true)
    }

    return (
        <>
            { login ? <Login openRegisterForm={openRegisterForm}/>: null}
            { !login ? <Register openLoginForm={openLoginForm}/>: null}
        </>
    )
}

export default main