<template>
  <div class="mu-footer container mx-auto">
    <nav
      id="tag__nav"
      class="w-full flex-grow md:flex md:items-center md:w-auto sm:block sm:hidden bg-transparent bg-blue-900 py-6"
      style="background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(34, 166, 179));"
    >
      <div class="md:flex-grow font-semibold sm:text-center">
        <a
          class="text-teal-300 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/react"
        >
          <span>#</span>react
        </a>
        <a
          class="text-green-400 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/vue"
        >
          <span>#</span>vue
        </a>
        <a
          class="text-red-600 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/angular"
        >
          <span>#</span>angular
        </a>
        <a
          class="text-yellow-700 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/javascript"
        >
          <span>#</span>javascript
        </a>
        <a
          class="text-green-500 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/node"
        >
          <span>#</span>node
        </a>
        <a
          class="text-red-500 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/laravel"
        >
          <span>#</span>laravel
        </a>
        <a
          class="text-blue-800 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/vs-code"
        >
          <span>#</span>PHP
        </a>
        <a
          class="text-green-100 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/css"
        >
          <span>#</span>css
        </a>
        <a
          class="text-gray-800 hover:text-white duration-hover  no-underline block mt-4 mr-4 md:mt-0 mt-4 md:inline-block"
          href="/tag/css"
        >
          <span>#</span>HTML
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Tags",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
