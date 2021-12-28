<template>
  <div class="projects">
    <h2>Proyectos</h2>
    <CardProject
      titleCard="Sistema de Monitoreo(En Desarrollo)"
      date="2021"
      type="Sistema Web"
      description="El proyecto fue pensado en demostrar cómo y que es lo que puedo hacer como Frontend Developer. Implementando un sistema de autenticación, creación de bases de datos, creación de API REST. "
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/dashboardProject.png"
          alt="proyecto Dashboard"
        />
      </template>

      <template v-slot:howDid>
        <p>
          Este proyecto fue desarrollado con tecnologías como Laravel-MySQL para
          el Backend. Para el Frontend se usó VueJs, Vuex, VueRouter, Sistema de
          módulos, Boostrap 5 y demás dependencias.
        </p>
      </template>

      <template v-slot:links>
        <div class="cards__links">
          <a
            href="https://github.com/RafaSaan/monitor-system"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio Frontend</a
          >
          <a
            href="https://github.com/RafaSaan/api.records"
            rel="noopener noreferrer"
            target="_blank"
            >Ir al repositorio Backend</a
          >
        </div>
      </template>
    </CardProject>
    <CardProject
      titleCard="Portafolio"
      date="2021"
      type="Sitio Web"
      description="Este proyecto se creo con la finalidad de dar a conocer quien soy, como y que es lo que hago como Frontend Developer Jr. "
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-portfolio.png"
          alt="proyecto portafolio web"
        />
      </template>

      <template v-slot:howDid>
        <p>
          Para el diseño decidí hacer uso del software Figma. El desarrollo del
          proyecto fue pensado y hecho con VueJs, utilizando un sistema de
          módulos, este nos permite que el proyecto sea escalable y se pueda
          replicar con muy pocas configuraciones.
          <br />
          Dependencias utilizadas: Unicons, SweetAlert, Normalize.
        </p>
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
      description="Al ser amante de los reptiles, haber tenido algunos de manera legal, en base a mi experiencia considero que el control de su alimentación, peso, mudas(cambio de piel), es esencial para tener al ejemplar en las mejores condiciones, por eso mismo he creado esta app."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-control-reptiles.png"
          alt="proyecto control de reptiles"
        />
      </template>

      <template v-slot:howDid>
        <p>
          La app web se diseño con el software Figma. El desarrollo fue pensado
          y realizado con VueJs, la finalidad de la app fue poner en práctica
          los conceptos básicos de Vue, composition API, Vuex, VueRouter y se
          trabajo con un sistema de modulos.
        </p>
        <p>
          Para el manejo del backend se utilizó Firebase, usando la API de la
          base de datos, para las peticiones y envío de data, se utilizó Axios.
          <br />
          Además se incluyó dependencias como SweetAlert, Unicons, Normalize,
          SASS.
        </p>
      </template>

      <template v-slot:links>
        <div class="cards__links">
          <a @click="$router.push({ name: 'control' })">Ir al proyecto</a>
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
      description="Debido a la alta demanda del mercado por tener una tienda en línea,
          desarrolle una, emplenado teconologias que haran que el costo y
          mantenimiento de la misma sea más accesible para los emprendedores."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-ecommerce.png"
          alt="proyecto ecommerce"
        />
      </template>

      <template v-slot:howDid>
        <p>
          El desarrollo de este ecommerce es interesante, es una tienda en línea
          pero con tecnologías accesibles y con menor tiempo de desarrollo.
        </p>
        <p>
          Me sirvió como muy buena práctica con conceptos ya más avanzados de
          React. Se utilizó ReactJs, con ReactRouter, ReactIcons, una tecnología
          muy interesante fue commerceJs que nos permitió montar el ecommerce,
          con su plataforma donde ingresamos los productos y su API, con esta
          pudimos haces las peticiones, mandar data, cambiar estados.
        </p>
        <p>Dependencias: auth0,commerce.js, stripe-js</p>
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
      description="Cómo Frontend Developer día a día se presentan muchas actividades por realizar y llevar un orden es escencial para el desarrollo de estás, por eso razón cree una app donde me permitirá ver los pendientes que tenía que hacer en el día."
    >
      <template v-slot:img>
        <img
          class="img__project"
          src="../../../assets/img/project-todo.png"
          alt="proyecto app de tareas"
        />
      </template>

      <template v-slot:howDid>
        <p>
          Diseñado con el software Figma. <br />
          La app se desarrolló en ReactJs, aunque es un proyecto muy básico me
          sirvió exelente para poner en práctica los conceptos básicos y
          mid-level de ReactJs, además se trabajo con el localStorage que nos
          permite guardar nuestras tareas en el navegador.
        </p></template
      >

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
