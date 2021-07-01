<template>
  <div class="px-3 suggestions lg:mt-16 lg:pt-5">
    <div v-for="(suggestion, index) in suggestions" :key="index">
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
}
</script>

<style scoped>
.top-80 {
  top: 80%;
}
.vs-button {
  width: 80% !important;
}
</style>
