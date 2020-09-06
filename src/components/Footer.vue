<template>
  <div class="mu-footer container mx-auto">
    <div class="w-full bg-blue-900">
      <div class="flex flex-wrap text-center text-white">
        <!-- START COLUMN ABOUT -->
        <div
          class="w-full md:w-1/3 p-5 border-b border-blue-800 md:border-r border-blue-800 md:text-left"
        >
          <div class="my-6 ml-3 text-xl font-semibold">ABOUT ME</div>
          <p class="p-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras
            sodales id ipsum at convallis.
          </p>
          <p class="p-3 text-gray-400">
            Morbi tristique massa nec massa auctor, at scelerisque felis
            consectetur. Morbi tempus et odio sit amet feugiat. Maecenas
            dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.
          </p>
        </div>
        <!-- END COLUMN ABOUT -->

        <!-- START COLUMN CONTACT -->
        <div
          class="w-full md:w-1/3 p-5 border-b border-blue-800 md:border-r border-blue-800 "
        >
          <div class="my-6 text-xl font-semibold">CONTACT US</div>
          <div class="text-left">
            <p class="mt-8 text-gray-400">
              <strong class="mr-4">Full Name:</strong>EDAIG Khalid <br />
              <strong class="mr-4">Address:</strong>Oued Zem,Morocco <br />
              <strong class="mr-4">Country:</strong>Morocco <br />
              <strong class="mr-4">Phone:</strong> +212682830900 <br />
              <strong class="mr-4">Email:</strong> edaigKhalid@gmail.com
            </p>
          </div>
          <div class="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
            <div
              class="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer duration-hover"
            >
              <svg
                class="h-6 w-6 text-orange-500 -rotate-45"
                fill="currentColor"
                viewBox="0 0 112.196 112.196"
              >
                <circle
                  fill-rule="evenodd"
                  cx="56.098"
                  cy="56.097"
                  r="56.098"
                  clip-rule="evenodd"
                />

                <path
                  style="fill:#F1F2F2;"
                  d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
                />
              </svg>
            </div>

            <div
              class="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer duration-hover"
            >
              <svg
                class="h-6 w-6 text-orange-500 -rotate-45 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 22.7h-.1l-.1-.1V22v-2.5c0-.7-.1-1.3-.4-1.8 2.3-.4 4.8-1.6 4.8-6.1 0-1.2-.4-2.3-1.1-3.2.2-.6.3-1.7-.2-3.1l-.3-.3s-.2-.1-.4-.1c-.6 0-1.5.2-3 1.2-.8-.1-1.7-.3-2.7-.3-1 0-1.9.1-2.8.3C7.8 5.2 6.8 5 6.2 5c-.2 0-.3.1-.4.1-.1 0-.3.2-.3.3-.5 1.4-.4 2.5-.2 3.1-.7.9-1.1 2-1.1 3.2 0 4.4 2.6 5.6 4.8 6.1-.1.2-.2.5-.3.8-.2.1-.5.2-.9.2s-.8-.1-1.1-.4l-.1-.1c-.1-.1-.1-.2-.2-.2l-.1-.1-.1-.1c0-.1-.8-1.3-2.2-1.4-.5 0-.9.2-1 .5-.2.5.4.9.7 1.1 0 0 .6.3 1 1.4.2.7 1.1 2 3.2 2h.7v1.4l-.1.1s-.1 0 0 0C4 21.2 1 17 1 12.3c0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.7-3 8.9-7.5 10.4z"
                />
              </svg>
            </div>

            <div
              class="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer duration-hover"
            >
              <svg
                class="h-6 w-6 text-orange-500 -rotate-45"
                fill="currentColor"
                viewBox="0 0 112.197 112.197"
              >
                <circle
                  fill-rule="evenodd"
                  cx="56.099"
                  cy="56.098"
                  r="56.098"
                  clip-rule="evenodd"
                />
                <path
                  style="fill:#F1F2F2;"
                  d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
			c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
			c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
			c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
			c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
			c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
			c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
			C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
                />
              </svg>
            </div>
            <div
              class="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer duration-hover"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 291.319 291.319"
                class="h-6 w-6 text-orange-500 -rotate-4 "
              >
                <path
                  fill-rule="evenodd"
                  d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
		S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  style="fill:#FFFFFF;"
                  d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
		v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
		C154.791,104.556,158.341,100.277,163.394,100.277z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- END COLUMN CONTACT -->

        <!-- START COLUMN FORM SEND MESSAGE -->
        <div class="w-full md:w-1/3 p-5 border-b border-blue-800">
          <div class="mt-6 text-xl font-semibold">SEND ME MESSAGE</div>
          <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
            <div class="flex items-center mb-4">
              <input
                class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="flex items-center mb-4">
              <input
                class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <textarea
                class="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="flex justify-center items-center ">
              <button
                class="bg-orange-600 hover:bg-orange-700  text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <svg
                  class="h-4 w-4 text-white mr-2"
                  fill="currentColor"
                  viewBox="0 0 465.882 465.882"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"
                  />
                </svg>
                <span>SEND</span>
              </button>
            </div>
          </form>
        </div>

        <!-- END COLUMN FORM SEND MESSAGE -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
