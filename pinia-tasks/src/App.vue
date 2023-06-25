<template>
  <main>
    <header>
      <img src="./assets/img/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'" :class="{active: filter == 'all'}">All tasks </button>
      <button @click="filter = 'favs'" :class="{active: filter == 'favs'}">Fav tasks </button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>Yout have {{ taskStore.totalCount }} tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Yout have {{ taskStore.favsCount }} fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue';
  import TaskDetails from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';
  import { useTaskStore } from './store/TaskStore';

  export default {
    components: {
      TaskDetails,
      TaskForm
    },
      setup(){
        const taskStore = useTaskStore();
        const filter = ref('all')
        return { taskStore, filter }
      }
  }
</script>

<style lang="scss" scoped>
    .active{
      background-color: #ffe166;
      border-color: hsl(48, 100%, 55%);
      font-weight: 500;
    }
</style>