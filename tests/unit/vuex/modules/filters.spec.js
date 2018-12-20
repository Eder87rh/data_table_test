import { mutations, actions, getters } from '@/vuex/modules/filters.js'
//import rootState from '@/vuex/store'
//console.log(rootState.state)


const { setSortBy, toggleSortOrientation, setSortOrientationDesc, setSortOrientationAsc } = mutations
const { paymentsOrdered } = getters

const state = {
    sortBy:'id',
    sortOrientation:'desc'
}

const rootState = {
    modPayments:{
        payments: [
            {
                id:'1471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'AKyra Lester',
                description:'ACurabitur dictum. Phasellus in',
                date:'2017-07-23T04:24:49-07:00',
                amount:'145.54'
            },
            {
                id:'2471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'BKyra Lester',
                description:'BCurabitur dictum. Phasellus in',
                date:'2018-07-23T04:24:49-07:00',
                amount:'245.54'
            },
            {
                id:'3471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'CKyra Lester',
                description:'Curabitur dictum. Phasellus in',
                date:'2019-07-23T04:24:49-07:00',
                amount:'345.54'
            },
        ]
    }
}

describe('filters.js mutations', () => {
    it('setSortBy can be changed', () => {
        setSortBy(state, 'date')
        expect(state.sortBy).toBe('date')
        expect(state.sortOrientation).toBe('desc')
    })

    it('sortOrientation can be toggle', () =>{
        toggleSortOrientation(state)
        expect(state.sortOrientation).toBe('asc')
    })

    it('setting setSortOrientationAsc works', () => {  
        setSortOrientationAsc(state)
        expect(state.sortOrientation).toBe('asc')
    })

    it('setting setSortOrientationDesc works', () => {
        setSortOrientationDesc(state)
        expect(state.sortOrientation).toBe('desc')
    })
})

describe('filters.js getters',() => {
    it('paymentsOrdered order data by Id and DESC correctly', () => {
        const stateIdDesc = {
            sortBy:'id',
            sortOrientation:'desc'
        }


        const result = paymentsOrdered(stateIdDesc, null,rootState)
        console.log(result[0].id)
        expect(result[0].id).toEqual('3471DA17-401F-9633-BF81-4CADA6FD5C79')
    })

    it('paymentsOrdered order data by Id and ASC correctly', () => {
        const stateIdAsc = {
            sortBy:'id',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(stateIdAsc, null,rootState)
        console.log(result[0].id) 
        expect(result[0].id).toEqual('1471DA17-401F-9633-BF81-4CADA6FD5C79')
    })

    


})
