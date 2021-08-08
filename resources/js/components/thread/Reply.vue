<template>
  <div>
    <v-card class="d-flex mt-5">
      <div class="pa-2">
        <v-avatar size="82">
          <v-img src="http://avataaars.io/?color=black" />
        </v-avatar>
      </div>
      <div class="w-full pr-3">
        <v-card-title>{{ reply.owner.name }}</v-card-title>
        <v-card-text v-if="!editing">
          {{ reply.body }}
        </v-card-text>
        <v-card-text v-else>
          <v-textarea
            v-model="updatedReply.body"
            label="Body"
            autofocus
            solo
          ></v-textarea>
        </v-card-text>
        <v-card-actions v-if="!editing">
          <v-btn
            color="primary"
            icon
            text
            tile
            @click="edit"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" icon text tile>
            <v-icon> mdi-trash-can-outline </v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn color="primary" tile @click="update"> update </v-btn>
          <v-btn tile @click="editing = false"> cancel </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    reply: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editing: false,
      updatedReply: null
    }
  },
  computed: {
    //
  },
  methods: {
    edit() {
      this.updatedReply = { ...this.reply };
      this.editing = true;
    },
    update() {
      const { id, body } = this.updatedReply;

      axios.put(`/api/replies/${id}`, {
        body
      }).then((response) => {
        this.$emit('ReplyUpdated', {
          'original': this.reply,
          'updated': this.updatedReply,
          'cb': () => {
            this.editing = false;
          }
        });
      })
    }
  }
}
</script>
