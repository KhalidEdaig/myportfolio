<template>
  <label
    class="mb-4 w-full flex flex-wrap items-center text-gray-600 font-semibold"
  >
    <input
      class="mr-2 leading-tight"
      type="checkbox"
      :name="`choice${index}`"
    />
    <span class="text-sm">
      {{ `${choises}` }}
    </span>
  </label>
</template>
<script>
export default {
  name: "CheckboxChoise",
  props: {
    choises: String,
    index: Number,
  },
};
</script>
<style lang="sass"></style>
