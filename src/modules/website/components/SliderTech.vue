<template>
  <section class="sliderTech">
    <Swiper
      class="successSlider mySwiper"
      :slidesPerView="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '440': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 150,
        },
      }"
    >
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-html.svg" alt="icono-" />
          <h5>HTML</h5>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-css.svg" alt="icono-" />
          <h5>CSS</h5>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-sass.svg" alt="icono-" />
          <h5>SASS</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-boot.png" alt="icono-" />
          <h5>Bootstrap</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-javascript.svg" alt="icono-" />
          <h5>JavaScript</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-vue-js.svg" alt="icono-" />
          <h5>VueJs</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-react.svg" alt="icono-" />
          <h5>ReactJs</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-node-js.svg" alt="icono-" />
          <h5>NodeJs</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-git.svg" alt="icono-" />
          <h5>GIT</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="tech__item">
          <img src="../../../assets/img/icon-figma.svg" alt="icono-" />
          <h5>Figma</h5>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default {
  name: "sliderTech",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {},
};
</script>

<style>
.sliderTech {
  width: 100%;
  background: var(--color-secondry);
  display: flex;
  height: 13.75rem;
  margin: 2rem 0;
}
.tech__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 13.75rem;
  margin-top: 2rem;
}
.tech__item > h5 {
  font-size: var(--step--1);
}
.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>
