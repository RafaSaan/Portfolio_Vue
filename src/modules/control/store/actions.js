import controlApi from "@/api/controlApi";
import Swal from "sweetalert2";

export const loadSpecimen = async ({ commit }) => {
  try {
    const { data } = await controlApi.get("/specimen.json");
    // console.log(data);
    const specimen = [];

    for (let id of Object.keys(data)) {
      specimen.push({
        id,
        ...data[id],
      });
    }

    commit("setSpecimen", specimen);

    // console.log(specimen);
  } catch (error) {
    console.error("ha ocurrido un error");
  }
};

/** Crear accion que capture los datos y los mande a la base de datos, tiene que crear el id y que se ejecute al click**/

export const createSpecimen = async ({ commit }, info) => {
  // console.log(info);

  const { name, species, phase, sex, birth } = info;

  const dataToSend = { name, species, phase, sex, birth };
  try {
    const { data } = await controlApi.post("specimen.json", dataToSend);

    // console.log(data);

    dataToSend.id = data.name;

    commit("addSpecimen", dataToSend);
  } catch (error) {
    console.log(error.responnse);
  }
};

export const editSpecimen = async ({ commit }, info) => {
  const { name, species, phase, sex, birth } = info;

  const dataToEdit = { name, species, phase, sex, birth };

  const resp = await controlApi.put(`/specimen/${info.id}.json`, dataToEdit);

  commit("updateSpecimen", { ...info });

  console.log(resp);
};

export const deleteSpecimen = async ({ commit }, id) => {
  await controlApi.delete(`/specimen/${id}.json`);

  commit("deleteEntry", id);

  return id;
};

/***** Actions Records ****/

export const loadRecords = async ({ commit }, dataRecord) => {
  const { id, typeRecord } = dataRecord;

  try {
    const { data } = await controlApi.get(`/specimen/${id}/${typeRecord}.json`);

    let food = [];
    let weight = [];
    let sloughing = [];

    if (typeRecord === "food") {
      if (!data) {
        commit("setRecords", { id, typeRecord, food });
        return;
      }

      for (let id of Object.keys(data)) {
        food.push({
          id,
          ...data[id],
        });
      }
      commit("setRecords", { id, typeRecord, food });
    }

    if (typeRecord === "weight") {
      if (!data) {
        commit("setRecords", { id, typeRecord, weight });

        return;
      }
      for (let id of Object.keys(data)) {
        weight.push({
          id,
          ...data[id],
        });
      }
      commit("setRecords", { id, typeRecord, weight });
    }

    if (typeRecord === "sloughing") {
      if (!data) {
        commit("setRecords", { id, typeRecord, sloughing });
        return;
      }

      for (let id of Object.keys(data)) {
        sloughing.push({
          id,
          ...data[id],
        });
      }
      commit("setRecords", { id, typeRecord, sloughing });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "Ha ocurrido un error )=",
      showConfirmButton: false,
      timer: 2500,
    });

    // location.reload();
    // location.reload();
  }
};

export const createRecord = async ({ commit }, dataRecords) => {
  const { typeRecord, record, id } = dataRecords;

  const { typeEvent, quantity, date } = record;

  const dataToSend = { typeEvent, quantity, date };
  try {
    const { data } = await controlApi.post(
      `/specimen/${id}/${typeRecord}.json`,
      dataToSend
    );

    dataToSend.id = data.name;

    commit("addRecord", { id, typeRecord, dataToSend });
  } catch (error) {
    console.log(error);

    Swal.fire({
      position: "top",
      icon: "warning",
      title: "Hubo un error en la carga de datos",
      showConfirmButton: false,
      timer: 4000,
    });

    // location.reload();
  }
};

export const editRecord = async ({ commit }, dataRecord) => {
  const { recordInfo, typeRecord, id, idRecord } = dataRecord;
  const { typeEvent, quantity, date } = recordInfo;

  const dataToEdit = { typeEvent, quantity, date };

  const resp = await controlApi.put(
    `/specimen/${id}/${typeRecord}/${idRecord}.json`,
    dataToEdit
  );

  commit("updateRecord", { id, idRecord, typeRecord, recordInfo });

  console.log(resp);
};
export const deleteRecord = async ({ commit }, dataRecord) => {
  const { typeRecord, id, idRecord } = dataRecord;

  const resp = await controlApi.delete(
    `/specimen/${id}/${typeRecord}/${idRecord}.json`
  );

  commit("deleteRecord", { id, idRecord, typeRecord });

  console.log(resp);
};
