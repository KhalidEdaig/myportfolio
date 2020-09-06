<template>
  <div class="section services bg-blue-100 ">
    <!-- Start Card -->
    <div
      class="card hover:opacity-75 hover:-translate-y-1 hover:scale-110 duration-hover  "
    >
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <div
        :class="cartColorBg"
        class="w-full h-20  flex items-center justify-center rounded-md shadow-lg"
      >
        <img
          class="h-16 w-24"
          :src="require(`@/assets/icons/${cartImage}`)"
          :alt="{ cartImage }"
        />
      </div>
      <p
        class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase"
      >
        {{ cartTitle }}
      </p>
      <p class="p-2 text-sm text-gray-700">
        {{ cartContent | readMore(220, " ...") }}
      </p>
      <div
        class="absolute right-0 bottom-0 w-8 h-8  text-center cursor-pointer"
      >
        <a
          data-title="ReadMore"
          href="https://en.wikipedia.org/wiki/User_interface_design"
          target="_blank"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="
              `mt-0  w-8 h-8  duration-hover ${cartColorText} hover:${cartColorHover}`
            "
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <!-- End Card -->
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cartImage: String,
    cartTitle: String,
    cartContent: String,
    cartColorBg: String,
    cartColorText: String,
    cartColorHover: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
