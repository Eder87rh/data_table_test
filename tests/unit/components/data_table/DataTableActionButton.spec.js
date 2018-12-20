import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DataTableActionButton from '@/components/data_table/DataTableActionButton.vue'
import store from '@/vuex/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DataTableActionButton.vue', () => {
    it('match snapshot',() => {
        const wraper = shallowMount(DataTableActionButton, {
            mocks: {
                $store: store
            },
            propsData:{
                title:'Save to Firestore',
                action:() =>{}
            },
            localVue
        })
        expect(wraper.html()).toMatchSnapshot()
    })
})