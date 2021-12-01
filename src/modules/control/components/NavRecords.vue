<template>
  <nav class="record__nav">
    <slot name="nav" />
  </nav>
</template>

<script>
export default {
  name: "navRecords",
  setup() {
    return {};
  },
};
</script>

<style>
.record__nav {
  width: 95%;
  margin: 1rem 0;
}

.record__nav > div {
  text-decoration: none;
  color: #000;
  margin: 0 1.5rem 0rem 0;
  display: inline;
  cursor: pointer;
}
.record-active {
  border-bottom: var(--purple) 2px solid;
}
</style>
