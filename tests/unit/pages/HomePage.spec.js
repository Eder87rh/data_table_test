import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DataTableHeader from '@/pages/HomePage.vue'
import store from '@/vuex/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage.vue', () => {
    it('match snapshot', () => {
        const titles = ['id', 'name', 'description', 'date', 'amount', 'actions']
        const wraper = shallowMount(DataTableHeader, {
            mocks: {
                titles,
                $store: store
            },
            localVue
        })
        expect(wraper.html()).toMatchSnapshot()
    })
})