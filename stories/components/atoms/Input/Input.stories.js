import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from '@src/components/atoms/Input.vue';
import globalStyles from '@stories/styles/globals.module.scss';
import styles from './Input.stories.module.scss';
import markdown from './docs.md';

export default {
  title: 'components|atoms/Input',
  // decorators: [withKnobs],
  parameters: {
    //     notes: `
    // Input component:\n
    // - info 1\n
    // - info 2\n
    // `,
    notes: { markdown },
  },
};

export const input = () => ({
  components: {
    Input,
  },
  props: {
    classname: {
      default: text('classname', 'test-classname'),
    },
    value: {
      default: text('value', 'test value'),
    },
    placeholder: {
      default: text('placeholder', 'test placeholder'),
    },
  },
  computed: {
    computedGlobalStyles() {
      return globalStyles;
    },
    computedStyles() {
      return styles;
    },
  },
  methods: {
    onInputValueChange: (key) => {
      action('onInputValueChange(): ')(key);
    },
  },
  template: `<div :class="computedGlobalStyles.storyRoot">
    <div :class="computedStyles.inputWrapper">
      <Input
        :classname="classname"
        :value="value"
        :placeholder="placeholder"
        @onValueChange="onInputValueChange"
      />
    </div>
  </div>`,
});

// input.story = {
//   parameters: {
//     notes: { markdown },
//   }
// };
