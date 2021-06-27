<template>
  <div class="sidebar h-screen mt-11 pt-10">
    <div class="ml-6 flex flex-col items-center">
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
        class="flex justify-start w-1/2 mb-9"
      >
        <div class="text-left">
          <NuxtLink :to="route.to" class="text-xl text-secondary">
            <i :class="route.icon" />
            {{ route.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex items-center">
        <vs-switch color="#C53761" v-model="darkMode" />
        <span class="text-xl text-secondary ml-5">Dark Mode</span>
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
      ],
    }
  },
  watch: {
    darkMode() {
      this.$colorMode.preference = this.darkMode ? 'dark' : 'light'
    },
  },
  mounted() {
    if (this.$colorMode.preference == 'dark') {
      this.darkMode = true
    }
  },
}
</script>
