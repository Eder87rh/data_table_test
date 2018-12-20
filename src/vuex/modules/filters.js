export const state = {
    sortBy:'date',
    sortOrientation:'desc'
}

export const mutations = {
    setSortBy:(state, title) => state.sortBy = title,
    toggleSortOrientation:(state) => state.sortOrientation === 'asc' ? state.sortOrientation = 'desc' : state.sortOrientation = 'asc',
    setSortOrientationDesc:(state) => state.sortOrientation = 'desc',
    setSortOrientationAsc:(state) => state.sortOrientation = 'asc',
}

export const actions = {

}

export const getters = {
    paymentsOrdered: ({sortBy, sortOrientation},getters,rootState) => {
        return rootState.modPayments.payments.sort((a,b) => {
            switch(sortBy){
                case 'id':
                    return returnOrderedValue(a.id, b.id, sortOrientation)
                case 'name':
                    return returnOrderedValue(a.name, b.name, sortOrientation)
                case 'description':
                    return returnOrderedValue(a.description, b.description, sortOrientation)    
                case 'date':
                    let date1 = Date.parse(a.date)
                    let date2 = Date.parse(b.date)

                    return returnOrderedValue(date1, date2, sortOrientation)
                case 'amount':
                    return returnOrderedValue(a.amount, b.amount, sortOrientation)
                default:
                    break;
            }
        })
    }
}

function returnOrderedValue(val1, val2, orientation){
    if(orientation === 'desc'){
        return val1 < val2 ? 1 : -1
    }else{
        return val1 > val2 ? 1 : -1
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}