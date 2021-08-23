<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div>
        <div class="display-1">{{ task.title }} Details</div>
        <v-divider />
        <v-list subheader>
          <v-subheader>
            Sub-tasks
          </v-subheader>
          <v-list-item v-for="(subTask, index) in task.subTasks" :key="index">
            <v-list-item-title>
              {{ subTask.title }} <br />
              <v-list-item-subtitle>
                {{ subTask.created_at | formatDate }}
              </v-list-item-subtitle>
            </v-list-item-title>
            <v-list-item-action>
              <v-btn-toggle>
                <v-btn x-small class="mr-1" color="indigo"> Edit </v-btn>
                <v-btn x-small color="red"> Delete </v-btn>
              </v-btn-toggle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>
      <v-spacer></v-spacer>
      <v-btn x-small class="mr-1" color="indigo"> Edit </v-btn>
      <v-btn x-small color="red"> Delete </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped></style>
