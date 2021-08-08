<template>
  <div v-if="thread">
    <thread-info :thread="thread" />
    <v-divider />
    <thread-replies :replies="thread.replies" />
  </div>
</template>

<script>
import ThreadInfo from "../../components/thread/ThreadInfo";
import ThreadReplies from "../../components/thread/ThreadReplies";
import { mapState, mapActions } from 'vuex';

export default {
  components: { ThreadReplies, ThreadInfo },
  data() {
    return {
      //thread: null
    };
  },
  computed: {
    ...mapState(['thread'])
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.loadThread();
    },
    ...mapActions(['loadThread'])
    //getThread() {
    //this.$store.dispatch('loadThread');
    // axios
    //   .get(`/api/threads/1`)
    //   .then((response) => {
    //     this.thread = response.data;
    //     console.log(this.thread);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //}
  }
};
</script>
