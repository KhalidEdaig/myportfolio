<template>
  <div id="App" class="container mx-auto">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&family=Sen:wght@700&display=swap"
      rel="stylesheet"
    />
    <!-- Start NavBar App -->
    <nav class="App__nav">
      <NavBar />
    </nav>
    <!-- End NavBar App -->
    <!-- Start Main App -->
    <main class="App__main">
      <transition
        mode="out-in"
        :name="transitionName"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </main>
    <!-- End Main App -->
    <footer class="App__footer">
      <!-- Start Footer App -->
      <Footer />
      <div class="bg-blue-900 text-center py-4">
        <a class="text-gray-100 hover:text-orange-600 cursor-pointer"
          >&copy;<span class="ml-2"> M.D.I</span></a
        >
      </div>
    </footer>
    <!-- End Footer App -->
  </div>
</template>
<script>
const DEFAULT_TRANSITION = "fade";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>
<style src="./assets/css/data__title.css" />
<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}

input[placeholder="Search"] {
  color: rgb(19, 15, 64);
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
