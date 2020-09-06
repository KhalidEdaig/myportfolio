<template>
  <div class="team container mx-auto">
    <div class="section bg-blue-300">
      <div class="section-title">OUR TEAM</div>
      <div class="section-subtitle">Meet our skilled professionals.</div>
      <div class="flex flex-wrap justify-center items-center">
        <!--  Start Member Two -->
        <div
          class="member2 p-4"
          v-for="info_member in info_members"
          :key="info_member.id"
        >
          <CardTeam :info_member="info_member" />
        </div>
        <!--  End Member Two -->
      </div>
    </div>
  </div>
</template>

<script>
import CardTeam from "@/components/global/CardTeam";

import json from "../../data/data__team.json";
export default {
  name: "Team",
  components: {
    CardTeam,
  },
  data() {
    return {
      info_members: json,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
