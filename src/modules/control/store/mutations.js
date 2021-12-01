export const setSpecimen = (state, specimen) => {
  state.specimen = [...specimen];
};

export const updateSpecimen = (state, specimen) => {
  const specimenId = state.specimen.map(e => e.id).indexOf(specimen.id);
  state.specimen[specimenId] = specimen;
};
export const addSpecimen = (state, specimen) => {
  state.specimen = [specimen, ...state.specimen];
};

export const deleteEntry = (state, id) => {
  state.specimen = state.specimen.filter(el => el.id !== id);
  console.log(id);
};

/****** Muatations Records ******/

export const setRecords = (state, record) => {
  const { id, typeRecord } = record;

  const specimenId = state.specimen.map(e => e.id).indexOf(id);

  if (typeRecord === "food") {
    // if (!record.food) record.food = [];
    state.specimen[specimenId].food = [...record.food];
  }

  if (typeRecord === "weight")
    state.specimen[specimenId].weight = [...record.weight];

  if (typeRecord === "sloughing")
    state.specimen[specimenId].sloughing = [...record.sloughing];
};

export const addRecord = (state, record) => {
  const { id, typeRecord, dataToSend } = record;

  const specimenId = state.specimen.map(e => e.id).indexOf(id);

  if (typeRecord === "food")
    state.specimen[specimenId].food = [
      dataToSend,
      ...state.specimen[specimenId].food,
    ];

  if (typeRecord === "weight")
    state.specimen[specimenId].weight = [
      dataToSend,
      ...state.specimen[specimenId].weight,
    ];

  if (typeRecord === "sloughing")
    state.specimen[specimenId].sloughing = [
      dataToSend,
      ...state.specimen[specimenId].sloughing,
    ];
};

export const updateRecord = (state, record) => {
  const { id, idRecord, typeRecord, recordInfo } = record;

  const specimenId = state.specimen.map(e => e.id).indexOf(id);

  if (typeRecord === "food") {
    const recordIdIndex = state.specimen[specimenId].food
      .map(e => e.id)
      .indexOf(idRecord);

    state.specimen[specimenId].food[recordIdIndex] = recordInfo;
  }

  if (typeRecord === "weight") {
    const recordIdIndex = state.specimen[specimenId].weight
      .map(e => e.id)
      .indexOf(idRecord);

    state.specimen[specimenId].weight[recordIdIndex] = recordInfo;
  }

  if (typeRecord === "sloughing") {
    const recordIdIndex = state.specimen[specimenId].sloughing
      .map(e => e.id)
      .indexOf(idRecord);

    state.specimen[specimenId].sloughing[recordIdIndex] = recordInfo;
  }
};
export const deleteRecord = (state, record) => {
  const { id, idRecord, typeRecord } = record;

  const specimenId = state.specimen.map(e => e.id).indexOf(id);

  if (typeRecord === "food") {
    state.specimen[specimenId].food = state.specimen[specimenId].food.filter(
      el => el.id !== idRecord
    );
  }

  if (typeRecord === "weight") {
    state.specimen[specimenId].weight = state.specimen[
      specimenId
    ].weight.filter(el => el.id !== idRecord);
  }

  if (typeRecord === "sloughing") {
    state.specimen[specimenId].sloughing = state.specimen[
      specimenId
    ].sloughing.filter(el => el.id !== idRecord);
  }
};
