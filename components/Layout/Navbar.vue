<template>
  <nav id="navbar" class="flex justify-center w-full pt-4 navbar dark:bg-black">
    <div class="flex items-center justify-between pl-16 nav-items">
      <div class="logo-container">
        <img class="self-start my-3 lg:my-0" src="~/assets/img/logo.png" />
      </div>

      <div class="hidden lg:flex" style="width: 7%"></div>

      <div class="hidden w-1/3 content-inputs lg:flex">
        <vs-input
          block
          type="text"
          icon-after
          v-model="searchValue"
          placeholder="Search"
          icon="search"
          class=""
        >
          <template #icon>
            <i class="cursor-pointer fas fa-search text-secondary" />
          </template>
        </vs-input>
      </div>

      <div class="" role="button">
        <img
          class="my-3 mb-0 lg:my-0"
          src="~/assets/img/msg.png"
          @click.prevent.stop="openMessages"
        />
        <div
          class="relative flex justify-center ease-in-out"
          :class="{ 'ease-in-out': msgBox }"
        >
          <img
            v-if="msgBox"
            @click.prevent.stop="openMessages"
            src="~/assets/img/dropdown.png"
            :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
          />
          <MessageDropdown
            v-if="msgBox"
            :messages="messages"
            @hidden="msgBox = false"
          />
        </div>
      </div>

      <div class="" role="button">
        <img
          @click.prevent.stop="handleOpenModals('notify')"
          @mouseover="notifyHover = true"
          @mouseleave="notifyHover = false"
          class="self-start my-3 lg:my-0 notification"
          :src="
            require(`~/assets/img/${
              notifyHover ? hoverNotifyImg : 'notify'
            }.png`)
          "
        />
        <div
          class="flex justify-center ease-in-out"
          :class="{ 'ease-in-out': notifyBox }"
        >
          <img v-if="notifyBox" src="~/assets/img/dropdown.png" class="mx-0" />
          <!-- <MessageMsgNotification v-if="notifyBox" :messages="messages" /> -->
        </div>
      </div>

      <div class="" role="button">
        <img
          @click.prevent.stop="handleOpenModals('store')"
          @mouseover="storeHover = true"
          @mouseleave="storeHover = false"
          class="self-start my-3 lg:my-0 notification"
          :src="require(`~/assets/img/${storeHover ? 'store' : 'store'}.png`)"
        />
        <div
          class="flex justify-center ease-in-out"
          :class="{ 'ease-in-out': storeBox }"
        >
          <img v-if="storeBox" src="~/assets/img/dropdown.png" class="mx-0" />
          <!-- <MessageMsgNotification v-if="storeBox" :messages="messages" /> -->
        </div>
      </div>

      <div class="hidden lg:flex">
        <div
          class="relative flex items-center px-5 py-1 border-solid rounded-full  border-custom-gray fs-16"
        >
          <img
            class="absolute self-start my-3 mr-2 lg:my-0 just-logo"
            src="~/assets/img/wallet-icon.png"
          />
          <span class="ml-3 font-semibold text-blue">54,000</span>
          <span class="ml-1 font-semibold text-primary">JUST</span>
        </div>
      </div>

      <div class="hidden lg:flex">
        <div
          class="px-5 py-1 border-solid rounded-full border-custom-gray fs-16"
        >
          <span class="font-semibold text-gray">0x623d...298c </span>
        </div>
      </div>

      <div class="block menu lg:hidden fs-40 text-secondary">
        <i
          role="button"
          class="fas fa-bars"
          @click.prevent.stop="openSidebar"
        ></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  data() {
    return {
      msgHover: false,
      notifyHover: false,
      msgBox: false,
      notifyBox: false,
      notificationsBox: false,
      storeBox: false,
      storeHover: false,
      darkMode: true,
      searchValue: '',
      messages: [
        {
          image: 'msg-profile07',
          name: 'Rayella Ferguss',
          msg: 'I’m ready for the shoot tom',
          date: '12w',
          count: 3,
        },
        {
          image: 'msg-profile06',
          name: 'Mistique Madeline',
          msg: 'Wondering about the idea...',
          date: '7w',
        },
        {
          image: 'msg-profile05',
          name: 'Caroline Daenm..',
          msg: 'What about the surfboard...',
          date: '1w',
          count: 5,
        },
        {
          image: 'msg-profile04',
          name: 'Shameil Khan',
          msg: 'That works for me.',
          date: '5d',
        },
        {
          image: 'msg-profile03',
          name: 'Gizelle Zifadsy',
          msg: ' Honey be goin wild at all ti..',
          date: '3d',
          count: 1,
        },
        {
          image: 'msg-profile02',
          name: 'Shannon Kala.',
          msg: 'She may or may not like we..',
          date: '3d',
        },
        {
          image: 'msg-profile01',
          name: 'Mikella Jia',
          msg: 'You: Gotta meet you tomm...',
          date: '1d',
        },
      ],
    }
  },
  computed: {
    isMainPage() {
      return this.$route.path == '/'
    },
    hoverMsgImg() {
      return this.darkMode ? 'msg-hover-dark' : 'msg-hover'
    },
    hoverNotifyImg() {
      return this.darkMode ? 'notify-hover-dark' : 'notify-hover'
    },
  },
  mounted() {
    if (['dark', 'system'].includes(this.$colorMode.preference)) {
      this.darkMode = true
    }
  },
  methods: {
    openMessages() {
      this.msgBox = !this.msgBox
    },
    hide() {
      this.msgBox = false
    },
    openSidebar() {
      $nuxt.$emit('openSidebar')
    },
    handleOpenModals(type) {
      if (type == 'msg') {
        this.msgBox = !this.msgBox
        this.notifyBox = false
      }
      if (type == 'notify') {
        this.notifyBox = !this.notifyBox
        this.msgBox = false
      }
    },
  },
}
</script>

<style scoped>
.dark:bg-gray-700 > input {
  background: red;
}
</style>
