export interface GetMonthlyBudgetOverviewSuccessAction {
    type: string,
    payload: {
        income: number,
        expense: number,
        total: number
    }
}

export interface GetMonthlyBudgetOverviewFailureAction {
    type: string,
    payload: {
        error: string
    }
}