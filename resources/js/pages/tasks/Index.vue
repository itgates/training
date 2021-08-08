<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div>
        <div class="display-1">Tasks</div>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary">
        Create Task
      </v-btn>
    </div>
    <v-card flat>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Study Javascript
            </v-list-item-title>
            <v-list-item-action>
              <router-link style="text-decoration: none" :to="{ name: 'task-show', params: { id: 1 } }">
                <v-btn>
                  Details
                </v-btn>
              </router-link>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Study React.js
            </v-list-item-title>
            <v-list-item-action>
              <router-link style="text-decoration: none" :to="{ name: 'task-show', params: { id: 2 } }">
                <v-btn>
                  Details
                </v-btn>
              </router-link>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Study NodeJs
            </v-list-item-title>
            <v-list-item-action>
              <router-link style="text-decoration: none" :to="{ name: 'task-show', params: { id: 3 } }">
                <v-btn>
                  Details
                </v-btn>
              </router-link>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
