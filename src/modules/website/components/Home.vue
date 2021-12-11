<template>
  <main class="home">
    <div class="home__img__container">
      <img
        src="../../../assets/img/pic-profile-02.jpg"
        alt="rafael sanchez"
        class="home__img"
      />
    </div>
    <div class="home__info">
      <h2>Hola! yo soy Rafa, Frontend Developer.</h2>
      <p>
        Hola! Soy Rafa Frontend Developer, actualmente enfocado en desarrollo de
        aplicaciones/sistemas web. Me motiva la idea de seguir desarrollando
        sistemas escalables, efectivos, que se traduzca en oportunidades de
        negocio y crecimiento.
      </p>
    </div>

    <a
      href="https://firebasestorage.googleapis.com/v0/b/portafolio-san.appspot.com/o/Rafael-Sanchez.pdf?alt=media&token=fedbcf6f-3c37-49b8-af6a-2866ce46740c"
      rel="noopener noreferrer"
      target="_blank"
      class="cta__cv"
      >Descargar CV</a
    >
  </main>
</template>

<script>
export default {};
</script>

<style>
.home {
  width: 80%;
  max-width: 87.5rem;
  min-height: 70vh;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 2.5rem;
}
.home__img {
  width: 16rem;
  border-radius: 10rem;
}
.home__info {
  /* grid-row: 1; */
  margin-bottom: 1.6rem;
}
.home__info > h2 {
  font-size: var(--step-3);
}
.home__info > p {
  font-size: var(--step--1);
  max-width: 31.0625rem;
  width: 100%;
}

.cta__cv {
  align-items: center;
  background: var(--color-primary);
  border: none;
  color: #fff;
  display: flex;
  height: 2.9375rem;
  justify-content: center;
  text-decoration: none;
  width: 13rem;
  /* grid-column: 2; */
}

@media screen and (min-width: 48em) {
  .home {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    flex-wrap: wrap-reverse;
    grid-auto-flow: dense;
  }
  .home__img {
    margin: 1rem 0 0 2.5rem;
  }
  .cta__cv {
    justify-self: flex-start;
  }
}
@media screen and (min-width: 75em) {
  .home__info {
    grid-row: 1;
  }
}
</style>
