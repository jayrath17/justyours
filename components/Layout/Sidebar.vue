<template>
  <transition name="slide">
    <div class="sidebar pl-4 lg:pl-3 xl:pl-8" v-click-outside="hideSidebar">
      <div class="flex flex-col items-start 2xl:items-center">
        <GeneralAvatar image="/images/profile.png" />

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
                dark:text-active
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
              <vs-switch
                color="#C53761"
                v-model="darkMode"
                size="sm"
                id="dark"
              />
              <label
                @click="darkMode = !darkMode"
                class="
                  ml-5
                  text-xl
                  cursor-pointer
                  select-none
                  text-secondary
                  xl:whitespace-nowrap
                "
                for="dark"
                >Dark Mode</label
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
          to: '/profile',
          name: 'My Profile',
          class: '',
          icon: 'fas fa-user-alt',
        },
        {
          to: '/',
          name: 'Home',
          class: '',
          icon: 'fas fa-home',
        },
        {
          to: '/saved',
          name: 'Saved',
          class: '',
          icon: 'fas fa-bookmark',
        },
        {
          to: '/subscriptions',
          name: 'Subscriptions',
          class: '',
          icon: 'fas fa-money-check',
        },
        {
          to: '/settings',
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
