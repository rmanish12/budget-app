export interface IBudgetReducerState {
    monthly: {
        income: number,
        expense: number,
        total: number,
        isLoading: boolean
    }
}

export interface IAction {
    type: string,
    payload: any
}

