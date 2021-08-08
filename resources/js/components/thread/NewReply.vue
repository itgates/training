<template>
  <div class="mt-3">
    <v-textarea
      v-model="body"
      solo
      flat
      placeholder="Leave your reply"
      @keyup.enter="submit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: ''
    }
  },
  methods: {
    submit() {
      // persist the reply into database
      axios.post('/api/threads/1/replies', {
        body: this.body
      }).then(() => {
        // Re-load thread with replies
        this.$store.dispatch('loadThread');
        this.body = '';
        console.log('Reply created.')
      }).catch((error) => {
        console.log('error');
      })
    }
  }
}
</script>
