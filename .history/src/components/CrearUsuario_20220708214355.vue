<template>
 <div class="modal" :class="{'is-active': showModalFlag}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirmation Modal</p>
          <button class="delete" aria-label="close" @click="cancelModal">></button>
        </header>
        <section class="modal-card-body">
          <p>{{ message }}</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="okModal">Ok</button>
          <button class="button" @click="cancelModal">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<script>

export default {

}

data: {
    showModalFlag: false,
    okPressed: false,
    message: "Press 'Ok' or 'Cancel'."
  },
  methods: {
    showModal() {
      this.okPressed = false;
      this.showModalFlag = true;
    },
    okModal() {
      this.okPressed = true;
      this.showModalFlag = false;
    },
    cancelModal() {
      this.okPressed = false;
      this.showModalFlag = false;
    }
  }
});




</script>

<style scoped>

</style>

