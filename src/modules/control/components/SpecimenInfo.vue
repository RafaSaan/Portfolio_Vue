<template>
  <div class="specimen__info">
    <h5>{{ specimenInfo.name }}</h5>
    <p>Especie: {{ specimenInfo.species }}</p>
    <p>Fase: {{ specimenInfo.phase }}</p>
    <p>Sexo: {{ specimenInfo.sex }}</p>
    <p>Nacimiento: {{ specimenInfo.birth }}</p>
    <div class="info__edit">
      <uil-editAlt class="edit-icon" title="editar" @click="openModal" />
    </div>
  </div>
  <Modal v-if="isOpen" :closeModal="closeModal">
    <template v-slot:header>
      <h3>Editar</h3>
    </template>
    <template v-slot:form>
      <form class="modal__form" @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Nombre"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="specimenInfo.name"
        />

        <input
          type="text"
          placeholder="Especie"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="specimenInfo.species"
        />
        <input
          type="text"
          placeholder="Fase"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="specimenInfo.phase"
        />
        <input
          type="text"
          placeholder="Sexo"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="specimenInfo.sex"
        />
        <label for="date">Nacimiento</label>
        <input
          type="date"
          placeholder="Nacimiento"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="specimenInfo.birth"
        />
        <button type="submit">Editar</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import { UilEditAlt } from "@iconscout/vue-unicons";
import { computed } from "vue";
import { useStore } from "vuex";
import Modal from "../components/Modal";
import { useModal } from "../composables/useModal";
import useControl from "../composables/useControl";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  name: "specimenInfo",
  components: {
    UilEditAlt,

    Modal,
  },
  setup(props) {
    const [isOpen, openModal, closeModal] = useModal(false);

    const store = useStore();

    const { editSpecimen } = useControl();

    const specimenInfo = computed(() =>
      store.getters["control/getSpecimenById"](props.id)
    );
    // console.log(specimenInfo.value.food);
    return {
      specimenInfo,
      isOpen,
      openModal,
      closeModal,
      onSubmit: () => {
        editSpecimen(specimenInfo.value);
        closeModal();
      },
    };
  },
};
</script>

<style>
.specimen__info {
  align-items: center;
  display: flex;
  color: rgba(0, 0, 0, 0.7);
  flex-wrap: wrap;
  font-size: var(--step--1);
  justify-content: space-between;
  margin: 1rem 0;
  width: 95%;
}
.edit-icon {
  color: var(--purple);
  cursor: pointer;
  font-size: 1.7rem;
}
.save-icon {
  color: #41b883;
}
.specimen__info > h5 {
  font-size: var(--step-0);
}
.specimen__info > p {
  padding: 0 0.5rem;
}
</style>
