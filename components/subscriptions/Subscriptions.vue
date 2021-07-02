<template>
  <div>
    <div
      class="bg-white shadow-lg  rounded-3xl subscriptions dark:bg-black dark:custom-box-shadow"
    >
      <span
        class="flex justify-center py-3 font-semibold text-white  rounded-t-3xl bg-primary fs-20"
        >My Subscriptions</span
      >
      <div class="p-5 my-5">
        <div class="flex justify-between actions">
          <div
            v-for="tab in tabs"
            :key="tab.name"
            class="flex items-center py-3 rounded-full cursor-pointer  3xl:px-16 xl:px-10 border-primary action__item hover:bg-primary hover:text-white tab__action"
            @click="selectOption(tab)"
            :class="tab.active ? 'bg-primary text-white' : 'text-primary'"
          >
            <span class="flex items-center font-semibold cursor-pointer fs-20">
              <span class="mr-2 material-icons-round">{{ tab.icon }}</span>
              {{ tab.name }}
            </span>
          </div>
        </div>
        <div class="flex flex-col items-center subscription__cards">
          <SubscriptionsCard
            v-for="subscription in filteredList"
            :key="subscription.name"
            :subscription="subscription"
          />
        </div>
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
          slug: 'all',
          icon: 'visibility',
          name: 'View All',
          active: true,
        },
        {
          slug: 'active',
          icon: 'stars',
          name: 'Active',
          active: false,
        },
        {
          slug: 'renew',
          icon: 'autorenew',
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
          active: true,
        },
        {
          name: 'Alisha Soprano2',
          subscribed_at: 'Subscribed since 26th April',
          cover: '/images/subscriptions/3.png',
          profile_pic: '/images/subscriptions/4.png',
          active: true,
        },
        {
          name: 'Alisha Soprano3',
          subscribed_at: 'Subscribed since 9th may',
          cover: '/images/subscriptions/5.png',
          profile_pic: '/images/subscriptions/6.png',
          active: true,
        },
        {
          name: 'Beach Bum XOX',
          subscribed_at: 'Subscribed since 14th June',
          cover: '/images/subscriptions/7.png',
          profile_pic: '/images/subscriptions/8.png',
          expired_at: 'Expired on 12th march',
          active: false,
        },
      ],
      selectedTab: {
        slug: 'all',
      },
    }
  },
  computed: {
    filteredList() {
      if (this.selectedTab.slug == 'all') return this.subscriptions
      if (this.selectedTab.slug == 'active') {
        return this.subscriptions.filter((subscription) => {
          return subscription.active
        })
      }

      return this.subscriptions.filter((subscription) => {
        return !subscription.active
      })
    },
  },
  methods: {
    selectOption(tab) {
      this.selectedTab = tab
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
