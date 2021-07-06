<template>
  <div id="app" class="container flex w-full h-screen">
    <!-- side nav -->
    <div
      class="flex flex-col justify-between px-2 py-2 border-r  lg:w-1/5 border-lighter lg:px-6"
    >
      <div>
        <button
          class="w-12 h-12 text-3xl rounded-full hover:bg-lightblue text-blue"
        >
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button
            v-for="tab in tabs"
            @click="id = tab.id"
            :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
              id === tab.id ? 'text-blue' : ''
            }`"
          >
            <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
            <p class="hidden text-lg font-semibold text-left lg:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
        <button
          class="w-12 h-12 p-3 font-semibold text-white rounded-full  bg-blue focus:outline-none lg:h-auto lg:w-full hover:bg-darkblue"
        >
          <p class="hidden lg:block">Tweet</p>
          <i class="fas fa-plus lg:hidden"></i>
        </button>
      </div>
      <div class="relative lg:w-full">
        <button
          @click="dropdown = true"
          class="flex items-center w-full p-2 rounded-full  hover:bg-lightblue focus:outline-none"
        >
          <img
            src="profile.png"
            class="w-10 h-10 border rounded-full border-lighter"
          />
          <div class="hidden ml-4 lg:block">
            <p class="text-sm font-bold leading-tight">Steph Dietz</p>
            <p class="text-sm leading-tight">@SaaSyEth</p>
          </div>
          <i class="hidden ml-auto text-lg lg:block fas fa-angle-down"></i>
        </button>
        <div
          v-if="dropdown === true"
          class="absolute bottom-0 left-0 w-64 mb-16 bg-white rounded-lg shadow-md  border-lightest"
        >
          <button
            @click="dropdown = false"
            class="flex items-center w-full p-2 p-3  hover:bg-lightest focus:outline-none"
          >
            <img
              src="profile.png"
              class="w-10 h-10 border rounded-full border-lighter"
            />
            <div class="ml-4">
              <p class="text-sm font-bold leading-tight">Steph Dietz</p>
              <p class="text-sm leading-tight">@SaaSyEth</p>
            </div>
            <i class="ml-auto fas fa-check test-blue"></i>
          </button>
          <button
            @click="dropdown = false"
            class="w-full p-3 text-left border-t  hover:bg-lightest border-lighter test-sm focus:outline-none"
          >
            Add an existing account
          </button>
          <button
            @click="dropdown = false"
            class="w-full p-3 text-left border-t  hover:bg-lightest border-lighter test-sm focus:outline-none"
          >
            Log out @SaaSyEth
          </button>
        </div>
      </div>
    </div>
    <!-- tweets -->
    <div class="w-full h-full overflow-y-scroll md:w-1/2">
      <div
        class="flex items-center justify-between px-5 py-3 border-b  border-lighter"
      >
        <h1 class="text-xl font-bold">Home</h1>
        <i class="text-xl far fa-star text-blue"></i>
      </div>
      <div class="flex px-5 py-3 border-b-8 border-lighter">
        <div class="flex-none">
          <img
            src="profile.png"
            class="flex-none w-12 h-12 border rounded-full border-lighter"
          />
        </div>
        <form v-on:submit.prevent="addNewTweet" class="relative w-full px-4">
          <textarea
            v-model="tweet.content"
            placeholder="What's up?"
            class="w-full pb-3 mt-3 focus:outline-none"
          />
          <div class="flex items-center">
            <i class="mr-4 text-lg text-blue far fa-image"></i>
            <i class="mr-4 text-lg text-blue fas fa-film"></i>
            <i class="mr-4 text-lg text-blue far fa-chart-bar"></i>
            <i class="mr-4 text-lg text-blue far fa-smile"></i>
          </div>
          <button
            type="submit"
            class="absolute bottom-0 right-0 h-10 px-4 font-semibold text-white rounded-full  bg-blue hover:bg-darkblue focus:outline-none"
          >
            Tweet
          </button>
        </form>
      </div>
      <div class="flex flex-col-reverse">
        <div
          v-for="tweet in tweets"
          class="flex w-full p-4 border-b hover:bg-lighter"
        >
          <div class="flex-none mr-4">
            <img src="profile.png" class="flex-none w-12 h-12 rounded-full" />
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold">Steph Dietz</p>
              <p class="ml-2 text-sm text-dark">@SaaSyEth</p>
              <p class="ml-2 text-sm text-dark">1 sec</p>
              <i class="ml-auto fas fa-angle-down text-dark"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="mr-3 far fa-comment"></i>
                <p>0</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="mr-3 fas fa-retweet"></i>
                <p>0</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="mr-3 fas fa-heart"></i>
                <p>1</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="mr-3 fas fa-share-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="follow in following"
        class="flex w-full p-4 border-b hover:bg-lighter"
      >
        <div class="flex-none mr-4">
          <img
            :src="`${follow.src}`"
            class="flex-none w-12 h-12 rounded-full"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">{{ follow.name }}</p>
            <p class="ml-2 text-sm text-dark">{{ follow.handle }}</p>
            <p class="ml-2 text-sm text-dark">{{ follow.time }}</p>
            <i class="ml-auto fas fa-angle-down text-dark"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="mr-3 far fa-comment"></i>
              <p>{{ follow.comments }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="mr-3 fas fa-retweet"></i>
              <p>{{ follow.retweets }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="mr-3 fas fa-heart"></i>
              <p>{{ follow.like }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="mr-3 fas fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- trending -->
    <div
      class="relative hidden w-1/3 h-full px-6 py-2 overflow-y-scroll border-l  md:block border-lighter"
    >
      <input
        class="w-full p-2 pl-12 mb-4 text-sm rounded-full bg-lighter"
        placeholder="Search Twitter"
      />
      <i
        class="absolute top-0 left-0 mt-5 ml-12 text-sm  fas fa-search text-light"
      ></i>
      <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
          <i class="text-lg fas fa-cog text-blue"></i>
        </div>
        <button
          v-for="trend in trending"
          class="flex justify-between w-full p-3 border-t  hover:bg-lighter border-lighter"
        >
          <div>
            <p class="text-xs leading-tight text-left text-dark">
              {{ trend.top }}
            </p>
            <p class="text-sm font-semibold leading-tight text-left">
              {{ trend.title }}
            </p>
            <p class="text-sm leading-tight text-left text-dark">
              {{ trend.bottom }}
            </p>
          </div>
          <i class="text-lg fas fa-angle-down text-dark"></i>
        </button>
        <button
          class="w-full p-3 text-left border-t  hover:bg-lighter text-blue border-lighter"
        >
          Show More
        </button>
      </div>
      <div class="w-full my-4 rounded-lg bg-lightest">
        <div class="p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button
          v-for="friend in friends"
          class="flex w-full p-3 border-t hover:bg-lighter border-lighter"
        >
          <img
            :src="`${friend.src}`"
            class="w-12 h-12 border rounded-full border-lighter"
          />
          <div class="hidden ml-4 lg:block">
            <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
            <p class="text-sm leading-tight">{{ friend.handle }}</p>
          </div>
          <button
            class="px-4 py-1 ml-auto text-sm border-2 rounded-full  text-blue border-blue"
          >
            Follow
          </button>
        </button>
        <button
          class="w-full p-3 text-left border-t  hover:bg-lighter text-blue border-lighter"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  layout: 'blank',
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
