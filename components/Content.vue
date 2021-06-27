<template>
  <div><Post v-for="post in posts" :key="post.id" :post="post" /></div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          user: 'Janette Ferrero',
          content:
            'Say “Hola Hola” to Latina lifestyle and fitness coach @dianamaux, who’s just joined us! 🏋️‍♀️ 🍏 Be a part of the #MauxTeam as your "Latina light" Diana shares everything from dietary advice, workouts, dancing and so much more! 🌹✨',
          image: '/images/woman.png',
          likes: '2k',
          comments: '193',
        },
        {
          id: 2,
          user: 'Paloma Ahanas',
          content:
            '🤳Hiit with Paloma | 🌤Full Body Mobility with Paloma\n Paloma guides you through some full-body exercises to help increase your mobility!',
          image: '/images/post1.png',
          likes: '5k',
          comments: '209',
        },
      ],
    }
  },
}
</script>

<style></style>
