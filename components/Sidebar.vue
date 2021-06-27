<template>
  <div
    class="sidebar h-screen lg:mt-11 pt-10 lg:block"
    :class="`${
      activeSidebar
        ? 'z-30 bg-white w-9/12 md:w-6/12 slide'
        : 'slide-out hidden'
    }`"
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
        class="flex justify-start w-1/2 ml-8 mb-9"
      >
        <div class="text-left">
          <NuxtLink :to="route.to" class="fs-24 text-secondary">{{
            route.name
          }}</NuxtLink>
        </div>
      </div>

      <div class="flex items-center ml-8">
        <vs-switch color="#C53761" v-model="darkMode" />
        <span class="fs-24 ml-5">Dark Mode</span>
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
        },
        {
          to: '#',
          name: 'Home',
          class: '',
        },
        {
          to: '#',
          name: 'Saved',
          class: '',
        },
        {
          to: '#',
          name: 'Subscriptions',
          class: '',
        },
        {
          to: '#',
          name: 'Settings',
          class: '',
        },
      ],
    }
  },
  created() {
    this.$nuxt.$on('openSidebar', () => {
      this.activeSidebar = !this.activeSidebar
    })
  },
}
</script>
