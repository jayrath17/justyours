<template>
  <div class="grid navbar lg:grid-cols-2 lg:mt-12 lg:pt-10 xl:ml-16 xl:pl-5">
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

    <div
      class="
        flex flex-wrap
        justify-around
        flex-1
        order-1
        mt-10
        lg:mt-0
        2xl:mx-8
        lg:order-2
      "
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="`self-start ${
          item.slug == 'notify' ? ' order-2 sm:order-4' : ''
        }
        ${item.slug == 'msg' ? 'mb-0 order-1 sm:order-3' : ''}
        ${item.slug == 'logo' ? 'sm:order-last' : ''}
        ${item.slug == 'wallet' ? '-mt-1' : ''}`"
      >
        <img
          :class="`my-3 lg:my-0 cursor-pointer ${
            item.slug == 'notify' ? 'notification' : ''
          } ${item.slug == 'msg' ? 'mb-0' : ''}`"
          :src="require(`~/assets/img/${item.slug}.png`)"
          @click.prevent.stop="handleMsg(item.slug)"
          :role="`${item.slug == 'msg' ? 'button' : ''}`"
        />

        <div
          v-click-outside="hide"
          v-if="item.slug == 'msg'"
          class="relative flex justify-center ease-in-out"
          :class="{ 'ease-in-out': msgBox }"
        >
          <img
            src="~/assets/img/dropdown.png"
            :class="`mx-0 dropdown ${msgBox ? 'dropdown-active' : ''}`"
          />

          <transition name="box">
            <div
              v-if="msgBox"
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
                message-box
                dark:bg-black
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

              <div v-for="(msg, index) in filteredMessages" :key="index">
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
                  <div :class="{ 'mr-16': msg.image == 'msg-profile04' }">
                    <div class="text-left fs-20 dark:text-white">
                      {{ msg.name }}
                    </div>
                    <div class="text-left fs-16 text-secondary">
                      {{ msg.msg }}
                    </div>
                  </div>
                  <span class="text-secondary">{{ msg.date }}</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="order-last block menu lg:hidden text-secondary">
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
      searchValue: '',
      msgSearchValue: '',
      items: [
        {
          slug: 'wallet',
        },
        {
          slug: 'hex',
        },
        {
          slug: 'msg',
        },
        {
          slug: 'notify',
        },
        {
          slug: 'logo',
        },
      ],
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
    handleMsg(key) {
      if (key == 'msg') {
        this.msgBox = !this.msgBox
      }
    },
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
