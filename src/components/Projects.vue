<template>
  <div class="project container mx-auto ">
    <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
    <div class="section bg-blue-200 py-16">
      <div class="section-title">Our Projects</div>
      <div class="section-subtitle">
        Explore our rich and diverse portfolio.
      </div>
      <nav
        class="flex-grow md:flex md:items-center w-auto mt-4 mb-8 text-white"
      >
        <div class="md:flex-grow font-semibold  sm:text-center">
          <a
            data-title="All Projects"
            href="#"
            class=" no-underline block mt-4 md:inline-block md:mt-0 h-8 sm:mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 sm:text-left cursor-pointer rounded-lg duration-hover"
            >All</a
          >
          <a
            data-title="Projects UI Design"
            class=" no-underline block mt-4 md:inline-block md:mt-0 h-8 sm:mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 sm:text-left cursor-pointer rounded-lg duration-hover"
            href="#"
            >UI Design</a
          >
          <a
            data-title="Projects Web Developer"
            class=" no-underline block mt-4 md:inline-block md:mt-0 h-8 sm:mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 sm:text-left cursor-pointer rounded-lg duration-hover"
            href="#"
            >Web Dev</a
          >

          <a
            data-title="Projects Business Intelligence"
            class=" no-underline block mt-4 md:inline-block md:mt-0 h-8 sm:mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 sm:text-left cursor-pointer rounded-lg duration-hover"
            href="#"
            >BI</a
          >
        </div>
      </nav>
      <div class="flex flex-wrap justify-center items-stretch rounded-lg">
        <div
          class="p-2 "
          v-for="infoProject in infoProjects"
          :key="infoProject.id"
        >
          <CardProjectV2 :infoProject="infoProject" />
        </div>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-confusing-v-for-v-if  -->
  </div>
</template>

<script>
import CardProjectV2 from "@/components/global/CardProjectV2";

import json from "../../data/data__projects.json";
export default {
  name: "Projects",
  components: { /* CardProject */ CardProjectV2 },
  data() {
    return {
      infoProjects: json,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
