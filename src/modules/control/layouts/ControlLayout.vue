<template>
  <div class="control">
    <Header />
    <div class="control__container">
      <AsideNav>
        <template v-slot:btn-add>
          <BtnAddSpecimen @click="openModal" />
        </template>
      </AsideNav>

      <NoRecords v-if="$router.options.history.location === '/control'" />
      <router-view />
    </div>

    <Modal v-if="isOpen" :closeModal="closeModal">
      <template v-slot:header>
        <h3>Agregar Ejemplar</h3>
      </template>
      <template v-slot:form>
        <form class="modal__form" @submit.prevent="onSubmit">
          <input
            type="text"
            placeholder="Nombre"
            autocomplete="off"
            v-model="specimenForm.name"
            pattern="[a-zA-Z ]{2,16}"
            required
          />

          <input
            type="text"
            placeholder="Especie"
            autocomplete="off"
            v-model="specimenForm.species"
            pattern="[a-zA-Z ]{2,16}"
            required
          />
          <input
            type="text"
            placeholder="Fase"
            autocomplete="off"
            v-model="specimenForm.phase"
            pattern="[a-zA-Z ]{2,16}"
            required
          />
          <input
            type="text"
            placeholder="Sexo"
            autocomplete="off"
            v-model="specimenForm.sex"
            pattern="[a-zA-Z ]{2,16}"
            required
          />
          <label for="date">Nacimiento</label>
          <input
            type="date"
            placeholder="Nacimiento"
            autocomplete="off"
            v-model="specimenForm.birth"
            pattern="[a-zA-Z ]{2,16}"
            required
          />
          <button
            type="submit"
            @click="loadSpecimen"
            :disabled="specimenForm.birth < 7 || specimenForm.sex > 15"
          >
            Agregar
          </button>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Header from "../components/Header";
import AsideNav from "../components/AsideNav";
import BtnAddSpecimen from "../components/BtnAddSpecimen";
import Modal from "../components/Modal";
import { useModal } from "../composables/useModal";
import { ref } from "vue";
import useControl from "../composables/useControl";
import { useRouter } from "vue-router";
import NoRecords from "../views/NoRecords";

export default {
  name: "controlLayout",
  components: {
    Header,
    AsideNav,
    BtnAddSpecimen,
    Modal,
    NoRecords,
  },

  setup() {
    const [isOpen, openModal, closeModal] = useModal(false);

    const { loadSpecimen, createSpecimen } = useControl();
    loadSpecimen();

    const specimenForm = ref({
      name: "",
      specie: "",
      phase: "",
      sex: "",
      birth: "",
      id: "",
    });

    const router = useRouter();
    console.log(router);

    return {
      isOpen,
      openModal,
      closeModal,
      specimenForm,
      loadSpecimen,

      onSubmit: () => {
        createSpecimen(specimenForm.value);
        closeModal();
        specimenForm.value = {
          name: "",
          specie: "",
          phase: "",
          sex: "",
          birth: "",
          id: "",
        };
      },
    };
  },
};
</script>

<style lang="scss">
.control {
  width: 100%;
  background: var(--color-primary-white);
}
.control__container {
  display: flex;
  max-width: 100rem;
}

input:invalid {
  border: 1px solid rgb(255, 0, 0);
}
input:valid {
  border: 1px solid lime;
}
.input-error {
  color: rgb(255, 0, 0);
}
</style>
