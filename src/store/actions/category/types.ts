interface categories {
    id: number,
    name: string
}

export interface GetCategoriesSuccessAction {
    type: string,
    payload: {
        income: categories[],
        expense: categories[]
    }
}

export interface GetCategoriesFailureAction {
    type: string,
    payload: {
        error: string
    }
}