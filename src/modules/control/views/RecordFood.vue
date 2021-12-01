<template>
  <div class="control__food recordType">
    <BtnAddRecord :openModal="openModal" />
    <div class="record__item__container">
      <RecordPreview type="Alimento" secondSlot="Cantidad" thirdSlot="Fecha" />
    </div>
    <div class="record__item__container">
      <RecordItem
        v-for="record in specimenInfo.food"
        :key="record.id"
        :specimenRecords="record"
        typeRecord="food"
        :id="id"
      />
    </div>
    <Modal v-if="isOpen" :closeModal="closeModal">
      <template v-slot:header>
        <h3>Registro de Alimentacion</h3>
      </template>
      <template v-slot:form>
        <form class="modal__form" @submit.prevent="onSubmit">
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
  </div>
</template>

<script>
import BtnAddRecord from "../components/BtnAddRecord";
import RecordPreview from "../components/RecordPreview";
import RecordItem from "../components/RecordItem";
import Modal from "../components/Modal";
import { useModal } from "../composables/useModal";
import { ref, computed } from "vue";
import useRecord from "../composables/useRecord";
import { useStore } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  name: "recordFood",

  components: {
    BtnAddRecord,
    RecordPreview,
    RecordItem,
    Modal,
  },
  setup(props) {
    const [isOpen, openModal, closeModal] = useModal(false);

    const { loadRecords, createRecord, editRecord } = useRecord();

    const store = useStore();

    const recordForm = ref({
      typeEvent: "",
      quantity: "",
      date: "",
    });

    const specimenInfo = computed(() =>
      store.getters["control/getSpecimenById"](props.id)
    );
    loadRecords(props.id, "food");

    // if (specimenInfo.value.food) loadRecords(props.id, "food");

    return {
      isOpen,
      openModal,
      closeModal,
      recordForm,
      onSubmit: () => {
        createRecord("food", recordForm.value, props.id);
        closeModal(),
          (recordForm.value = {
            typeEvent: "",
            quantity: "",
            date: "",
          });
      },
      specimenInfo,
      onEdit: () => {
        editRecord(recordForm.value, "food", props.id);
      },
    };
  },
};
</script>

<style>
.record__item__container {
  width: 95%;
}
</style>
