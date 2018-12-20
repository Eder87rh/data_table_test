import { mutations, actions, getters } from '@/vuex/modules/payments.js'

const { updateDescription } = mutations
let { saveDataFirestore } = actions
const { dateTimeFormat } = getters

const state = {
    payments: [
        {
            id:'3471DA17-401F-9633-BF81-4CADA6FD5C79',
            name:'Kyra Lester',
            description:'Curabitur dictum. Phasellus in',
            date:'2017-07-23T04:24:49-07:00',
            amount:'345.54'
        },
    ]
}

describe('payments.js mutations', () => {
    it('updateDescription works fine', () => {
        updateDescription(state, {index:0, description:'new description'})
        expect(state.payments[0].description).toBe('new description')
    })
})

describe('payments actions',() => {
    it('saveDataFirestore save the payment correctly', async () => {
        saveDataFirestore = jest.fn().mockReturnValue(new Promise(res => res({ data: 'Mock with Jest' })))
        let data = await saveDataFirestore(state.payments[0])
        expect(data).toEqual({ data: 'Mock with Jest' })
    })
})

describe('payments getters',() => {
    it('dateTimeFormat return the correct format', () => {
        const dateTime = '2017-07-23T04:24:49-07:00'
        const result = dateTimeFormat()(dateTime)
        expect(result).toEqual('7/23/2017, 11:24:49 AM')
    })
})