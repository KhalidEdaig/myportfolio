<template>
  <div class="container mx-auto">
    <div class="slider h-81 rounded-lg  w-96 lg:w-120 m-auto ">
      <transition-group name="fade">
        <div v-for="number in [currentElementIndex]" :key="number">
          <img
            class="image-slide rounded-lg hover:opacity-75 cursor-pointer w-96 lg:w-120"
            :src="require(`@/assets/images/${currentImage}`)"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "images__slider",
  props: {
    currentElementIndex: Number,
    currentImage: String,
    startRotation: Function,
    stopRotation: Function
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
