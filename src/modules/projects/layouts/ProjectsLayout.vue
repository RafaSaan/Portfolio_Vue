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
      <template v-slot:links>
        <div class="cards__links">
          <a
            href="https://github.com/RafaSaan/Portfolio_Vue"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio</a
          >
        </div>
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
      <template v-slot:links>
        <div class="cards__links">
          <div @click="$router.push({ name: 'control' })">Ir al proyecto</div>
          <a
            href="https://github.com/RafaSaan/control-reptiles-vue"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio</a
          >
        </div>
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
      <template v-slot:links>
        <div class="cards__links">
          <a
            href="https://mia-san.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al proyecto</a
          >
          <a
            href="https://github.com/RafaSaan/E-commerce-React"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio</a
          >
        </div>
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
      <template v-slot:links>
        <div class="cards__links">
          <a
            href="https://tareas-san.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al proyecto</a
          >
          <a
            href="https://github.com/RafaSaan/Tareas-de-D-a-React"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio</a
          >
        </div>
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
