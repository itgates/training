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
          <task v-for="(task,index) in tasks" :key="index" :task="task" />
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Task from "../../components/tasks/Task";

export default {
  components: { Task },
   computed: {
    ...mapState(["tasks"])
  },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions(["loadTasks"]),
    initialize() {
      this.loadTasks();
    }
  }

};
</script>

<style scoped>
</style>
