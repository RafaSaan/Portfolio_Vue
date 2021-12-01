<template>
  <section class="records" v-if="specimenInfo">
    <SpecimenInfo :id="id" />
    <NavRecords>
      <template v-slot:nav>
        <div
          @click="typeRecord = 'food'"
          :class="{ 'record-active': typeRecord === 'food' }"
        >
          Alimentacion
        </div>
        <div
          @click="typeRecord = 'weight'"
          :class="{ 'record-active': typeRecord === 'weight' }"
        >
          Peso
        </div>
        <div
          @click="typeRecord = 'sloughing'"
          :class="{ 'record-active': typeRecord === 'sloughing' }"
        >
          Mudas
        </div>
      </template>
    </NavRecords>
    <RecordFood v-if="typeRecord === 'food'" :id="id" />
    <RecordWeight v-if="typeRecord === 'weight'" :id="id" />
    <RecordSloughing v-if="typeRecord === 'sloughing'" :id="id" />
  </section>
  <NoRecords v-if="!specimenInfo" />
</template>

<script>
import SpecimenInfo from "../components/SpecimenInfo";
import NoRecords from "../views/NoRecords";
import NavRecords from "../components/NavRecords";
import RecordWeight from "../views/RecordWeight";
import RecordFood from "../views/RecordFood";
import RecordSloughing from "../views/RecordSloughing";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  name: "records",
  components: {
    SpecimenInfo,
    NoRecords,
    NavRecords,
    RecordWeight,
    RecordFood,
    RecordSloughing,
  },

  setup(props) {
    const store = useStore();

    const typeRecord = ref("food");

    return {
      specimenInfo: computed(() =>
        store.getters["control/getSpecimenById"](props.id)
      ),
      typeRecord,
    };
  },
};
</script>

<style>
.records {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 62.56em) {
  .records {
    width: 80%;
  }
}
</style>
