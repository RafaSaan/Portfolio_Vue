<template>
  <div class="modal">
    <div class="modal__container">
      <uil-timesSquare class="close-icon" @click="closeModal" />
      <slot name="header" />

      <slot name="form" />
    </div>
  </div>
</template>

<script>
import { UilTimesSquare } from "@iconscout/vue-unicons";
export default {
  props: {
    closeModal: {
      type: Function,
      require: true,
    },
  },
  name: "modal",
  components: {
    UilTimesSquare,
  },
};
</script>

<style>
.modal {
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  min-height: 99vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.modal__container {
  align-items: center;
  background: #f4f8f9;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  min-width: 18.4375rem;
  position: relative;
  width: 25rem;
}
.close-icon {
  align-self: flex-end;
  color: var(--red);
  cursor: pointer;
  font-size: 1.8rem;
  margin: 0.5rem 1rem 0 0;
  position: absolute;
}
.modal__container > h3 {
  font-size: var(--step-0);
  padding: 1rem;
}
.modal__form {
  align-items: center;
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 0.3125rem;
  border: 1px solid #000;
  font-size: var(--step--1);
  height: 3rem;
  margin: 0.5rem 0;
  outline: none;
  width: 17.5rem;
}
.modal__form > label {
  align-self: flex-start;
}
.modal__form > button {
  background: #fff;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;
  font-size: var(--step--1);
  height: 3rem;
  margin: 1rem 0;
  width: 11.25rem;
}
</style>
