<template>
  <ul class="list-none p-0 mt-2">
    <li
      v-for="(_, index) in elements"
      class="dot rounded-full cursor-pointer opacity-25 relative bg-orange-600  h-4 w-4 inline-block mr-4"
      :key="index"
      :class="{
        'dot-selected opacity-100 cursor-default':
          currentElementIndex === index,
      }"
    >
      <button
        class="indicator-btn absolute left-0 p-0 h-4 w-4 rounded-full hover:bg-orange-500 border-0"
        @click="showElement(index)"
        :disabled="currentElementIndex === index"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Indicators",
  props: {
    elements: Array,
    currentElementIndex: Number,
    showElement: Function,
  },
};
</script>
