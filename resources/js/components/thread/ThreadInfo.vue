<template>
  <div>
    <v-card class="mb-3">
      <v-card-title>
        {{ thread.title }}
      </v-card-title>
      <v-card-subtitle>
        published by <span class="font-weight-bold">{{ thread.owner.name }}</span>
      </v-card-subtitle>
      <v-card-text>
        {{ thread.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="changeName">
          change
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    //
  },
  methods: {
    changeName() {
      this.$store.dispatch('changeAuthUser');
    }
  }
}
</script>
