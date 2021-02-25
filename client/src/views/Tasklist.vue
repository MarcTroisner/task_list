<template>
  <div class="taskListView">
    <div class="newTaskContainer">
      <TaskInput
      class="newTask"
      @refresh="fetchTasks"
      @error-null="errorObj.emptyInput = true"
      @catched-error="errorObj.noConnection = true"
      />
      <p class="error"
      v-if="errorObj.emptyInput === true">Please make sure your input isn't empty.</p>
      <p class="error"
      v-if="errorObj.noConnection === true">No connection to server. Try again later.</p>
    </div>
    <p class="noTasks" v-if="fetchFinished && tasks[0] === undefined">
      Seems like you don't have any tasks yet...
    </p>
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
      errorObj: {
        emptyInput: false,
        noConnection: true,
      },
    };
  },
  components: {
    TaskInput, Task,
  },
  methods: {
    async fetchTasks() {
      try {
        const res = await axios.get('http://localhost:5000/tasks');
        this.resetVariables();
        this.tasks = res.data.tasks;
        this.fetchFinished = true;
      } catch (error) {
        this.errorObj.noConnection = true;
      }
    },
    resetVariables() {
      this.fetchFinished = false;
      this.errorObj.emptyInput = false;
      this.errorObj.noConnection = false;
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
.newTaskContainer {
  margin-bottom: 5em;
  .error {
    margin-top: 2em;
    color: map-get($colors, btn-delete);
    font-family: $task-font;
    text-align: center;
  }
}
.noTasks {
  color: $task-color;
  font-family: $task-font;
  text-align: center;
}
</style>
