<template>
  <transition name="box">
    <nav class="messages_dropdown" v-click-outside="hide">
      <div class="px-3 py-3 rounded-lg wrapper_box">
        <div class="wrapper show">
          <ul class="menu-bar">
            <div class="flex justify-between">
              <span class="fs-24 dark:text-white">Messages</span>
              <span
                ><i class="cursor-pointer fas fa-ellipsis-v dark:text-white"
              /></span>
            </div>
            <div class="flex justify-center mt-5 mb-3 content-inputs">
              <vs-input
                block
                type="text"
                icon-after
                v-model="msgSearchValue"
                placeholder="Search Messages"
                icon="search"
              >
              </vs-input>
            </div>
            <div class="overflow-y-scroll messages_boxes">
              <li
                class="
                  flex
                  items-center
                  justify-between
                  mb-4
                  rounded-lg
                  setting-item
                "
                v-for="(msg, index) in filteredMessages"
                :key="index"
                @click="openChat(msg)"
              >
                <div class="flex icon">
                  <div class="relative pb-1">
                    <img
                      class="rounded-full"
                      :src="require(`~/assets/img/msg/${msg.image}.png`)"
                    />
                    <div v-if="!!msg.count" class="text-center status-circle">
                      <span class="relative dark:text-black" style="top: -6px">
                        {{ msg.count }}
                      </span>
                    </div>
                  </div>
                  <div class="ml-8">
                    <div class="text-left fs-20 dark:text-white">
                      {{ msg.name }}
                    </div>
                    <div class="text-left fs-16 text-secondary text-ellipsis">
                      {{ msg.msg }}
                    </div>
                  </div>
                </div>
                <span class="text-secondary">{{ msg.date }}</span>
              </li>
            </div>
          </ul>
          <!-- Settings & privacy Menu-items -->
          <ul class="setting-drop">
            <li
              class="flex items-center justify-between arrow back-setting-btn"
              @click="back"
            >
              <div class="flex items-center">
                <span class="fas fa-arrow-left"></span>
                <div
                  class="flex items-center justify-between"
                  v-if="currentChat"
                >
                  <div class="flex current_chat">
                    <img
                      class="rounded-full"
                      width="40"
                      height="40"
                      :src="
                        require(`~/assets/img/msg/${currentChat.image}.png`)
                      "
                    />
                    <div class="ml-5">
                      <div class="text-left fs-20 dark:text-white">
                        {{ currentChat.name }}
                      </div>
                      <div class="text-left fs-16 text-secondary text-ellipsis">
                        Active {{ currentChat.date }} ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="fas fa-ellipsis-v dark:text-gray"></i>
            </li>
            <div class="mt-5">
              <h1>Chat will be here</h1>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      msgSearchValue: '',
      currentChat: null,
    }
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
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
      this.$emit('hidden')
    },
    openChat(msg) {
      this.currentChat = msg
      const menu_bar = document.querySelector('.menu-bar')
      const setting_drop = document.querySelector('.setting-drop')
      menu_bar.style.marginLeft = '-400px'
      setTimeout(() => {
        setting_drop.style.display = 'block'
      }, 100)
    },
    back() {
      const menu_bar = document.querySelector('.menu-bar')
      const setting_drop = document.querySelector('.setting-drop')
      menu_bar.style.marginLeft = '0px'
      setting_drop.style.display = 'none'
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(
        el,
        {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0,
        },
        { complete: done }
      )
    },
  },
}
</script>
