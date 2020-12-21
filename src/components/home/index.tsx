import React from 'react'

import TotalBudget from './totalBudget'

import { IHomeComponentProps } from '../types'

const homeComponent: React.FC<IHomeComponentProps> = (props): JSX.Element => {

    const { getMonthlyBudgetOverview, budget } = props

    return (
        <>
            <TotalBudget getMonthlyBudgetOverview={getMonthlyBudgetOverview} monthlyBudget={budget.monthly}/>
        </>
    )
}

export default homeComponent