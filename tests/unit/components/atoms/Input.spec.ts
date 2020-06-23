import {
  shallowMount,
  mount,
} from '@vue/test-utils';

import Input from '@/components/atoms/Input.vue';

const value = 'test value';
const placeholder = 'test placeholder';

describe('Input.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Input);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('matches snapshot', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        value,
        placeholder,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
