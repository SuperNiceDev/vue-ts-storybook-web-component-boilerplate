<template>
  <div
    :class="{
      [$style.root]: true,
      [$style.filledOrFocused]: computedFilledOrFocused
    }"
  >
    <div :class="$style.placeholder">
      {{computedPlaceholder}}
    </div>
    <input
      :class="$style.input"
      type="text"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      v-model="stateValue"
    >
  </div>
</template>


<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';

const DEFAULT_PLACEHOLDER = 'default placeholder';

@Component({
  mounted() {
    this.stateValue = this.value;
  },
})
export default class Input extends Vue {
  private stateValue:string = '';

  private focused:boolean = false;

  @Prop({ default: '' }) value!: string;

  @Prop({ default: '' }) placeholder!: string;

  @Prop({ default: () => {} }) onvaluechange!: Function;

  @Watch('value')
  onValueChanged(val: string, oldVal: string) {
    this.stateValue = val;
  }

  onFocus():void {
    this.focused = true;
  }

  onBlur():void {
    this.focused = false;
  }

  onInput(newInputValue:string):void {
    this.$emit('onValueChange', this.stateValue);
    if (this.onvaluechange) {
      /* eslint-disable-next-line */
      // console.log('onInput() this.onvaluechange: ', this.onvaluechange);
      this.onvaluechange(this.stateValue);
    }
  }

  get computedFilledOrFocused():boolean {
    return !!(this.focused || this.value);
  }

  get computedPlaceholder():string {
    const test = this.placeholder || DEFAULT_PLACEHOLDER;
    return test;
    // return 'fff';
  }
}
</script>


<style lang="scss" module>
.root {
  position: relative;
  width: 100%;
  border: 1px solid grey;

  .input {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2px 6px;
    background-color: transparent;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
    outline: 0;
    box-shadow: none;
  }

  .placeholder {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 6px;
    color: grey;
    line-height: 1.36;
    transition: all 300ms ease-in-out;
  }

  &.filledOrFocused {
    .placeholder {
      top: -100%;
      transform: scale(0.9);
      transform-origin: left center;
    }
  }
}
</style>
