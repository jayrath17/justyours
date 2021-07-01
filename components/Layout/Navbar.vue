<template>
  <div class="grid navbar lg:grid-cols-2 lg:mt-12 lg:pt-10 xl:ml-16 xl:pl-5">
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
      <div class="flex justify-center mx-4 mt-5 sm:mx-16 md xl:px-10">
        <vs-button class="pills" color="#c53761">
          <span class="mt-1 btn-letter-spacing fs-20 whitespace-nowrap xl:mx-9">
            <i class="fas fa-plus"></i> NEW POST</span
          >
        </vs-button>
      </div>
    </div>

    <!-- NAVBAR MOBILE -->
    <div class="lg:hidden flex justify-around items-start relative">
      <div class="flex justify-between align-start">
        <div class="mr-10">
          <img class="self-start my-3 lg:my-0" src="~/assets/img/logo.png" />
        </div>
        <div class="menu block lg:hidden fs-40 text-secondary">
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
        class="absolute bg-white dark:bg-black w-screen h-auto mt-16 z-30"
      >
        <div class="flex justify-around align-start pt-4">
          <div
            class="
              fs-16
              flex
              items-center
              rounded-full
              border-solid border-2 border-light-blue-500
              px-5
              py-1
              relative
            "
          >
            <img
              class="self-start my-3 lg:my-0 absolute just-logo"
              src="~/assets/img/wallet-icon.png"
            />
            <span class="ml-3 text-blue font-bold">54,000</span>
            <span class="ml-1 text-primary font-bold">JUST</span>
          </div>
          <div
            class="
              fs-16
              rounded-full
              border-solid border-2 border-light-blue-500
              px-5
              py-1
            "
          >
            <span class="dark:text-white">0x623d...298c </span>
          </div>
        </div>

        <div class="flex justify-center align-start py-4">
          <div
            class="self-center mr-10"
            @click.prevent.stop="msgBox = !msgBox"
            role="button"
          >
            <img class="my-2 lg:my-0 mb-0" src="~/assets/img/msg.png" />
            <div
              v-click-outside="hide"
              class="flex justify-center ease-in-out"
              :class="{ 'ease-in-out': msgBox }"
            >
              <img
                src="~/assets/img/dropdown.png"
                :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
              />
              <MessageMsgNotification v-if="msgBox" :messages="messages" />
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
        lg:block
        hidden
        navbar-template
        order-1
        lg:order-2
        grid
        lg:flex
        justify-around
        mt-10
        lg:mt-0
        2xl:mx-8
      "
    >
      <div class="">
        <div
          class="
            fs-16
            flex
            items-center
            rounded-full
            border-solid border-2 border-light-blue-500
            px-5
            py-1
            relative
          "
        >
          <img
            class="self-start my-3 lg:my-0 absolute just-logo"
            src="~/assets/img/wallet-icon.png"
          />
          <span class="ml-3 text-blue font-bold">54,000</span>
          <span class="ml-1 text-primary font-bold">JUST</span>
        </div>
      </div>
      <div class="self-start">
        <div
          class="
            fs-16
            rounded-full
            border-solid border-2 border-light-blue-500
            px-5
            py-1
          "
        >
          <span class="dark:text-white">0x623d...298c </span>
        </div>
      </div>

      <div
        class="self-start mb-0"
        @click.prevent.stop="msgBox = !msgBox"
        role="button"
      >
        <img class="my-3 lg:my-0 mb-0" src="~/assets/img/msg.png" />
        <div
          v-click-outside="hide"
          class="flex justify-center ease-in-out"
          :class="{ 'ease-in-out': msgBox }"
        >
          <img
            src="~/assets/img/dropdown.png"
            :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
          />
          <MessageMsgNotification v-if="msgBox" :messages="messages" />
        </div>
      </div>
      <div class="" role="button">
        <img
          class="self-start my-3 lg:my-0 notification"
          src="~/assets/img/notify.png"
        />
      </div>
      <div class="logo-container">
        <img class="self-start my-3 lg:my-0" src="~/assets/img/logo.png" />
      </div>
      <div class="menu block lg:hidden fs-40 text-secondary">
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
      msgBox: false,
      notificationsBox: false,
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
    filteredMessages() {
      if (this.msgSearchValue == '') return this.messages
      return this.messages.filter((entry) => {
        return (
          entry.name
            .toLowerCase()
            .includes(this.msgSearchValue.toLowerCase()) ||
          entry.msg.toLowerCase().includes(this.msgSearchValue.toLowerCase())
        )
      })
    },
  },
  methods: {
    hide() {
      this.msgBox = false
    },
    openSidebar() {
      $nuxt.$emit('openSidebar')
    },
  },
}
</script>

<style scoped>
.dark:bg-gray-700 > input {
  background: red;
}
</style>
