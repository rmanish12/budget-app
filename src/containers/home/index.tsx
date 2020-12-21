import React from 'react'
import { connect } from 'react-redux'

import { getMonthlyBudgetOverview } from '../../store/actions/budget'

import HomeComponent from '../../components/home'

import { IHomeContainerProps } from '../types'

const home: React.FC<IHomeContainerProps> = (props): JSX.Element => {

    const { getMonthlyBudgetOverview, budget } = props

    return (
        <>
            <HomeComponent getMonthlyBudgetOverview={getMonthlyBudgetOverview} budget={budget}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        budget: state.budget
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMonthlyBudgetOverview: () => dispatch(getMonthlyBudgetOverview())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)