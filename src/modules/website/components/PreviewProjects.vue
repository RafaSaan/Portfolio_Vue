<template>
  <section class="previewProjects">
    <h3>Ultimos proyectos</h3>
    <CardPreviewProject
      titleCard="Sistema de Monitoreo(En Desarrollo)"
      date="2021"
      type="Sistema Web"
      description="El proyecto fue pensado en demostrar cómo y que es lo que puedo hacer como Frontend Developer. Implementando un sistema de autenticación, creación de bases de datos, creación de API REST. "
    >
      <template v-slot:img>
        <img
          src="../../../assets/img/dashboardProject-preview.png"
          alt="proyecto ecommerce"
          class="card__img"
        />
      </template>
    </CardPreviewProject>
    <CardPreviewProject
      titleCard="Portafolio"
      date="2021"
      type="Sitio Web"
      description="Este es un proyecto creado para dar a conocer quien soy, mis skills , mis otros proyectos
      , diseñado con Figma y desarrollado con VueJs."
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
      type="App Web"
      description="Al ser amante de los reptiles, haber tenido algunos de manera legal, en base a mi experiencia
      considero que el control de su alimentación, peso, mudas(cambio de piel), es esencial para tener al ejemplar en las 
      mejores condiciones, por eso mismo he creado esta app."
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
      description="Debido a la alta demanda del mercado por tener una tienda en línea, desarrolle una, emplenado teconologias
      que haran que el costo y mantenimiento de la mismas sea más accesible para los emprendedores."
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
