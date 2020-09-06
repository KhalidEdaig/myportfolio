<template>
  <div class="carousel">
    <div class="carousel-inner relative w-full overflow-hidden h-96">
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden
        checked="checked"
      />

      <div
        class="carousel-item  absolute opacity-0 transition duration-600 ease-out"
      >
        <img
          class="carousel-img w-full  block object-contain "
          src="../assets/images/dev1.jpg"
        />
        <!-- <img src="http://fakeimg.pl/2000x1200/0079D8/fff/?text=Slide1" /> -->
      </div>
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden
      />
      <ol
        class="carousel-indicators list-none m-0 p-0 absolute text-center z-10 "
      >
        <li>
          <label
            for="carousel-1"
            class="carousel-bullet text-white cursor-pointer block text-4xl hover:text-gray-600"
            >•</label
          >
        </li>
        <li>
          <label
            for="carousel-2"
            class="carousel-bullet text-white cursor-pointer block text-4xl hover:text-gray-600"
            >•</label
          >
        </li>
        <li>
          <label
            for="carousel-3"
            class="carousel-bullet text-white cursor-pointer block text-4xl hover:text-gray-600"
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {};
  },
  props: [],
  components: {}
};
</script>
<style lang="scss" scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  bottom: 0.1rem;
  left: 0;
  right: 0;
}

.carousel-indicators li {
  display: inline-block;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #428bca;
}

#title {
  width: 100%;
  position: absolute;
  padding: 0px;
  margin: 0px auto;
  text-align: center;
  font-size: 27px;
  color: rgba(255, 255, 255, 1);
  font-family: "Open Sans", sans-serif;
  z-index: 9999;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33),
    -1px 0px 2px rgba(255, 255, 255, 0);
}
</style>
