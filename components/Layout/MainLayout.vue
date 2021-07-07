<template>
  <div class="flex flex-wrap h-screen w-screen pt-11 mt-2 dark:bg-black">
    <!-- side nav -->
    <div
      class="
        sidebar-container
        hidden
        md:flex
        flex-col
        justify-start
        border-r border-lighter
        px-2
      "
    >
      <LayoutSidebar />
    </div>

    <!-- tweets -->
    <div class="page-container md:w-full h-full overflow-y-scroll">
      <Nuxt />
    </div>

    <!-- trending -->
    <div
      class="
        suggestions-container
        h-full
        border-l border-lighter
        overflow-y-scroll
        flex
        justify-center
      "
    >
      <LayoutSuggestions />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      tabs: [
        { icon: 'fas fa-home', title: 'Home', id: 'home' },
        { icon: 'fas fa-hashtag', title: 'Explore', id: 'explore' },
        { icon: 'far fa-bell', title: 'Notifications', id: 'notifications' },
        { icon: 'far fa-envelope', title: 'Messages', id: 'messages' },
        { icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks' },
        { icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists' },
        { icon: 'far fa-user', title: 'Profile', id: 'profile' },
        { icon: 'fas fa-ellipsis-h', title: 'More', id: 'more' },
      ],
      id: 'home',
      dropdown: false,
      trending: [
        {
          top: 'Trending in TX',
          title: 'Gigi',
          bottom: 'Trending with: Rip Gigi',
        },
        { top: 'Music', title: 'We Won', bottom: '135K Tweets' },
        { top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets' },
        { top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets' },
        { top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets' },
      ],
      friends: [
        { src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy' },
        { src: 'monk.jpg', name: 'Adrian Monk', handle: '@detective:)' },
        { src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock' },
      ],
      following: [
        {
          src: 'elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1,000',
          retweets: '550',
          like: '1,000,003',
        },
        {
          src: 'kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20,003',
        },
        {
          src: 'elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '100,000',
          retweets: '1,000,002',
          like: '5,000,003',
        },
        {
          src: 'elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '100,500',
          retweets: '1,000,032',
          like: '5,000,103',
        },
      ],
      tweets: [{ content: 'It is so nice outside!' }],
      tweet: { content: '' },
    }
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.tweet.content,
      }
      this.tweets.push(newTweet)
    },
  },
}
</script>
