export default {
  name: "control",
  component: () => import("../layouts/ControlLayout.vue"),
  children: [
    {
      path: "",
      name: "noRecords",
      component: () => import("../views/NoRecords.vue"),
    },
    {
      path: ":id",
      name: "records",
      component: () => import("../views/Records.vue"),
      // children: [
      //   {
      //     path: "weight",
      //     name: "weight",
      //     component: RecordWeight,
      //   },
      // ],

      props: route => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
