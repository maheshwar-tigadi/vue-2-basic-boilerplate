import { shallowMount } from '@vue/test-utils'
import home from '@/views/home'
import { i18n } from '@/plugins/vue-i18n';

describe('home.test.js', () => {
    let cmp;
    beforeEach(() => {
        cmp = shallowMount(home, {
            i18n
        })
    })

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot()
    })
})