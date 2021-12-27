export default {
  name: "control",
  component: () => import("../layouts/ControlLayout.vue"),
  children: [
    {
      path: ":id",
      name: "records",
      component: () => import("../views/Records.vue"),
      props: route => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
