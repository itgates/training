<template>
  <div>
    <v-dialog
      v-if="subTask"
      v-model="dialog"
      hide-overlay
      transition="dialog-bottom-transition"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title>
          Edit {{ subTask.body }}
        </v-card-title>
        <v-card-text>
          <v-textarea
            v-model="updatedSubTask.body"
            solo
            flat
            label="Body"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="" dark>cancel</v-btn>
          <v-spacer />
          <v-btn @click="" dark>update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      subTask: null,
      updatedSubTask: {}
    }
  },
  methods: {
    open(subTask) {
      this.subTask = subTask;
      this.updatedSubTask = { ...subTask }
      this.dialog = true;
    }
  },
}
</script>
