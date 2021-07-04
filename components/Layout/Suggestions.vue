<template>
  <div class="px-3 suggestions lg:mt-12 lg:pt-5 dark:bg-black">
    <p class="text-center fs-24 btn-letter-spacing dark:text-white lg:mb-3">
      SUGGESTED
    </p>
    <div id="scroll-suggestion" class="overflow-y-scroll">
      <div
        v-for="(suggestion, index) in suggestions"
        :key="index"
        class="mb-16"
      >
        <vs-card actionable class="cardx">
          <div slot="media" class="relative">
            <img :src="`/images/${suggestion.img}`" />
            <div class="absolute flex justify-center w-full center top-80">
              <vs-button block class="w-full pills" color="#c53761">
                <span class="text-white fs-20">
                  {{ suggestion.title }}
                </span>
              </vs-button>
            </div>
          </div>
        </vs-card>
      </div>

      <div class="flex justify-center my-16">
        <vs-button class="pills" color="#c53761" block>
          <span class="fs-24 btn-letter-spacing">VIEW ALL </span>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suggestions',
  data() {
    return {
      suggestions: [
        {
          title: 'Lana Fernandes- Starts from 12 $JUST',
          img: 'suggestion3.png',
        },
        {
          title: 'Sarina Izvyk- Starts from 7 $JUST',
          img: 'suggestion2.png',
        },
        {
          title: 'Mariska XX- Starts from 5 $JUST',
          img: 'suggestion1.png',
        },
      ],
    }
  },
  mounted() {
    if (window.screen.width > 1024) {
      setTimeout(function () {
        let maxHeight =
          10 +
          window.innerHeight -
          document.getElementById('wrap-container').getBoundingClientRect().top
        document.getElementById('scroll-suggestion').style.maxHeight =
          maxHeight - 100 + 'px'
      }, 200)
    }
  },
}
</script>

<style scoped>
.top-80 {
  top: 80%;
  @media (min-width: 1024px) {
    top: 60%;
  }
  @media (min-width: 1450px) {
    top: 80%;
  }
}
.vs-button {
  width: 80% !important;
}
</style>
