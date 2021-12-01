<template>
  <div class="asidePreview">
    <uil-exchangeAlt class="nav-icon nav-preview-icon" @click="menuOpen" />
  </div>
  <transition name="mobile-nav">
    <div class="asideNav" v-if="isOpen">
      <uil-exchangeAlt class="nav-icon" @click="menuOpen" />
      <slot name="btn-add" />
      <SpecimenCard
        v-for="specimen in allSpecimen"
        :key="specimen.id"
        :specimen="specimen"
        @click="$router.push({ name: 'records', params: { id: specimen.id } })"
      />
    </div>
  </transition>
</template>

<script>
import SpecimenCard from "../components/SpecimenCard";
import useControl from "../composables/useControl";
import { UilExchangeAlt } from "@iconscout/vue-unicons";
import { ref } from "vue";

export default {
  name: "asideNav",

  components: {
    SpecimenCard,
    UilExchangeAlt,
  },

  setup() {
    const { allSpecimen } = useControl();

    const isOpen = ref(true);

    const menuOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const checkWidth = () => {
      const windowWhidth = window.innerWidth;
      if (windowWhidth < 750) {
        isOpen.value = false;
      }
    };

    checkWidth();

    return {
      allSpecimen,
      isOpen,
      menuOpen,
    };
  },
};
</script>

<style>
.asideNav {
  background: #fff;
  width: 18.75rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  position: absolute;
}
.asidePreview {
  width: 3rem;
  height: 90vh;
  background: #fff;

  position: relative;
}
::-webkit-scrollbar {
  display: none;
}
.nav-icon {
  font-size: 2rem;

  align-self: flex-end;
  cursor: pointer;
  margin-right: 0.5rem;
}
.nav-preview-icon {
  margin-left: 1rem;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.8s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-300px);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}

@media screen and (min-width: 62.56em) {
  .asideNav {
    position: relative;
  }
  .asidePreview {
    display: none;
  }
  .nav-icon {
    display: none;
  }
  .records {
    width: 80%;
  }
}
</style>
