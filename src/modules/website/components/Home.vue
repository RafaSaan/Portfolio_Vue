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
      <h2>Hola! yo soy Rafa, Desarrollador Web Jr.</h2>
      <p>
        Soy una persona que esta en constante aprendizaje, tengo 20 años, vivo
        en CDMX, amante de la tecnologia y los videojuegos.
      </p>
    </div>

    <button class="cta__cv">Descargar CV</button>
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
  width: 13rem;
  height: 2.9375rem;
  border: none;
  background: var(--color-primary);
  color: #fff;
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
