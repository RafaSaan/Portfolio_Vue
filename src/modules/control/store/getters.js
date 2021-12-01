export const allSpecimen = state => {
  //   console.log(state, getters);
  return state.specimen;
};

export const getSpecimenById =
  state =>
  (id = "") => {
    const specimenId = state.specimen.find(specimen => specimen.id == id);
    // console.log(specimenId);
    if (!specimenId) return;

    return { ...specimenId };
  };

export const testState =
  state =>
  (id = "") => {
    const specimenId = state.specimen.map(e => e.id).indexOf(id);
    console.log(state.specimen[specimenId].food);

    const stateSpecimen = state.specimen[specimenId].food
      .map(e => e.id)
      .indexOf("-Mpc4DVb2LTABcQgFcwN");
    //   .map(e => e.id)
    //   .indexOf("-MpSlyEbZ6SaMiWyIpKq");
    console.log(state.specimen[specimenId].food[stateSpecimen]);
  };
