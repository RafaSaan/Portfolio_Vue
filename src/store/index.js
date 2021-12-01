import { createStore } from "vuex";

import control from "../modules/control/store";

export default createStore({
  modules: {
    control,
  },
});
