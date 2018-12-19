export const state = {
    sortBy:'date',
    sortOrientation:'desc'
}

export const mutations = {
    sortById:(state) => state.sortBy = 'id',
    sortByDate:(state) => state.sortBy = 'date',
    toggleSort:(state) => state.sortOrientation === 'asc' ? state.sortOrientation = 'desc' : state.sortOrientation = 'asc'
}

export const actions = {

}

export const getters = {
    paymentsOrdered: (state,getters,rootState) => {
        return rootState.modPayments.payments.sort((a,b) => {
            switch(state.sortBy){
                case 'id':
                    if(state.sortOrientation === 'desc'){
                        return a.id < b.id ? 1 : -1
                    }else{
                        return a.id > b.id ? 1 : -1
                    }
                case 'date':
                    let date1 = Date.parse(a.date)
                    let date2 = Date.parse(b.date)

                    if(state.sortOrientation === 'desc'){
                        return date1 < date2 ? 1 : -1
                    }else{
                        return date1 > date2 ? 1 : -1
                    }
                    break;
                default:
                    break;
            }
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}