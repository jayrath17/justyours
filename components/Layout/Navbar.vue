<template>
  <div
    id="navbar"
    class="
      grid
      navbar
      lg:grid-cols-2 lg:mt-12 lg:pt-10
      xl:ml-16 xl:pl-5
      bg-white
      dark:bg-black
    "
  >
    <!-- NEW POST -->
    <div class="order-2 lg:order-1 xl:mr-8">
      <div class="flex justify-center content-inputs">
        <vs-input
          block
          type="text"
          icon-after
          v-model="searchValue"
          placeholder="Search"
          class="mx-10 mt-5 lg:mt-0"
        >
          <template #icon>
            <i class="cursor-pointer fas fa-search text-secondary" />
          </template>
        </vs-input>
      </div>
      <div
        id="new-post"
        class="flex justify-center mx-4 mt-5 sm:mx-16 md xl:px-10"
        v-if="isMainPage"
      >
        <vs-button class="pills" color="#c53761">
          <span class="mt-1 btn-letter-spacing fs-20 whitespace-nowrap xl:mx-9">
            <i class="fas fa-plus"></i> NEW POST</span
          >
        </vs-button>
      </div>
    </div>

    <!-- NAVBAR MOBILE -->
    <div class="relative flex items-start justify-around lg:hidden">
      <div class="flex justify-between align-start">
        <div class="mr-10">
          <img class="self-start my-3 lg:my-0" src="~/assets/img/logo.png" />
        </div>
        <div class="block menu lg:hidden fs-40 text-secondary">
          <i
            role="button"
            class="fas fa-bars"
            @click.prevent.stop="openSidebar"
          ></i>
        </div>
      </div>
      <div class="menu fs-40 text-secondary">
        <i
          @click="notificationsBox = !notificationsBox"
          :class="`fas fa-chevron-circle-${notificationsBox ? 'up' : 'down'}`"
        ></i>
      </div>

      <div
        v-if="notificationsBox"
        class="absolute z-30 w-screen h-auto mt-16 bg-white dark:bg-black"
      >
        <div class="flex justify-around pt-4 align-start">
          <div
            class="
              relative
              flex
              items-center
              px-5
              py-1
              border-solid
              rounded-full
              border-custom-gray
              fs-16
            "
          >
            <img
              class="absolute self-start my-3 lg:my-0 just-logo"
              src="~/assets/img/wallet-icon.png"
            />
            <span class="ml-3 font-semibold text-blue">54,000</span>
            <span class="ml-1 font-semibold text-primary">JUST</span>
          </div>
          <div
            class="px-5 py-1 border-solid rounded-full border-custom-gray fs-16"
          >
            <span class="font-semibold text-gray">0x623d...298c </span>
          </div>
        </div>

        <div class="flex justify-center py-4 align-start">
          <div class="self-center mr-10" role="button">
            <img
              class="my-2 mb-0 lg:my-0"
              src="~/assets/img/msg.png"
              @click.prevent.stop="openMessages()"
            />
            <div
              class="flex justify-center ease-in-out"
              :class="{ 'ease-in-out': msgBox }"
            >
              <img
                src="~/assets/img/dropdown.png"
                @click.prevent.stop="openMessages()"
                :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
              />
              <MessageDropdown
                v-if="msgBox"
                :messages="messages"
                @hidden="msgBox = false"
              />
              <!-- <MessageMsgNotification
                v-if="msgBox"
                :messages="messages"
                @hidden="msgBox = false"
              /> -->
            </div>
          </div>
          <div class="" role="button">
            <img
              class="self-start my-3 lg:my-0 notification"
              src="~/assets/img/notify.png"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- NAVBAR DESKTOP -->
    <div
      class="
        grid
        justify-around
        order-1
        hidden
        mt-10
        lg:block
        navbar-template
        lg:order-2 lg:flex lg:mt-0
        2xl:mx-8
      "
    >
      <div class="">
        <div
          class="
            relative
            flex
            items-center
            px-5
            py-1
            border-solid
            rounded-full
            border-custom-gray
            fs-16
          "
        >
          <img
            class="absolute self-start my-3 mr-2 lg:my-0 just-logo"
            src="~/assets/img/wallet-icon.png"
          />
          <span class="ml-3 font-semibold text-blue">54,000</span>
          <span class="ml-1 font-semibold text-primary">JUST</span>
        </div>
      </div>

      <div class="self-start">
        <div
          class="px-5 py-1 border-solid rounded-full border-custom-gray fs-16"
        >
          <span class="font-semibold text-gray">0x623d...298c </span>
        </div>
      </div>

      <div class="self-start mb-0" role="button">
        <img
          class="my-3 mb-0 lg:my-0"
          src="~/assets/img/msg.png"
          @click.prevent.stop="openMessages()"
        />
        <div
          class="relative flex justify-center ease-in-out"
          :class="{ 'ease-in-out': msgBox }"
        >
          <img
            @click.prevent.stop="openMessages()"
            src="~/assets/img/dropdown.png"
            :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
          />
          <MessageDropdown
            v-if="msgBox"
            :messages="messages"
            @hidden="msgBox = false"
          />
          <!-- <MessageMsgNotification
            v-if="msgBox"
            :messages="messages"
            @hidden="msgBox = false"
          /> -->
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

      <div class="logo-container">
        <img class="self-start my-3 lg:my-0" src="~/assets/img/logo.png" />
      </div>
      <div class="block menu lg:hidden fs-40 text-secondary">
        <i
          role="button"
          class="fas fa-bars"
          @click.prevent.stop="openSidebar"
        ></i>
      </div>
    </div>
  </div>
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
