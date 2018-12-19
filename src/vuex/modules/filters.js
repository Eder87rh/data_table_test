export const state = {
    sortBy:'id',
    sortOrientation:'desc'
}

export const mutations = {
    sortById:(state) => state.sortBy = 'id',
    sortByDate:(state) => state.sortBy = 'date',
    sortAsc:(state) => state.sortOrientation = 'asc',
    sortDesc:(state) => state.sortOrientation = 'desc',
}

export const actions = {

}

export const getters = {
    paymentsOrdered: (state,getters,rootState) => {
        console.log(rootState)
        return rootState.modPayments.payments.sort((a,b) => {
            switch(state.sortBy){
                case 'id':
                    if(state.sortOrientation === 'desc'){
                        return a.id < b.id ? 1 : -1
                    }else{
                        return a.id > b.id ? 1 : -1
                    }
                case 'date':
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