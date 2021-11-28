<template>
  <footer class="footer">
    <div class="footer__redes">
      <a
        href="https://www.linkedin.com/in/rafaelsaan/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <uil-linkedin class="icon-redes" />
      </a>

      <a
        href="https://github.com/RafaSaan"
        rel="noopener noreferrer"
        target="_blank"
      >
        <uil-github class="icon-redes" />
      </a>
      <a
        href="mailto:rsaan02@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <uil-envelopeAlt class="icon-redes" />
      </a>
    </div>
    <p>Copyright ©2021 All rights reserved</p>
  </footer>
</template>

<script>
import { UilGithub, UilLinkedin, UilEnvelopeAlt } from "@iconscout/vue-unicons";
export default {
  name: "footerWeb",
  components: {
    UilGithub,
    UilLinkedin,
    UilEnvelopeAlt,
  },
};
</script>

<style>
.footer {
  margin: 1.5rem 0;
}
.icon-redes {
  font-size: 2.2rem;
  margin: 1.5rem;
  cursor: pointer;
  color: var(--bg-grey);
}
.icon-redes:hover {
  transform: scale(1.2);
  transition: all 0.6s ease-in-out;
}
</style>
