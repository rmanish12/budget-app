interface types {
    id: number,
    type: string
}

export interface GetTypesSuccessAction {
    type: string,
    payload: {
        budgetTypes: types[]
    }
}

export interface GetTypesFailureAction {
    type: string,
    payload: {
        error: string
    }
}