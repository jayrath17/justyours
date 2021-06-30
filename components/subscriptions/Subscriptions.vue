<template>
  <div
    class="bg-white shadow-lg  rounded-3xl subscriptions dark:bg-black dark:shadow-white"
  >
    <span class="flex justify-center py-3 text-white rounded-t-3xl bg-primary"
      >My Subscriptions</span
    >
    <div class="p-5 my-5">
      <div class="flex justify-between actions">
        <div
          v-for="tab in tabs"
          :key="tab.name"
          class="p-3 rounded-full cursor-pointer  border-primary action__item hover:bg-primary hover:text-white"
          @click="selectOption(tab)"
          :class="tab.active ? 'bg-primary text-white' : 'text-primary'"
        >
          <span class="font-semibold cursor-pointer">
            <i :class="tab.icon"></i>
            {{ tab.name }}
          </span>
        </div>
      </div>
      <div class="flex flex-col items-center subscription__cards">
        <SubscriptionsCard
          v-for="subscription in subscriptions"
          :key="subscription.name"
          :subscription="subscription"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          icon: 'far fa-eye',
          name: 'View All',
          active: true,
        },
        {
          icon: 'fas fa-star',
          name: 'Active',
          active: false,
        },
        {
          icon: 'fas fa-sync',
          name: 'Renew',
          active: false,
        },
      ],
      subscriptions: [
        {
          name: 'Alisha Soprano',
          subscribed_at: 'Subscribed since 12th march',
          cover: '/images/subscriptions/1.png',
          profile_pic: '/images/subscriptions/2.png',
        },
        {
          name: 'Alisha Soprano2',
          subscribed_at: 'Subscribed since 26th April',
          cover: '/images/subscriptions/3.png',
          profile_pic: '/images/subscriptions/4.png',
        },
        {
          name: 'Alisha Soprano3',
          subscribed_at: 'Subscribed since 9th may',
          cover: '/images/subscriptions/5.png',
          profile_pic: '/images/subscriptions/6.png',
        },
        {
          name: 'Beach Bum XOX',
          subscribed_at: 'Subscribed since 14th June',
          cover: '/images/subscriptions/7.png',
          profile_pic: '/images/subscriptions/8.png',
        },
      ],
    }
  },
  methods: {
    selectOption(tab) {
      this.tabs.map((x) => {
        x.active = false
      })
      tab.active = !tab.active
    },
  },
}
</script>

<style>
.action__item {
  user-select: none;
}
</style>
