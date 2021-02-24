<template>
  <div class="taskListView">
    <TaskInput class="newTask" />
    <ul>
      <li>
        <Task v-bind:data="{ created: '2020-02-20',
        task: 'sometasksometask sometaskometaetasksom etasksom etasksometasaaa aksometask som' }" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskInput from '@/components/TaskInput.vue';
import Task from '@/components/Task.vue';

export default {
  components: {
    TaskInput, Task,
  },
};
</script>

<style lang="scss" scoped>
.taskListView {
  margin: 10em 20em 4em 20em;
}
ul {
  list-style-type: none;
}
.newTask {
  margin-bottom: 5em;
}
</style>
