<template>
  <div class="home container mx-auto">
    <Header />
    <Services />
    <Projects />
    <Team />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Services from "@/components/Services.vue";
import Projects from "@/components/Projects.vue";
import Team from "@/components/Team.vue";

export default {
  name: "Home",
  components: {
    Header,
    Services,
    Projects,
    Team,
  },
};
</script>
