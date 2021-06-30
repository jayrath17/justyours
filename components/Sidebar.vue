<template>
  <transition name="slide">
    <div
      class="sidebar lg:mt-11 pt-10 lg:block dark:bg-black"
      v-click-outside="hideSidebar"
      :class="
        activeSidebar
          ? 'z-50 bg-white w-9/12 md:w-6/12 slide'
          : 'slide-out hidden'
      "
    >
      <div class="md:ml-6 flex flex-col items-center">
        <div class="relative mb-4 pb-1">
          <img
            class="rounded-full border-4 border-color"
            src="~/assets/img/profile.png"
            alt="profile"
          />
          <div class="status-circle"></div>
        </div>

        <div
          v-for="(route, index) in routes"
          :key="index"
          class="flex justify-start w-1/2 mb-12"
        >
          <div class="text-left fs-24">
            <NuxtLink
              v-if="route.name !== 'dark'"
              :to="route.to"
              class="
                flex
                items-center
                text-xl text-secondary
                hover:text-black
                dark:hover:text-white
              "
            >
              <i :class="route.icon" />
              <span class="ml-5">
                {{ route.name }}
              </span>
            </NuxtLink>
            <div v-else class="flex items-center text-xl text-secondary">
              <vs-switch color="#C53761" v-model="darkMode" size="sm" />
              <span class="ml-5 text-xl text-secondary xl:whitespace-nowrap"
                >Dark Mode</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      darkMode: false,
      activeSidebar: false,
      routes: [
        {
          to: '#',
          name: 'My Profile',
          class: '',
          icon: 'fas fa-user-alt',
        },
        {
          to: '#',
          name: 'Home',
          class: '',
          icon: 'fas fa-home',
        },
        {
          to: '#',
          name: 'Saved',
          class: '',
          icon: 'fas fa-bookmark',
        },
        {
          to: '#',
          name: 'Subscriptions',
          class: '',
          icon: 'fas fa-money-check',
        },
        {
          to: '#',
          name: 'Settings',
          class: '',
          icon: 'fas fa-cog',
        },
        {
          to: '#',
          name: 'dark',
          class: '',
          icon: 'fas fa-cog',
        },
      ],
    }
  },
  methods: {
    hideSidebar() {
      this.activeSidebar = false
      document.body.style.overflowY = 'scroll'
    },
  },
  watch: {
    darkMode() {
      this.$colorMode.preference = this.darkMode ? 'dark' : 'light'
    },
  },
  mounted() {
    if (['dark', 'system'].includes(this.$colorMode.preference)) {
      this.darkMode = true
    }
  },
  created() {
    this.$nuxt.$on('openSidebar', () => {
      this.activeSidebar = !this.activeSidebar
      if (this.activeSidebar) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'scroll'
      }
    })
  },
}
</script>

<style scoped>
.sidebar {
  transform: translateX(0%) !important;
}
.slide-leave-to {
  /* transform: translateX(-150%) !important; */
  -webkit-animation: slide 0.3s ease-in-out;
  animation: slide 0.3s ease-in-out;
}
</style>
