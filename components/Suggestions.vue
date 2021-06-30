<template>
  <div class="suggestions">
    <div v-for="(suggestion, index) in suggestions" :key="index">
      <vs-card type="5" class="mt-14 w-full card-custom-width">
        <template #interactions>
          <div class="center">
            <vs-button block class="w-full pills" color="#c53761">
              <span class="fs-20 text-white">
                {{ suggestion.title }}
              </span>
            </vs-button>
          </div>
        </template>
        <template #img>
          <img :src="require(`~/assets/img/${suggestion.img}`)" alt="" />
        </template>
      </vs-card>
    </div>

    <div class="my-16">
      <vs-button class="pills" color="#c53761" block>
        <span class="fs-24 btn-letter-spacing mx-5">VIEW ALL </span>
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

<style></style>
