<template>
  <div class="py-8 px-12">
    <form action="/" method="post">
      <div class="grid grid-cols-12 gap-4   px-4">
        <h1 class="col-span-12 lg:col-span-6 text-xl text-gray-700  px-2">
          <span class="text-lg text-orange-600 font-semibold">Your</span>
          Informations
        </h1>
        <h1 class="col-span-12 lg:col-span-6 text-xl text-gray-700  px-2">
          <span class="text-lg text-orange-600 font-semibold">How</span> can we
          help you ?
        </h1>
      </div>
      <div class="grid grid-cols-12 gap-4 text-gray-600 rounded-lg py-4 px-2">
        <div
          class="col-span-12 lg:col-span-6  border-t-4 border-orange-500 rounded-lg "
        >
          <div class="border py-4 px-6 rounded-lg bg-gray-200">
            <div class="flex flex-col mb-4 md:w-full">
              <label
                class="mb-2  tracking-wide font-bold text-lg text-gray-600"
                for="first_name"
                >Name *</label
              >
              <input
                class="border py-2 px-3 text-gray-600 md:mr-2 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label class="mb-2 font-bold text-lg text-gray-600" for="phone"
                >Phone</label
              >
              <input
                class="border py-2 px-3 text-gray-600 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                type="text"
                name="phote"
                id="phone"
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label class="mb-2 font-bold text-lg text-gray-600" for="email"
                >Email *</label
              >
              <input
                class="border py-2 px-3 text-gray-600 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div class="flex flex-col mb-4 md:w-full">
              <label
                class="mb-2 font-bold text-lg text-gray-600"
                for="current-webSeite-address"
                >Current WebSeite Address</label
              >
              <input
                class="border py-2 px-3 text-gray-600 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                type="text"
                name="current-webSeite-address"
                id="current-webSeite-address"
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label
                class="mb-2 font-bold text-lg text-gray-600"
                for="company-name"
                >Company Name</label
              >
              <input
                class="border py-2 px-3 text-gray-600 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                type="text"
                name="company-name"
                id="company-name"
              />
            </div>
            <div
              class="flex flex-wrap justify-between items-center mb-4 w-full"
            >
              <label class="mr-2 font-bold text-lg text-gray-600" for="budget"
                >What is your budget ? *</label
              >
              <div class="relative ">
                <select
                  name="budget"
                  class="block appearance-none w-64 cursor-pointer 
                  border border-gray-200 text-gray-600 py-3 px-4 pr-8 rounded leading-tight  border-blue-500  focus:outline-none focus:bg-white focus:border-orange-500
                  "
                  id="budget"
                >
                  <option value=""></option>
                  <option value="Up-500$">Up to 500$</option>
                  <option value="500$-to-1000$">500$ to 1000$</option>
                  <option value="1000$-to-2000$">1000$ to 2000$</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="flex flex-wrap justify-between  items-center mb-4 w-full"
            >
              <label class="mr-2 font-bold text-lg text-gray-600" for="budget"
                >Where did you hear about us ? *</label
              >
              <div class="relative ">
                <select
                  name="hear-about-us-in"
                  class="block appearance-none w-64 cursor-pointer 
                  border border-gray-200 text-gray-600 py-3 px-4 pr-8 rounded leading-tight border-blue-500 focus:outline-none focus:bg-white focus:border-orange-500
                  "
                  id="hear-about-us-in"
                >
                  <option value=""></option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label class="mb-2 font-bold text-lg text-gray-600" for="provider"
                >Please provide your project requirements *</label
              >
              <div class="">
                <textarea
                  id="provider"
                  class="w-full h-48 border py-2 px-3 text-gray-600 cursor-pointer rounded focus:outline-none hover:border hover:border-orange-500"
                ></textarea>
              </div>
              <p class="text-red-500 text-xs italic py-2">
                * Denotes a required feild.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 lg:col-span-6  border-t-4 border-orange-500 rounded-lg bg-gray-200"
        >
          <div class="border-b py-4 px-6 rounded-lg">
            <h4 class="leading-tight mb-4 text-lg font-semibold text-gray-600 ">
              Please choose the services are you interested in?
            </h4>
            <div v-for="(choise, index) in choises" :key="index">
              <CheckboxChoise :choises="choise" :index="index" />
            </div>

            <button
              class="block bg-orange-500 hover:bg-blue-400 duration-hover text-white  text-lg mx-auto py-2 px-2 rounded-lg"
              type="submit"
            >
              Send Now
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CheckboxChoise from "@/components/global/CheckboxChoise";
export default {
  name: "Contact-us",
  components: {
    CheckboxChoise
  },
  data() {
    return {
      choises: [
        `Transfer my email and website hosting`,
        `A new website that I can content manage`,
        `Refresh the design and update my current website`,
        `General updates & maintenance`,
        `Monthly website maintenance and support`,
        `An ecommerce shop to sell products`,
        `Make my website mobile friendly`,
        `Web development, something more bespoke`,
        `Create a mobile appSearch engine optimisation campaign for Google page 1A FREE SEO report`,
        `AdWords and Pay Per Click for Google, yahoo & Bing Ad`,
        `WordsSocial media posting, campaigns and management`,
        `Logo design, Business cards and other marketing design`,
        `360 virtual tours & photography`,
        `By using this form you agree with the storage and handling of your data by this website. *`
      ]
    };
  }
};
</script>
