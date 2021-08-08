<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div v-if="todo">
        <div class="display-1">{{ todo.title }}</div>
      </div>
      <v-spacer></v-spacer>
      <v-btn x-small class="mr-1" color="indigo" @click="$refs.editTaskModal.open()"> Edit </v-btn>
      <v-btn x-small color="red"> Delete </v-btn>
      <edit-task-modal ref="editTaskModal" />
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import EditTaskModal from "../../components/tasks/EditTaskModal.vue";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EditTaskModal
  },
  props: {
    // eslint-disable-next-line vue/require-prop-types
    id: {
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions(['loadTodo']),
    initialize() {
      this.loadTodo(this.id);
    }
  },
  computed: {
    ...mapState(["todo"])
  }
};
</script>

<style scoped></style>
