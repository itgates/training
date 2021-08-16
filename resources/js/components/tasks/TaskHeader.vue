<template>
  <v-list-item>
    <v-list-item-title>
      {{ task.title }} 
    </v-list-item-title>
    <v-list-item-action >
      <router-link
        style="text-decoration: none"
        :to="{ name: 'task-show', params: { id: task.id } }"
      >
        <v-btn> Details </v-btn>
      </router-link>
    </v-list-item-action>
  </v-list-item>
</template>
<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.13/vue.min.js"></script>

<script>
  
export default {
  props: {
    task: {
      type: Object,
      require: true,
      default:null
    }
  }
};
</script>