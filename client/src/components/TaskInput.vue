<template>
  <form @submit.prevent="postTask" class="taskInputContainer">
    <input
    v-model="taskTxt"
    type="text"
    placeholder="Your fancy task"
    >
    <Button
    btnTxt="Add task"
    type="btn-submit"
    />
  </form>
</template>

<script>
import Button from '@/components/Button.vue';
import axios from 'axios';

export default {
  data() {
    return {
      taskTxt: null,
    };
  },
  components: {
    Button,
  },
  methods: {
    async postTask() {
      await axios.post('http://localhost:5000/tasks', { data: { task: this.taskTxt } });
      this.taskTxt = null;
      this.$emit('refresh');
    },
  },
};
</script>

<style lang="scss" scoped>
.taskInputContainer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 3.4em;
  width: 100%;
  input[type="text"] {
    outline: none;
    padding: 0 2em;
    width: 100%;
    height: 100%;
    border: 2px solid map-get($colors, main);
    border-radius: 5px 0 0 5px;
    font-size: 0.9em;
  }
  input[type="text"]::placeholder {
    color: $placeholder-color;
    font-style: $placeholder-style;
    font-family: $placeholder-font;
  }
}
</style>
