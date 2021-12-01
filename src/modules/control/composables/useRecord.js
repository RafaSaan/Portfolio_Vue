import { useStore } from "vuex";

const useRecord = () => {
  const store = useStore();

  const loadRecords = async (id, typeRecord) => {
    const resp = await store.dispatch("control/loadRecords", {
      id,
      typeRecord,
    });
    return resp;
  };

  const createRecord = async (typeRecord, record, id) => {
    const resp = await store.dispatch("control/createRecord", {
      typeRecord,
      record,
      id,
    });
    return resp;
  };
  const editRecord = (recordInfo, typeRecord, id, idRecord) => {
    const resp = store.dispatch("control/editRecord", {
      recordInfo,
      typeRecord,
      id,
      idRecord,
    });
    return resp;
  };
  const deleteRecord = (typeRecord, id, idRecord) => {
    const resp = store.dispatch("control/deleteRecord", {
      typeRecord,
      id,
      idRecord,
    });
    return resp;
  };

  return {
    loadRecords,
    createRecord,
    editRecord,
    deleteRecord,
  };
};

export default useRecord;
