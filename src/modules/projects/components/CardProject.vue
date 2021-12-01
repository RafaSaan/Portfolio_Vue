<template>
  <div class="cardPoject">
    <slot name="img" />
    <div class="cardProject__info">
      <h3>{{ titleCard }}</h3>
      <div class="cardProject__type">
        <div class="card__date">{{ date }}</div>
        <span>{{ type }}</span>
      </div>
      <p>
        {{ description }}
      </p>
      <slot name="howDid" />
    </div>
    <slot name="links" />
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
  name: "cardProject",
};
</script>

<style>
.cardPoject {
  margin: 1rem 0 8rem 0;
  display: flex;
  flex-direction: column;
}
.img__project {
  width: 17.5rem;
  max-width: 42.625rem;
}
.cardProject__info > h3 {
  font-size: var(--step-1);
  margin: 0.5rem 0;
}
.cardProject__info > p {
  font-size: var(--step--1);
  max-width: 42.5rem;
}
.cardProject__type {
  display: flex;
}
.cardProject__type > span {
  font-size: var(--step--1);
  color: #8695a4;
  padding-left: 1.6rem;
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
.cards__links > a {
  font-size: var(--step--1);
  cursor: pointer;
  text-decoration: none;
}
.cards__links {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 31.25em) {
  .img__project {
    width: 55vw;
  }
}
</style>
