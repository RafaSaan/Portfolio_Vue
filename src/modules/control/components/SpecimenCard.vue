<template>
  <div class="specimenCard">
    <uil-times class="deleteCard-icon" @click="onDeleteSpecimen" />
    <div class="card__info">
      <h5>{{ specimen.name }}</h5>
      <p>Especie: {{ specimen.species }}</p>
      <p>Fase: {{ specimen.phase }}</p>
      <p>Sexo: {{ specimen.sex }}</p>
      <p>Nacimiento: {{ specimen.birth }}</p>
    </div>
  </div>
</template>

<script>
import { UilTimes } from "@iconscout/vue-unicons";
import Swal from "sweetalert2";
import useControl from "../composables/useControl";
import { useRouter } from "vue-router";

export default {
  props: {
    specimen: {
      type: Object,
      required: true,
    },
  },
  name: "specimenCard",
  components: {
    UilTimes,
  },
  setup(props) {
    const { deleteSpecimen } = useControl();

    const router = useRouter();

    const onDeleteSpecimen = async () => {
      const { isConfirmed } = await Swal.fire({
        title: "¿Está seguro de eliminar?",
        text: "Al eliminarse no se podra recuperar",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro",
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        console.log("borrando");

        await deleteSpecimen(props.specimen.id);

        router.push({ name: "noRecords" });

        Swal.fire("Eliminado", "", "success");
      }
    };

    return {
      onDeleteSpecimen,
    };
  },
};
</script>

<style>
.specimenCard {
  align-items: center;
  background: var(--color-primary-white);
  border-radius: 0.625rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 17.8rem;
  position: relative;
}
.card__info {
  width: 90%;
}
.card__info > h5 {
  font-size: var(--step--1);
  padding: 0.6rem 0;
  text-align: center;
  margin: 0;
}
.card__info > p {
  padding: 0.5rem 0;
  margin: 0;
}
.deleteCard-icon {
  font-size: 1.5rem;
  position: absolute;
  align-self: flex-end;
  margin: 0 0.2rem 0 0;
  cursor: pointer;
}
</style>
