import { mutations, getters } from '@/vuex/modules/filters.js'
import { root } from 'postcss-selector-parser';



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
        const state = {
            sortBy:'id',
            sortOrientation:'desc'
        }

        const result = paymentsOrdered(state, null,rootState)
        expect(result[0].id).toEqual('3471DA17-401F-9633-BF81-4CADA6FD5C79')
    })

    it('paymentsOrdered order data by Id and ASC correctly', () => {
        const state = {
            sortBy:'id',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(state, null,rootState)
        expect(result[0].id).toEqual('1471DA17-401F-9633-BF81-4CADA6FD5C79')
    })

    it('paymentsOrdered order data by DATE and DESC correctly',() => {
        const state = {
            sortBy:'date',
            sortOrientation:'desc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].date).toEqual('2019-07-23T04:24:49-07:00')
    })

    it('paymentsOrdered order data by DATE and ASC correctly',() => {
        const state = {
            sortBy:'date',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].date).toEqual('2017-07-23T04:24:49-07:00')
    })

    it('paymentsOrdered order data by NAME and DESC correctly',() => {
        const state = {
            sortBy:'name',
            sortOrientation:'desc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].name).toEqual('CKyra Lester')
    })

    it('paymentsOrdered order data by NAME and ASC correctly',() => {
        const state = {
            sortBy:'name',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].name).toEqual('AKyra Lester')
    })

    it('paymentsOrdered order data by DESCRIPTION and DESC correctly',() => {
        const state = {
            sortBy:'description',
            sortOrientation:'desc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].description).toEqual('Curabitur dictum. Phasellus in')
    })

    it('paymentsOrdered order data by DESCRIPTION and ASC correctly',() => {
        const state = {
            sortBy:'description',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].description).toEqual('ACurabitur dictum. Phasellus in')
    })

    it('paymentsOrdered order data by AMOUNT and DESC correctly',() => {
        const state = {
            sortBy:'amount',
            sortOrientation:'desc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].amount).toEqual('345.54')
    })
    it('paymentsOrdered order data by AMOUNT and ASC correctly',() => {
        const state = {
            sortBy:'amount',
            sortOrientation:'asc'
        }

        const result = paymentsOrdered(state, null, rootState)
        expect(result[0].amount).toEqual('145.54')
    })

    


})
