/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';

configure(require.context('../../stories', true, /\.stories\.js$/), module);
