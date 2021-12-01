<template>
  <div class="cardPreview">
    <slot name="img" />
    <div class="card__info">
      <h3>{{ titleCard }}</h3>
      <div class="card__type">
        <div class="card__date">{{ date }}</div>
        <span>{{ type }}</span>
      </div>
      <p>
        {{ description }}
      </p>
      <div class="card__link" @click="$router.push({ name: 'proyectos' })">
        Ver más detalles.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleCard: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  name: "cardPreviewProject",
};
</script>

<style>
.cardPreview {
  min-height: 13.75rem;
  margin: 1rem 0;
}
.card__info {
  width: 100%;
}
.card__info > h3 {
  font-size: var(--step-1);
  margin: 0.5rem 0;
}
.card__type {
  display: flex;
}
.card__date {
  width: 3.875rem;
  height: 1.5625rem;
  border-radius: 5rem;
  background: var(--bg-grey);
  color: #fff;
  display: grid;
  place-items: center;
}
.card__type > span {
  font-size: var(--step--1);
  color: #8695a4;
  padding-left: 1.6rem;
}
.card__info > p {
  font-size: var(--step--2);
  /* justify-self: flex-end; */
}
.card__link {
  cursor: pointer;
  color: #551a8b;
}
@media screen and (min-width: 48em) {
  .cardPreview {
    display: flex;
    align-items: center;
  }
  .card__info {
    margin-left: 1.5rem;
  }
}
</style>
