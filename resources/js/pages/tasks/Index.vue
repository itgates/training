<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div>
        <div class="display-1">Tasks</div>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary"> Create Task </v-btn>
    </div>
    <v-card flat>
      <v-card-text>
        <v-list>
        <task-header v-for="todo in todos" :key="todo.id" :task="todo" />
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TaskHeader from "../../components/tasks/TaskHeader.vue";
export default {
  components: { TaskHeader },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions(["loadTodos"]),
    initialize() {
      this.loadTodos();
    }
  },
  computed: {
    ...mapState(["todos"])
  }
};
</script>

<style scoped>
</style>
