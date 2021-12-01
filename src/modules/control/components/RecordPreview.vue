<template>
  <div className="record__item recordPreview ">
    <p className="">{{ type }}</p>
    <p>{{ secondSlot }}</p>
    <p>{{ thirdSlot }}</p>
    <div className="icons-container">
      <uil-trashAlt class="delete-icon icon-preview" />
      <uil-editAlt class="edit-icon icon-preview" />
    </div>
  </div>
</template>

<script>
import { UilTrashAlt } from "@iconscout/vue-unicons";
import { UilEditAlt } from "@iconscout/vue-unicons";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    secondSlot: {
      type: String,
      required: true,
    },
    thirdSlot: {
      type: String,
    },
  },
  name: "recordPreview",
  components: {
    UilTrashAlt,
    UilEditAlt,
  },
};
</script>

<style>
.recordPreview {
  background: none;
  color: rgba(0, 0, 0, 0.5);
}
.icon-preview {
  opacity: 0.5;
  cursor: default !important;
}
</style>
