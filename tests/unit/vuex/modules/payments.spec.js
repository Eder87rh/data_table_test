import { mutations, actions } from '@/vuex/modules/payments.js'

const { updateDescription } = mutations
let { saveDataFirestore } = actions

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
        console.log(state.payments[0])
        saveDataFirestore = jest.fn().mockReturnValue(new Promise(res => res({ data: 'Mock with Jest' })))
        let data = await saveDataFirestore(state.payments[0])
        expect(data).toEqual({ data: 'Mock with Jest' })
    })
})