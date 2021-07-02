<template>
  <transition name="box">
    <div
      class="
        absolute
        z-30
        h-12
        px-6
        mt-5
        overflow-y-scroll
        bg-white
        rounded-lg
        shadow-lg
        dark:bg-black
        message-box
      "
    >
      <div class="flex justify-between mt-5">
        <span class="fs-24 dark:text-white">Messages</span>
        <span
          ><i
            class="cursor-pointer fas fa-times dark:text-white"
            @click="msgBox = false"
        /></span>
      </div>
      <div class="flex justify-center mt-5 mb-3 content-inputs">
        <vs-input
          block
          type="text"
          icon-after
          v-model="msgSearchValue"
          placeholder="Search Messages"
        >
          <template #icon>
            <i class="cursor-pointer fas fa-search dark:text-black" />
          </template>
        </vs-input>
      </div>

      <div v-for="(msg, index) in messages" :key="index">
        <div class="flex items-center justify-between mt-1">
          <div class="relative pb-1 mb-4">
            <img
              class="rounded-full"
              :src="require(`~/assets/img/msg/${msg.image}.png`)"
            />
            <div v-if="!!msg.count" class="text-center status-circle">
              <span class="dark:text-black">
                {{ msg.count }}
              </span>
            </div>
          </div>
          <div class="w-1/2">
            <div class="text-left fs-20 dark:text-white">
              {{ msg.name }}
            </div>
            <div class="text-left fs-16 text-secondary text-ellipsis">
              {{ msg.msg }}
            </div>
          </div>
          <span class="text-secondary">{{ msg.date }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MsgNotification',
  data() {
    return {
      msgSearchValue: '',
    }
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hide() {
      this.msgBox = false
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

<style></style>
