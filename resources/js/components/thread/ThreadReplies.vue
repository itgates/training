<template>
  <div class="mt-3">
    <h3 class="mb-3">Replies</h3>
    <reply
      v-for="(reply, index) in replies"
      :key="index"
      ref="reply"
      :reply="reply"
      @ReplyUpdated="refresh"
    />
    <v-divider />
    <new-reply />
  </div>
</template>

<script>
import Reply from "./Reply";
import NewReply from "./NewReply";

export default {
  components: { Reply, NewReply },
  props: {
    replies: {
      type: Array,
      required: true
    }
  },
  methods: {
    refresh(reply) {
      const index = this.replies.indexOf(reply.original);

      if (index > -1) {
        console.log(this.replies[index]);
        this.replies[index].body = reply.updated.body;
        reply.cb();
      }
    }
  }
};
</script>
