<template>
  <input type="submit" :class="type" :value="btnTxt">
</template>

<script>
export default {
  props: {
    btnTxt: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
input[type="submit"] {
  border: none;
  outline: none;
  width: 9em;
  height: 100%;
  cursor: pointer;
  transition: 0.5s;
}
.btn-delete {
  background: map-get($colors, btn-delete);
  color: $btn-delete-color;
  font-size: 0.9em;
  font-family: $btn-font;
  border-radius: 5px;
}
.btn-keep {
  background: map-get($colors, btn-keep);
  color: $btn-keep-color;
  font-size: 0.9em;
  font-family: $btn-font;
  border-radius: 5px;
}
.btn-submit {
  background: map-get($colors, main);
  color: $btn-submit-color;
  font-size: 1em;
  font-family: $btn-font;
  border-radius: 0px 5px 5px 0px;
}
</style>
