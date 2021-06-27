<template>
  <div
    class="sidebar h-screen lg:mt-16 lg:ml-3 pt-5 lg:block dark:bg-black"
    v-click-outside="hideSidebar"
    :class="
      activeSidebar
        ? 'z-50 bg-white w-9/12 md:w-6/12 slide'
        : 'slide-out hidden'
    "
  >
    <div class="xl:ml-8 flex flex-col items-center">
      <div class="relative mb-4 pb-1">
        <img
          class="rounded-full border-4 border-color profile-img ml-3"
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
            class="text-xl text-secondary flex items-center"
          >
            <i :class="route.icon" />
            <span class="ml-5">
              {{ route.name }}
            </span>
          </NuxtLink>
          <div v-else class="text-xl text-secondary flex items-center">
            <vs-switch color="#C53761" v-model="darkMode" size="sm" />
            <span class="text-xl text-secondary ml-5 xl:whitespace-nowrap"
              >Dark Mode</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
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
    })
  },
}
</script>
