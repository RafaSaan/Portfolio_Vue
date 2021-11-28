<template>
  <Home />
  <SliderTech />
  <PreviewProjects />
  <Footer />
</template>

<script>
import Home from "../components/Home";
import SliderTech from "../components/SliderTech";
import PreviewProjects from "../components/PreviewProjects";
import Footer from "../../../components/Footer";
export default {
  name: "portfolioLayout",
  components: {
    Home,
    SliderTech,
    PreviewProjects,
    Footer,
  },
};
</script>

<style></style>
