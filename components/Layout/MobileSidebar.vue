<template>
  <div
    v-click-outside="hideSidebar"
    class="
      rounded-xl
      bg-white
      dark:bg-black
      p-10
      absolute
      -translate-y-full
      right-0
      top-0
    "
  >
    <div class="user__data flex">
      <div class="badges mt-5 mr-5">
        <BadgeJust />
        <BadgeAddress />
      </div>
      <GeneralAvatar image="/images/profile.png" />
    </div>
    <div class="routes">
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          class="
            divide-y-4 divide-yellow-600
            text-center
            flex
            justify-center
            items-center
          "
        >
          <component
            :is="option.to ? 'nuxt-link' : 'div'"
            :to="option.to ? option.to : undefined"
          >
            <div v-if="option.to">
              <span class="fs-20">
                {{ option.name }}
              </span>
              <i
                v-if="option.pack == 'fa'"
                :class="option.icon"
                class="fs-20"
              />
              <span v-else class="material-icons-round fs-20">
                {{ option.icon }}
              </span>
            </div>
            <div v-else class="flex items-center text-xl text-secondary">
              <label
                @click="darkMode = !darkMode"
                class="
                  ml-5
                  fs-20
                  cursor-pointer
                  select-none
                  text-secondary
                  xl:whitespace-nowrap
                "
                for="dark"
                >Dark Mode</label
              >
              <vs-switch
                color="#C53761"
                v-model="darkMode"
                size="sm"
                id="dark"
              />
            </div>
          </component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      options: [
        {
          icon: 'fas fa-user',
          pack: 'fa',
          name: 'My Profile',
          to: '/profile',
        },
        {
          icon: 'home',
          pack: 'material',
          name: 'Home',
          to: '/',
        },
        {
          icon: 'bookmark',
          pack: 'material',
          name: 'Saved',
          to: '/saved',
        },
        {
          icon: 'payment',
          pack: 'material',
          name: 'Subscriptions',
          to: '/subscriptions',
        },
        {
          icon: 'settings',
          pack: 'material',
          name: 'Settings',
          to: '/settings',
        },
        {
          type: 'switch',
          name: 'Dark Mode',
        },
        {
          icon: 'power_settings_new',
          pack: 'material',
          name: 'Log out',
        },
      ],
    }
  },
  methods: {
    hideSidebar() {},
  },
}
</script>

<style></style>
