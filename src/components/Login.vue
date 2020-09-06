<template>
  <div class="mx-auto max-w-sm">
    <div class="py-10 text-center"></div>
    <div class="bg-white rounded-lg shadow">
      <div class="flex flex-col justify-center items-center">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-12 h-12 mt-8 text-orange-500 hover:text-orange-600 duration-hover"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div
        class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase"
      >
        Welcome back !
      </div>

      <form class="bg-gray-100 px-10 py-10">
        <div class="mb-3">
          <input
            class="border w-full p-3 rounded"
            name="email"
            type="text"
            placeholder="E-Mail"
          />
        </div>
        <div class="mb-6">
          <input
            class="border w-full p-3 rounded"
            name="password"
            type="password"
            placeholder="**************"
          />
        </div>
        <div class="flex">
          <button
            class="bg-orange-500 hover:bg-orange-600 duration-hover w-full rounded-full p-4 text-sm text-white uppercase font-bold tracking-wider"
          >
            Login
          </button>
        </div>
      </form>

      <div class="border-t px-6 py-6">
        <div class="flex justify-between">
          <a
            href="#"
            class="font-bold text-blue-600 hover:text-blue-800 no-underline"
            >Don't have an account?</a
          >
          <a
            href="#"
            class="font-semibold text-gray-600 hover:text-black no-underline"
            >Forgot Password?</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
