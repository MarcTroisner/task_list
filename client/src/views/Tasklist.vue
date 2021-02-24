<template>
  <div class="taskListView">
    <TaskInput/>
  </div>
</template>

<script>
import TaskInput from '@/components/TaskInput.vue';

export default {
  components: {
    TaskInput,
  },
};
</script>

<style lang="scss" scoped>
.taskListView {
  margin: 10em 20em 4em 20em;
}
</style>
