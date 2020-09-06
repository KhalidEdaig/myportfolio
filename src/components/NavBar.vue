<template>
  <div id="App" class="bg-gray-200 container mx-auto">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&family=Sen:wght@700&display=swap"
      rel="stylesheet"
    />
    <nav
      id="App_Nav"
      class="flex items-center justify-between flex-wrap bg-teal p-6 py-4 bg-blue-900 container mx-auto shadow-md"
    >
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <div class="flex-shrink-0  cursor-pointer">
          <svg width="64" height="44">
            <g>
              <rect
                fill="none"
                id="canvas_background"
                height="46"
                width="66"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <image
                stroke="null"
                canvas="none"
                canvas-opacity="1"
                xlink:href="data:image/png;base64,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"
                id="svg_9"
                height="46"
                width="64"
                y="-1.015964"
                x="-0.154751"
              />
              <path
                stroke="#e58124"
                id="svg_23"
                d="m35.025992,17.909406c-10.157123,10.180641 -11.340477,11.359452 -10.157123,10.180641c1.183354,-1.178811 20.314246,-20.361282 10.157123,-10.180641z"
                fill-opacity="null"
                stroke-width="null"
                fill="none"
              />
              <text
                transform="matrix(0.9344755411148071,0,0,1,16.820333359763026,0) "
                font-style="italic"
                font-weight="bold"
                xml:space="preserve"
                text-anchor="start"
                font-family="'Times New Roman', Times, serif"
                font-size="9"
                id="svg_27"
                y="24.47565"
                x="4.510796"
                stroke-width="0"
                fill="#19eaea"
              >
                M.
              </text>
              <text
                stroke="#7383BF"
                transform="matrix(0.9344755411148071,0,0,1,16.820333359763026,0) "
                font-style="italic"
                font-weight="bold"
                xml:space="preserve"
                text-anchor="start"
                font-family="'Times New Roman', Times, serif"
                font-size="9"
                id="svg_28"
                y="24.478891"
                x="14.262868"
                stroke-opacity="null"
                stroke-width="0"
                fill="#09b6ef"
              >
                D
              </text>
              <text
                stroke="#7383BF"
                transform="matrix(0.9344755411148071,0,0,1,16.820333359763026,0) "
                font-style="italic"
                font-weight="bold"
                xml:space="preserve"
                text-anchor="start"
                font-family="'Times New Roman', Times, serif"
                font-size="9"
                id="svg_29"
                y="24.478891"
                x="20.270841"
                stroke-opacity="null"
                stroke-width="0"
                fill="#1187fc"
              >
                .I
              </text>
            </g>
          </svg>
        </div>
        <span class="font-semibold text-xl tracking-tight">M.D.I</span>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggleNavOpen"
          :class="{
            'flex items-center px-3 py-2 rounded text-blue-100 focus:outline-none hover:text-blue-200': !isNavOpen,
            hidden: isNavOpen,
          }"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          @click="toggleNavOpen"
          :class="{
            'flex items-center px-3 py-2 rounded text-blue-100 focus:outline-none hover:text-blue-200': isNavOpen,
            hidden: !isNavOpen,
          }"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        :class="isNavOpen ? 'block' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto "
      >
        <div class="md:flex-grow font-semibold">
          <router-link
            to="/"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            Services
          </router-link>
          <router-link
            to="/projects"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            Projects
          </router-link>
          <router-link
            to="/team"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            Team
          </router-link>
          <router-link
            to="/about"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="no-underline block mt-4 lg:inline-block lg:mt-0  hover:text-blue-100 mr-4 text-blue-200 cursor-pointer"
          >
            Contact us
          </router-link>
        </div>
        <!-- Star Bar Search  -->

        <div
          :class="{ hidden: !isSearchBarOpen }"
          class="mx-auto w-full lg:w-64 inline-block mt-6 lg:mt-0 relative text-gray-600 "
        >
          <input
            class="search-input hover:bg-blue-100 w-full lg:w-64 border-2 border-gray-300 bg-white h-10 px-4 pr-12 rounded-lg text-sm focus:outline-none rounded-full"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0  mr-4 focus:outline-none"
          >
            <svg
              class="text-gray-600 h-4 w-4 mt-3 fill-current"
              viewBox="0 0 56.966 56.966"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>

        <!-- End Bar Search -->
        <div>
          <button
            @click="toggleSearchOpen"
            :class="{ hidden: isSearchBarOpen }"
            class="no-underline inline-block mt-4 lg:mt-0 text-blue-100 hover:text-white focus:outline-none px-2 py-2 rounded  "
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            @click="toggleSearchOpen"
            :class="{ hidden: !isSearchBarOpen }"
            class="no-underline inline-block  text-blue-100 hover:text-white focus:outline-none px-2 py-2 rounded  mt-4 md:mt-0 cursor-pointer"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <router-link
            class="no-underline inline-block duration-hover px-2 py-2 leading-none font-semibold rounded text-blue-200  hover:bg-blue-600 mt-4 md:mt-0"
            to="/login"
            >Login</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isNavOpen: false,
      isSearchBarOpen: false,
      prevHeight: 0,
    };
  },
  methods: {
    toggleNavOpen: function() {
      return (this.isNavOpen = !this.isNavOpen);
    },
    toggleSearchOpen: function() {
      return (this.isSearchBarOpen = !this.isSearchBarOpen);
    },
  },
};
</script>
