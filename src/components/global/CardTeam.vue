<template>
  <div id="CardTeam" class="duration-hover">
    <!--  Start Member One -->
    <div
      class="card-team max-w-sm group hover:bg-gray-200 hover:-mt-2  duration-hover"
    >
      <img
        class="h-16 w-16  rounded-full mx-auto hover:opacity-75 "
        :src="require(`@/assets/images/${info_member['image']}`)"
      />

      <div class="text-center py-4">
        <h2
          class="text-lg  text-gray-700 font-semibold  group-hover:text-gray-800"
        >
          {{ `${info_member["name"]}` }}
        </h2>
        <div class="text-gray-600 font-semibold group-hover:text-gray-600">
          {{ `${info_member["email"]}` }}
        </div>
        <div class="text-gray-600 font-semibold group-hover:text-gray-600">
          {{ `${info_member["phone"]}` }}
        </div>
        <div class="text-blue-500 font-semibold group-hover:text-blue-600">
          {{ `${info_member["job"]}` }}
        </div>

        <!--***************  Start Social Media ******************  -->
        <div class="flex justify-center items-center p-2">
          <div class="social-media hover:text-orange-500 ">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                class="h-6 w-6"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z"
                />
              </svg>
            </a>
          </div>
          <div class="social-media hover:text-orange-500 ">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                class="h-6 w-6"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"
                />
              </svg>
            </a>
          </div>
          <div class="social-media hover:text-orange-500">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                class="h-6 w-6"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.3316 20.338L23.2812 19.5075C23.1301 17.3551 24.4563 15.3891 26.5548 14.6265C27.327 14.3553 28.6364 14.3214 29.4926 14.5587C29.8283 14.6604 30.4663 14.9993 30.9195 15.3044L31.7421 15.8637L32.6486 15.5756C33.1523 15.423 33.8238 15.1688 34.1259 14.9993C34.4113 14.8468 34.6631 14.762 34.6631 14.8129C34.6631 15.101 34.042 16.084 33.5216 16.6263C32.8165 17.389 33.018 17.4568 34.4449 16.9483C35.3011 16.6602 35.3178 16.6602 35.15 16.9822C35.0492 17.1517 34.5288 17.7449 33.9748 18.2872C33.0347 19.2194 32.9844 19.3211 32.9844 20.1007C32.9844 21.304 32.4136 23.8123 31.8428 25.1851C30.7852 27.7612 28.5189 30.422 26.2526 31.7609C23.063 33.6422 18.8157 34.1167 15.24 33.0151C14.0481 32.6422 12 31.6931 12 31.5237C12 31.4728 12.6211 31.405 13.3766 31.3881C14.9546 31.3542 16.5326 30.9135 17.8756 30.1339L18.7822 29.5916L17.7413 29.2357C16.264 28.7272 14.9378 27.5578 14.6021 26.4562C14.5013 26.1003 14.5349 26.0833 15.475 26.0833L16.4487 26.0664L15.6261 25.6766C14.6524 25.1851 13.7627 24.3546 13.3262 23.5072C13.0072 22.8971 12.6044 21.3548 12.7219 21.2362C12.7554 21.1854 13.108 21.287 13.5109 21.4226C14.6692 21.8463 14.8203 21.7446 14.1488 21.0328C12.8897 19.7448 12.5036 17.8296 13.108 16.0162L13.3934 15.2027L14.5013 16.3043C16.7677 18.5245 19.4369 19.8465 22.4922 20.2363L23.3316 20.338Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!--***************  End Social Media ******************  -->
      </div>
      <div
        class="text-center text-ms font-medium text-white bg-blue-400 hover:bg-orange-500 duration-hover cursor-pointer rounded-full py-2 px-1"
      >
        <a href="#">
          About Me
        </a>
      </div>
    </div>
    <!--  End Member One -->
  </div>
</template>

<script>
export default {
  name: "CardTeam",
  props: {
    info_member: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
