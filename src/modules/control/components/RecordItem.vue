<template>
  <div className="record__item">
    <p className="">{{ specimenRecords.typeEvent }}</p>
    <p>{{ specimenRecords.quantity }}</p>
    <p>{{ specimenRecords.date }}</p>
    <div className="icons-container">
      <uil-trashAlt class="delete-icon" @click="onDeleteRecord" />
      <uil-editAlt class="edit-icon" @click="openModal" />
    </div>
  </div>

  <Modal v-if="isOpen" :closeModal="closeModal">
    <template v-slot:header>
      <h3>Registro de Alimentacion</h3>
    </template>
    <template v-slot:form>
      <form class="modal__form" @submit.prevent="onEditRecord">
        <input
          type="text"
          placeholder="Alimento"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="recordForm.typeEvent"
        />

        <input
          type="text"
          placeholder="Cantidad"
          autocomplete="off"
          required
          v-model="recordForm.quantity"
        />

        <label for="date">Fecha</label>
        <input
          type="date"
          placeholder="Fecha"
          autocomplete="off"
          pattern="[a-zA-Z ]{2,16}"
          required
          v-model="recordForm.date"
        />
        <button type="submit">Agregar</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import { UilTrashAlt } from "@iconscout/vue-unicons";
import { UilEditAlt } from "@iconscout/vue-unicons";
import { ref } from "vue";
import useRecord from "../composables/useRecord";
import Modal from "../components/Modal";
import { useModal } from "../composables/useModal";
import Swal from "sweetalert2";

export default {
  props: {
    specimenRecords: {
      type: Object,
      required: true,
    },
    typeRecord: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  name: "recordItem",
  components: {
    UilTrashAlt,
    UilEditAlt,
    Modal,
  },
  setup(props) {
    const [isOpen, openModal, closeModal] = useModal(false);

    const { editRecord, deleteRecord } = useRecord();

    const recordForm = ref({
      typeEvent: props.specimenRecords.typeEvent,
      quantity: props.specimenRecords.quantity,
      date: props.specimenRecords.date,
      id: props.specimenRecords.id,
    });

    const onDeleteRecord = async () => {
      const { isConfirmed } = await Swal.fire({
        title: "¿Está seguro de eliminar?",
        text: "Al eliminarse no se podra recuperar",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro",
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        console.log("borrando");

        await deleteRecord(
          props.typeRecord,
          props.id,
          props.specimenRecords.id
        );

        Swal.fire("Eliminado", "", "success");
      }
    };

    return {
      isOpen,
      openModal,
      closeModal,
      recordForm,
      onEditRecord: () => {
        editRecord(
          recordForm.value,
          "food",
          props.id,
          props.specimenRecords.id
        );
        closeModal();
      },
      onDeleteRecord,
    };
  },
};
</script>

<style>
.record__item {
  align-items: center;
  background: #fff;
  display: flex;
  font-size: var(--step--2);
  height: 5rem;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
  max-height: 5rem;
}
.record__item > p {
  margin-left: 0.5rem;
}
.edit-icon,
.delete-icon,
.save-icon {
  cursor: pointer;
  font-size: 1.54rem;
  margin: 0 0.5rem;
}
.delete-icon {
  color: var(--red);
}
</style>
