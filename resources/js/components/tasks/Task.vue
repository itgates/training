<template>
  <div>
    <v-list-item>
      <v-list-item-title>
        {{ task.title }}
      </v-list-item-title>
      <v-list-item-action >
        <v-btn @click="$emit('TaskSelected', task)">Details</v-btn>
      </v-list-item-action>
    </v-list-item>

  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>
