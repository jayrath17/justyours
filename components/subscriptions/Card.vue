<template>
  <div class="relative my-10">
    <div class="relative">
      <vs-card actionable class="w-full">
        <div slot="media">
          <img
            :src="subscription.cover"
            :alt="subscription.name"
            :class="!subscription.active ? 'filter grayscale' : null"
          />
        </div>
      </vs-card>
      <GeneralAvatar
        :isGrayScale="!subscription.active ? true : false"
        :isAbsolute="true"
        :image="subscription.profile_pic"
        :showAvailableStatus="false"
      />
    </div>
    <div class="flex justify-between">
      <div></div>
      <div class="personal__data">
        <h3 class="font-semibold text-pink fs-24">{{ subscription.name }}</h3>
        <span class="text-blue fs-16">{{
          subscription.active
            ? subscription.subscribed_at
            : subscription.expired_at
        }}</span>
      </div>
      <div class="relative">
        <i
          class="
            mt-3
            text-black
            cursor-pointer
            fas
            fa-ellipsis-v
            fs-16
            dark:text-white
          "
          @click.prevent.stop="openOptions"
        ></i>
        <div
          v-click-outside="hide"
          class="
            absolute
            ease-in-out
            transform
            rounded
            shadow-lg
            px-7
            dark:bg-black dark:shadow-white
            subscriptions
            menu__options
          "
          v-if="isMenuOpen"
        >
          <ul>
            <li class="flex items-center my-3 cursor-pointer">
              <i class="mr-3 fas fa-pen dark:text-white text-primary"></i>
              <span class="dark:text-white"> Manage </span>
            </li>
            <li class="flex items-center my-3 cursor-pointer">
              <i class="mr-3 fas fa-times dark:text-white text-primary"></i>
              <span class="dark:text-white"> Remove </span>
            </li>
            <li class="flex items-center my-3 cursor-pointer">
              <i class="mr-3 fas fa-sync-alt dark:text-white text-primary"></i>
              <span class="dark:text-white"> Renew </span>
            </li>
            <li class="flex items-center my-3 cursor-pointer">
              <i class="mr-3 fas fa-sync-alt dark:text-white text-primary"></i>
              <span class="dark:text-white"> Mute User </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subscription: {
      type: Object,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    openOptions() {
      this.isMenuOpen = !this.isMenuOpen
    },
    hide() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style></style>
