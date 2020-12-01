import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { authenticateUser } from '../../store/actions/user'

import { IHomeContainerProps } from '../types'

const home: React.FC<IHomeContainerProps> = (props): JSX.Element => {

    const { authenticateUser } = props

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <>
            Home page
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: () => dispatch(authenticateUser())
    }
}

export default connect(null, mapDispatchToProps)(home)