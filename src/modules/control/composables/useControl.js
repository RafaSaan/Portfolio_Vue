import { useStore } from "vuex";
import { computed } from "vue";

const useControl = () => {
  const store = useStore();

  const loadSpecimen = () => {
    const resp = store.dispatch("control/loadSpecimen");
    return resp;
  };
  const createSpecimen = specimenForm => {
    const resp = store.dispatch("control/createSpecimen", specimenForm);
    return resp;
  };

  const getSpecimenById = id => {
    const resp = computed(() => store.getters["control/getSpecimenById"](id));
    return resp;
  };

  const editSpecimen = data => {
    const resp = store.dispatch("control/editSpecimen", data);
    return resp;
  };
  const deleteSpecimen = id => {
    const resp = store.dispatch("control/deleteSpecimen", id);
    return resp;
  };

  return {
    loadSpecimen,
    allSpecimen: computed(() => store.getters["control/allSpecimen"]),
    createSpecimen,
    getSpecimenById,
    editSpecimen,
    deleteSpecimen,
  };
};

export default useControl;
