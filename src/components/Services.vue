<template>
  <div class="section services w-full p-6 bg-blue-100">
    <div class="section-title">
      Our Services
    </div>
    <div class="section-subtitle">
      <span class="text-lg text-orange-600 font-semibold">What</span>
      we love creating …
      <h4>We offer a variety of skillsets, solutions and technologies</h4>
    </div>

    <div class="flex flex-wrap justify-center p-10">
      <!-- Start Card -->
      <div>
        <CardService
          :cartImage="cartImage[0]"
          :cartTitle="cartTitle[0]"
          :cartContent="cartContent[0]"
          :cartColorBg="cartColorBg[0]"
          :cartColorText="cartColorText[0]"
          :cartColorHover="cartColorHover[0]"
        />
      </div>
      <!-- End Card -->
      <!-- Start Card -->
      <div>
        <CardService
          :cartImage="cartImage[1]"
          :cartTitle="cartTitle[1]"
          :cartContent="cartContent[1]"
          :cartColorBg="cartColorBg[1]"
          :cartColorText="cartColorText[1]"
          :cartColorHover="cartColorHover[1]"
        />
      </div>
      <!-- End Card -->
      <!-- Start Card -->
      <div>
        <CardService
          :cartImage="cartImage[2]"
          :cartTitle="cartTitle[2]"
          :cartContent="cartContent[2]"
          :cartColorBg="cartColorBg[2]"
          :cartColorText="cartColorText[2]"
          :cartColorHover="cartColorHover[2]"
        />
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>

<script>
import CardService from "@/components/global/CardService";
export default {
  name: "Services",
  components: { CardService },
  data() {
    return {
      cartContent: [
        `User interface design UI or user interface engineering is the design
            of user interfaces for machines and software, such as computers, home
            appliances, mobile devices, and other electronic devices, with the
            focus on maximizing usability and the user experience.
            `,
        `Web development can range from developing a simple single static page
          of plain text to complex web-based internet applications (web apps),
          electronic businesses, and social network services.`,
        `BI technologies provide historical, current, and predictive views of
          business operations. Common functions of business intelligence
          technologies include reporting, online analytical processing,
          analytics, data mining, process mining, complex event processing,
          business performance management, benchmarking, text mining, predictive
          analytics, and prescriptive analytics.`,
      ],
      cartTitle: ["UI Design", "Web Developper", "Business Intelligence"],
      cartImage: ["UI.svg", "WebDev.svg", "BI.svg"],
      cartColorBg: ["bg-orange-500", "bg-blue-500", "bg-blue-900"],
      cartColorText: ["text-orange-500", "text-blue-500", "text-blue-900"],
      cartColorHover: ["text-orange-300", "text-blue-300", "text-blue-700"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
