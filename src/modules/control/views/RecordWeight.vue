<template>
  <div class="record__weight recordType">
    <BtnAddRecord :openModal="openModal" />
    <div class="record__item__container">
      <RecordPreview type="Peso" secondSlot="Fecha" thirdSlot="Observaciones" />
    </div>
    <div class="record__item__container">
      <RecordItem
        v-for="record in specimenInfo.weight"
        :key="record.id"
        :specimenRecords="record"
        typeRecord="weight"
        :id="id"
      />
    </div>

    <Modal v-if="isOpen" :closeModal="closeModal">
      <template v-slot:header>
        <h3>Registro de Peso</h3>
      </template>
      <template v-slot:form>
        <form class="modal__form" @submit.prevent="onSubmit">
          <input
            type="text"
            placeholder="Peso"
            autocomplete="off"
            required
            v-model="recordForm.typeEvent"
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

          <input
            type="text"
            placeholder="Observaciones"
            autocomplete="off"
            pattern="[a-zA-Z ]{2,25}"
            required
            v-model="recordForm.quantity"
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
import { useModal } from "../composables/useModal";
import Modal from "../components/Modal";
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
  name: "recordWeight",

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
    loadRecords(props.id, "weight");

    return {
      isOpen,
      openModal,
      closeModal,
      recordForm,
      onSubmit: () => {
        createRecord("weight", recordForm.value, props.id);
        closeModal(),
          (recordForm.value = {
            typeEvent: "",
            quantity: "",
            date: "",
          });
      },
      specimenInfo,
      onEdit: () => {
        editRecord(recordForm.value, "weight", props.id);
      },
    };
  },
};
</script>

<style>
.recordType {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
