<template>
  <div id="Header" class="mu-header container mx-auto bg-blue-100">
    <div
      class="px-6 py-1"
      style="background: linear-gradient(90deg, rgba(0,212,255,1) 5%, rgba(99,99,135,1) 100%, rgba(0,8,36,1) 100%);"
    >
      <div
        class="block flex flex-col text-center lg:flex-row  justify-between items-center "
      >
        <div class="container px-6 block mb-4  lg:inline-block lg:mb-0 ">
          <h2 class="text-4xl font-semibold mb-2 text-white">
            {{ headLine[0].headTitle | readMore(200, "...") }}
            <!-- Create your own webSite
            <span data-title="Single Page Application">SPA</span>. -->
          </h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            {{ headLine[0].headContent | readMore(200, "...") }}
            <!-- Monitor your everything smartly anywhere you go. -->
          </h3>
          <button
            class="bg-orange-500 text-gray-100 focus:outline-none hover:bg-white hover:bg-orange-600 font-semibold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Get Started
          </button>
        </div>
        <div class=" hidden sm:block lg:inline-block">
          <Slider
            :currentElementIndex="currentElementIndex"
            :currentImage="images[currentElementIndex]"
            :startRotation="startRotation"
            :stopRotation="stopRotation"
          />
        </div>
      </div>
      <div class="text-center  hidden sm:block">
        <Indicators
          :elements="images"
          :currentElementIndex="currentElementIndex"
          :showElement="showElement"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Indicators from "@/components/Indicators.vue";
export default {
  name: "Header",
  components: { Slider, Indicators },
  data() {
    return {
      tags__show: true,
      images: ["prog1.jpg", "prog2.jpg", "prog3.jpg", "prog4.jpg"],
      headLine: [
        {
          headTitle: `Create your own webSite SPA`,
          headContent: `Monitor your everything smartly anywhere you go.`
        }
      ],
      timer: null,
      currentElementIndex: 0
    };
  },
  mounted: function() {
    this.startRotation();
  },

  methods: {
    showTags: function() {
      return (this.tags__show = !this.tags__show);
    },
    startRotation: function() {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      if (this.currentElementIndex < this.images.length - 1) {
        this.currentElementIndex++;
      } else {
        this.currentElementIndex = 0;
      }
    },
    prev: function() {
      if (this.currentElementIndex < 0) {
        this.currentElementIndex = 0;
      } else {
        this.currentElementIndex--;
      }
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    }
  }
};
</script>
<style src="../assets/css/data__title.css" />

<style lang="scss" scoped></style>
