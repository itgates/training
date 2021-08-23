<template>
  <v-row justify="center">
    <!-- task details start -->
    <v-dialog
      v-if="task"
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ task.title }} Details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>
            Sub-tasks
          </v-subheader>
          <v-list-item v-for="(subTask, index) in task.sub_tasks" :key="index">
            <v-list-item-title>
              {{ subTask.body }} <br />
              <v-list-item-subtitle class="mt-2">
                {{ subTask.created_at | formatDate }}
              </v-list-item-subtitle>
            </v-list-item-title>
            <v-list-item-action>
              <v-btn-toggle>
                <v-btn small dark class="mr-1" @click="$refs.editSubTaskDialog.open(subTask)">Edit</v-btn>
                <v-btn small dark> Delete </v-btn>
              </v-btn-toggle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    <!-- /task details end -->

    <!-- edit sub-task dialog -->
    <edit-sub-task-dialog ref="editSubTaskDialog" />
  </v-row>
</template>

<script>
import EditSubTaskDialog from "./EditSubTaskDialog";

export default {
  components: {
    EditSubTaskDialog
  },
  data () {
    return {
      dialog: false,
      task: null
    }
  },
  methods: {
    open(task) {
      this.task = {...task}
      this.dialog = true;
    }
  },
}
</script>

<style scoped>

</style>
