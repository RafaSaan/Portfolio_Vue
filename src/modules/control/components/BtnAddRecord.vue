<template>
  <div class="btn__container--register">
    <button class="btn-add-register" @click="openModal">
      Agregar registro <uil-plus class="icon-plus" title="Agregar ejemplar" />
    </button>
  </div>
</template>

<script>
import { UilPlus } from "@iconscout/vue-unicons";

export default {
  props: {
    openModal: {
      type: Function,
      required: true,
    },
  },
  name: "btnAddRegister",
  components: {
    UilPlus,
  },
};
</script>

<style>
.btn__container--register {
  margin: 1rem 0;
  width: 95%;
}
.btn-add-register {
  width: 11.5rem;
  height: 3rem;
  /* margin: 0 1rem; */
  /* background: #6b5bbc; */
  background: #fff;
  /* color: rgba(255, 255, 255, 0.9); */

  border: none;
  /* border: 0.5px solid #000; */
  border-radius: 0.625rem;
  font-size: var(--step--2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon-plus {
  margin-left: 1rem;
}
</style>
