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
}
</script>
