<template>
  <div
    class="flex flex-wrap  rounded-lg transform hover:-translate-y-1 hover:scale-105 duration-hover"
  >
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        :src="require(`@/assets/images/${infoProject['image']}`)"
        alt="Sunset in
      the mountains"
        :title="`${infoProject['title']}`"
      />
      <div
        class="bg-white group hover:bg-blue-400 duration-hover cursor-pointer"
      >
        <div class="px-4 py-3 group-hover:text-white">
          <div class="font-bold text-xl mb-2">
            {{ `${infoProject["title"]}` }}
          </div>
          <p class="text-gray-700 text-base group-hover:text-white">
            {{ `${infoProject["content"]}` | readMore(100, " ...") }}
          </p>
        </div>
        <div class="px-2 py-2">
          <span
            class="inline-block hover:bg-gray-200 rounded-lg px-2 py-2 text-sm hover:font-semibold text-gray-700 "
            v-for="(tag, index) in filteredTags"
            :key="index"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    infoProject: Object,
  },
  computed: {
    filteredTags: function() {
      return this.infoProject["tags"].slice(0, 3);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
