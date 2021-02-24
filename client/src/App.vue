<template>
  <div class="appContainer">
    <Tasklist/>
  </div>
</template>

<script>
import Tasklist from '@/views/Tasklist.vue';

export default {
  components: {
    Tasklist,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
