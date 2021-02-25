<template>
  <div class="popupContainer">
    <div class="popupContent">
      <p>Are you sure you want to delete this task?
      It will be gone forever (a very long time!)</p>
      <Button
      @click="$emit('delete')"
      class="delete"
      btnTxt="Yes, delete it"
      type="btn-delete"
      />
      <Button
      @click="$emit('keep')"
      class="keep"
      btnTxt="No, keep it"
      type="btn-keep"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.popupContainer {
  display: grid;
  place-content: center center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: map-get($colors, popup-bg);
  .popupContent {
    display: grid;
    grid-template-rows: 1fr 0.4fr;
    grid-template-areas: 'txt txt'
                          'delete keep';
    padding: 3em 5em;
    width: 35em;
    height: 15em;
    z-index: 999;
    background: map-get($colors, main-bg);
    .delete {
      grid-area: delete;
      place-self: center;
    }
    .keep {
      grid-area: keep;
      place-self: center;
    }
    p {
      grid-area: txt;
      font-family: $task-font;
      color: $task-color;
      text-align: center;
    }
  }
}
</style>
