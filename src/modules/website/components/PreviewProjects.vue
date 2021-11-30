<template>
  <section class="previewProjects">
    <h3>Ultimos proyectos</h3>
    <CardPreviewProject
      titleCard="Portafolio"
      date="2021"
      type="Sitio Web"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          src="../../../assets/img/project-portfolio-preview.png"
          alt="proyecto ecommerce"
          class="card__img"
        />
      </template>
    </CardPreviewProject>
    <CardPreviewProject
      titleCard="Control de Reptiles"
      date="2021"
      type="App de control"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          src="../../../assets/img/project-control-reptiles-preview.png"
          alt="proyecto ecommerce"
          class="card__img"
        />
      </template>
    </CardPreviewProject>
    <CardPreviewProject
      titleCard="Ecommerce "
      date="2021"
      type="Ecommerce"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        laudantium possimus blanditiis rerum dolore ab unde amet numquam."
    >
      <template v-slot:img>
        <img
          src="../../../assets/img/mia-ecommerce.png"
          alt="proyecto ecommerce"
          class="card__img"
        />
      </template>
    </CardPreviewProject>
  </section>
</template>

<script>
import CardPreviewProject from "../components/CardPreviewProject";
export default {
  name: "previewProjects",
  components: {
    CardPreviewProject,
  },
};
</script>

<style>
.previewProjects {
  width: 80%;
}
</style>
