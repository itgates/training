<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div>
        <div class="display-1">Task #{{ id }}</div>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="mr-1" color="indigo"> Edit </v-btn>
      <v-btn color="red"> Delete </v-btn>
    </div>
    <v-card flat>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        cupiditate dolore earum facere laboriosam minus, nemo ut? A accusantium
        asperiores atque consectetur cum debitis distinctio doloremque ducimus
        et expedita illo libero minus nulla quasi recusandae vel vitae
        voluptatem, voluptatibus! Asperiores aspernatur assumenda deleniti enim
        in ipsam iure quaerat similique! Velit.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  }
};
</script>

<style scoped></style>
