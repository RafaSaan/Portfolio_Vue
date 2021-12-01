<template>
  <div class="control__sloughing recordType">
    <BtnAddRecord :openModal="openModal" />
    <div class="record__item__container">
      <RecordPreview
        type="Observaciones"
        secondSlot="Comida(S/N)"
        thirdSlot="Fecha"
      />
    </div>
    <div class="record__item__container">
      <RecordItem
        v-for="record in specimenInfo.sloughing"
        :key="record.id"
        :specimenRecords="record"
        typeRecord="sloughing"
        :id="id"
      />
    </div>

    <Modal v-if="isOpen" :closeModal="closeModal">
      <template v-slot:header>
        <h3>Registro de Mudas</h3>
      </template>
      <template v-slot:form>
        <form class="modal__form" @submit.prevent="onSubmit">
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
            pattern="[a-zA-Z ]{2,16}"
            required
            v-model="recordForm.typeEvent"
          />

          <input
            type="text"
            placeholder="Comida(S/N)"
            autocomplete="off"
            pattern="[a-zA-Z ]{2,16}"
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
  name: "recordSloughing",

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

    loadRecords(props.id, "sloughing");

    return {
      isOpen,
      openModal,
      closeModal,
      recordForm,
      onSubmit: () => {
        createRecord("sloughing", recordForm.value, props.id);
        closeModal(),
          (recordForm.value = {
            typeEvent: "",
            quantity: "",
            date: "",
          });
      },
      specimenInfo,
      onEdit: () => {
        editRecord(recordForm.value, "sloughing", props.id);
      },
    };
  },
};
</script>

<style></style>
