<template>
  <div class="taskListView">
    <TaskInput
    class="newTask"
    @refresh="fetchTasks"
    />
    <ul v-if="fetchFinished">
      <li v-for="task in tasks" :key="task._id">
        <Task
        @open-popup="togglePopup"
        @refresh="fetchTasks"
        v-bind:data="task"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskInput from '@/components/TaskInput.vue';
import Task from '@/components/Task.vue';
import axios from 'axios';

export default {
  data() {
    return {
      tasks: null,
      fetchFinished: false,
    };
  },
  components: {
    TaskInput, Task,
  },
  methods: {
    async fetchTasks() {
      await axios.get('http://localhost:5000/tasks')
        .then((res) => {
          this.fetchFinished = false;
          this.tasks = res.data.tasks;
          this.fetchFinished = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchTasks();
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
