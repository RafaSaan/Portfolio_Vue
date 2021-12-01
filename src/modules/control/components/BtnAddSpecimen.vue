<template>
  <div class="btn__container">
    <button class="btn-add">
      Agregar <uil-plus class="icon-plus" title="Agregar ejemplar" />
    </button>
  </div>
</template>

<script>
import { UilPlus } from "@iconscout/vue-unicons";

export default {
  name: "btnAddControl",
  components: {
    UilPlus,
  },
};
</script>

<style>
.btn__container {
  margin: 1rem 0 0.5rem 0;
}
.btn-add {
  width: 10rem;
  height: 2.5rem;

  background: #6b5bbc;
  color: rgba(255, 255, 255, 0.9);

  border: none;
  border-radius: 0.625rem;
  font-size: var(--step-0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon-plus {
  margin-left: 1rem;
}
</style>
