<template>
  <div
    class="flex flex-wrap p-4 justify-center rounded-lg transform hover:-translate-y-1 hover:scale-105 duration-hover"
  >
    <div
      class="block bg-white group hover:bg-blue-400  duration-hover rounded-lg rounded-t-none py-2 px-2"
    >
      <img
        :src="require(`@/assets/images/${cardImage}`)"
        alt="design"
        class="block w-full  object-cover rounded-lg rounded-b-none"
        :title="`${cardTitle}`"
      />
      <h1
        class="text-center text-gray-700 text-sm font-semibold group-hover:text-white"
      >
        {{ `${cardTitle}` }}
      </h1>
      <div class="flex flex-wrap justify-start  px-2 py-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photoshop</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#ullistrator</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >
          #Iconography
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    cardImage: String,
    cardTitle: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
