<template>
  <div class="projects">
    <h2>Proyectos</h2>
    <CardProject
      titleCard="Portafolio"
      date="2021"
      type="Sitio Web"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-portfolio.png"
          alt="proyecto portafolio web"
        />
      </template>
    </CardProject>
    <CardProject
      titleCard="Control de Reptiles"
      date="2021"
      type="SPA"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-control-reptiles.png"
          alt="proyecto control de reptiles"
        />
      </template>
    </CardProject>
    <CardProject
      titleCard="Ecommerce"
      date="2021"
      type="SPA"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-ecommerce.png"
          alt="proyecto ecommerce"
        />
      </template>
    </CardProject>
    <CardProject
      titleCard="App de Tareas"
      date="2021"
      type="App"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-todo.png"
          alt="proyecto app de tareas"
        />
      </template>
    </CardProject>
  </div>
</template>

<script>
import CardProject from "../components/CardProject";
export default {
  name: "projectsLayout",
  components: {
    CardProject,
  },
};
</script>

<style>
.projects {
  width: 80%;
}

@media screen and (min-width: 48em) {
  .projects {
    width: auto;
  }
}
</style>
