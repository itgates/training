<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col v-if="editableTodo" cols="12">
                <v-text-field
                  v-model="editableTodo.title"
                  label="Title*"
                ></v-text-field>
              </v-col>
              <v-col v-if="editableTodo" cols="12">
                <v-textarea
                  v-model="editableTodo.details"
                  label="Details*"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import func from 'vue-editor-bridge';
import { mapState,mapActions } from 'vuex'

export default {
  data () {
      return {
          dialog: false,
          editableTodo:null
      }
  },
  computed:{
      ...mapState(['todo'])
  },
  created() {
      this.initialize()
  },
  methods: {
    initialize() {
        this.editableTodo = this.todo
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    submit() {
      axios.put(`/api/todos/${this.todo.id}`).then((response) => {
         this.todo.title = this.editableTodo.title
         this.todo.details = this.editableTodo.details
          this.close()
      });
    }
  }
};
</script>