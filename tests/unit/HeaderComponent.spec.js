import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '@/components/HeaderComponent.vue'

describe('HeaderComponent.vue', () => {
    it('renders props when passed', () => {
        const title = 'data-table brite core'
        const subtitle = 'created by Eder Ramírez Hernández'

        const wrapper = shallowMount(HeaderComponent, {
            propsData:{
                title: title,
                subtitle: subtitle,
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.props().title).toBe('data-table brite core')
        expect(wrapper.props().subtitle).toBe('created by Eder Ramírez Hernández')
    })

    it('title and subtitle props are required',() => {
        const wrapper = shallowMount(HeaderComponent)
        expect(wrapper.vm.$options.props.title.required).toBeTruthy()
        expect(wrapper.vm.$options.props.subtitle.required).toBeTruthy()
    })

    it('title and subtitle have to be String',() => {
        const wrapper = shallowMount(HeaderComponent)
        expect(wrapper.vm.$options.props.title.type).toBe(String)
        expect(wrapper.vm.$options.props.subtitle.type).toBe(String)
    })
})