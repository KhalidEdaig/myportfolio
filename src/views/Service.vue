<template>
  <div class="home container mx-auto">
    <Header />
    <Services />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Services from "@/components/Services.vue";
export default {
  name: "Home",
  components: {
    Header,
    Services
  }
};
</script>
