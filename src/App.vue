<template>
  <div class="nav">
    <router-link to="/" class="nav__link" active-class="link-active"
      >Inicio</router-link
    >
    <router-link to="/proyectos" class="nav__link" active-class="link-active"
      >Proyectos</router-link
    >
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap");
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: "Heebo", sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 87.5rem;
}
.nav {
  display: flex;
  justify-content: flex-end;
  width: 80%;
}
.nav__link {
  color: #000;
  font-size: var(--step--1);
  font-weight: bold;
  margin: 1.6rem 0 0 2rem;
  text-decoration: none;
}
.link-active {
  color: var(--color-primary);
}
</style>
