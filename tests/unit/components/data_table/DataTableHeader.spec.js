import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import DataTableHeader from '@/components/data_table/DataTableHeader.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DataTableHeader.vue',() => {
    it('match snapshot with titles',() => {
        const titles = ['id', 'name', 'description', 'date', 'amount', 'actions']
        const wraper = shallowMount(DataTableHeader, {
            propsData:{
                titles
            },
            mocks: {
                $store: {
                    state: {
                        modFilters: {
                            sortBy: "date",
                            sortOrientation: "desc"
                        }
                    }
                }
            },
            localVue
        })

        expect(wraper.html()).toMatchSnapshot()
    })
})