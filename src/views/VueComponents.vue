<template>
  <div :class="$style.root">
    <Input
      :value="value"
      :placeholder="placeholder"
      @onValueChange="onInputValueChange"
    />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Input from '@src/components/atoms/Input.vue';

@Component({
  name: 'VueComponents',
  components: {
    Input,
  },
})
export default class VueComponents extends Vue {
  private value:string = 'test value';

  private placeholder:string = 'test placeholder';

  onInputValueChange(key:string):void {
    // console.log('onInputValueChange(): ', key);
    this.value = key;
  }
}
</script>


<style lang="scss" module>
.root {
  position: relative;
  width: 80%;
  margin: 0 auto;

  .inputWrapper {
    position: relative;
    width: 200px;
  }
}
</style>
