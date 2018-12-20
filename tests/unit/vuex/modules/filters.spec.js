import { mutations, actions, getters } from '@/vuex/modules/filters.js'
import rootState from '@/vuex/store'

console.log(rootState.state)


const { setSortBy,setSortOrientationDesc,setSortOrientationAsc } = mutations
const { paymentsOrdered } = getters

const state = {
    sortBy:'date',
    sortOrientation:'desc'
}

/* const rootState = {
    modPayments:{
        payments: [
            {
                id:'1471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'AKyra Lester',
                description:'Aurabitur dictum. Phasellus in',
                date:'2017-07-23T04:24:49-07:00',
                amount:'145.54'
            },
            {
                id:'2471DA17-401F-9633-BF81-4CADA6FD5C79',
                name:'BKyra Lester',
                description:'Burabitur dictum. Phasellus in',
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
} */

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
    it('paymentsOrdered order data by date and desc correctly', () => {
        setSortBy(state, 'date')
        setSortOrientationDesc(state)
        const result = paymentsOrdered(state, null,rootState.state)
        console.log(result[0].date)
        expect(result[0].date).toEqual('2019-10-28T04:57:29-07:00')
    })

    it('paymentsOrdered order data by date and asc correctly', () => {
        setSortBy(state, 'date')
        setSortOrientationAsc(state)
        console.log('STATE', state)
        const result = paymentsOrdered(state, null,rootState.state)
        console.log(result[0].date)
        //expect(result[0].date).toEqual('2019-10-28T04:57:29-07:00')
    })

   /*  it('paymentsOrdered order data by date and asc correctly', () => {
        setSortBy(state, 'date')
        setSortOrientationAsc(state)
        console.log(rootState.modPayments.payments[0])
        const result = paymentsOrdered(state, null,rootState)
        expect(result[0]).toEqual({ 
            id:'1471DA17-401F-9633-BF81-4CADA6FD5C79',
            name:'AKyra Lester',
            description:'Aurabitur dictum. Phasellus in',
            date:'2017-07-23T04:24:49-07:00',
            amount:'145.54'
        })
    }) */
})

