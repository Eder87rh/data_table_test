export const state = {
    sortBy:'date',
    sortOrientation:'desc'
}

export const mutations = {
    sortById:(state) => state.sortBy = 'id',
    sortByName:(state) => state.sortBy = 'name',
    sortByDescription:(state) => state.sortBy = 'description',
    sortByDate:(state) => state.sortBy = 'date',
    sortByAmount:(state) => state.sortBy = 'amount',
    toggleSort:(state) => state.sortOrientation === 'asc' ? state.sortOrientation = 'desc' : state.sortOrientation = 'asc'
}

export const actions = {

}

export const getters = {
    paymentsOrdered: (state,getters,rootState) => {
        return rootState.modPayments.payments.sort((a,b) => {
            switch(state.sortBy){
                case 'id':
                    return returnOrderedValue(a.id, b.id)
                case 'name':
                    return returnOrderedValue(a.name, b.name)
                case 'description':
                    return returnOrderedValue(a.description, b.description)    
                case 'date':
                    let date1 = Date.parse(a.date)
                    let date2 = Date.parse(b.date)

                    return returnOrderedValue(date1, date2)
                case 'amount':
                    return returnOrderedValue(a.amount, b.amount)
                default:
                    break;
            }
        })
    }
}

function returnOrderedValue(val1, val2){
    console.log(state.sortOrientation)
    if(state.sortOrientation === 'desc'){
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