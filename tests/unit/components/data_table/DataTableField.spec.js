import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DataTableField from '@/components/data_table/DataTableField.vue'
import store from '@/vuex/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DataTableField.vue',() => {
    it('match snapshot normal field',() => {
        const wraper = shallowMount(DataTableField, {
            mocks: {
                $store: store
            },
            propsData:{
                data:'Test',
                index:0,
                editable:false
            },
            localVue
        })
        expect(wraper.html()).toMatchSnapshot()
    })

    it('match snapshot editable field',() => {
        const wraper = shallowMount(DataTableField, {
            mocks: {
                $store: store
            },
            propsData:{
                data:'Editable',
                index:0,
                editable:true
            },
            localVue
        })
        expect(wraper.html()).toMatchSnapshot()
    })
})