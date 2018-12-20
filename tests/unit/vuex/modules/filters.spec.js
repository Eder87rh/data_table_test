import { mutations, actions, getters } from '@/vuex/modules/filters.js'
/* import rootState from '@/vuex/store'

console.log(rootState.state) */


const { setSortBy } = mutations
const { paymentsOrdered } = getters

const state = {
    sortBy:'date',
    sortOrientation:'desc'
}

const rootState = {
    modPayments:{
        payments: [
            {
                id:'3471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'Kyra Lester',
                description:'Curabitur dictum. Phasellus in',
                date:'2017-07-23T04:24:49-07:00',
                amount:'345.54'
            },
            {
                id:'3471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'Kyra Lester',
                description:'Curabitur dictum. Phasellus in',
                date:'2018-07-23T04:24:49-07:00',
                amount:'345.54'
            },
            {
                id:'3471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'Kyra Lester',
                description:'Curabitur dictum. Phasellus in',
                date:'2019-07-23T04:24:49-07:00',
                amount:'345.54'
            },
        ]
    }
} 

describe('filters.js mutations', () => {
    it('setSortBy id works correctly', () => {
        setSortBy(state, 'id')
        expect(state.sortBy).toBe('id')
        expect(state.sortOrientation).toBe('asc')
    })

    it('setSortBy date works correctly', () => {
        setSortBy(state, 'date')
        expect(state.sortBy).toBe('date')
        expect(state.sortOrientation).toBe('desc')
    })

    it('setSortBy name works correctly', () => {
        setSortBy(state, 'name')
        expect(state.sortBy).toBe('name')
        expect(state.sortOrientation).toBe('asc')
    })

    it('setSortBy description works correctly', () => {
        setSortBy(state, 'description')
        expect(state.sortBy).toBe('description')
        expect(state.sortOrientation).toBe('desc')
    })

    it('setSortBy amount works correctly', () => {
        setSortBy(state, 'amount')
        expect(state.sortBy).toBe('amount')
        expect(state.sortOrientation).toBe('asc')
    })
})

describe('filters.js getters',() => {
    it('paymentsOrdered order the data correctly', () => {
        const result = paymentsOrdered(state, null,rootState)
        console.log('result',result)
        //expect(result[0]).toEqual([])
    })
})