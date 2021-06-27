<template>
  <div class="navbar grid lg:grid-cols-2 lg:mt-11 lg:pt-10">
    <div class="order-2 lg:order-1">
      <div class="flex justify-center content-inputs">
        <vs-input
          block
          type="text"
          icon-after
          v-model="searchValue"
          placeholder="Search"
          class="mx-10 mt-5 lg:mt-0"
        >
          <template #icon> <i class="fas fa-search"></i> </template>
        </vs-input>
      </div>
      <div class="flex justify-center mt-5 mx-16 lg:px-10">
        <vs-button class="pills" block color="#c53761">
          <span class="btn-letter-spacing fs-20 whitespace-nowrap">
            <i class="fas fa-plus"></i> NEW POST</span
          >
        </vs-button>
      </div>
    </div>

    <div
      class="
        flex
        justify-around
        flex-wrap
        mt-10
        lg:mt-0
        2xl:mx-10
        order-1
        lg:order-2
        flex-1
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
          :class="`my-3 lg:my-0 ${item.slug == 'notify' ? 'notification' : ''}
          ${item.slug == 'msg' ? 'mb-0' : ''}`"
          :src="require(`~/assets/img/${item.slug}.png`)"
          @click.self="handleMsg(item.slug)"
          :role="`${item.slug == 'msg' ? 'button' : ''}`"
        />

        <div
          v-if="item.slug == 'msg'"
          class="flex justify-center relative ease-in-out"
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
                bg-white
                message-box
                shadow-lg
                rounded-lg
                px-6
                mt-5
                z-30
                overflow-y-scroll
                h-12
              "
            >
              <div class="flex justify-between mt-5">
                <span class="fs-24">Messages</span>
                <i class="fas fa-ellipsis-v"></i>
              </div>
              <div class="flex justify-center content-inputs mt-5 mb-3">
                <vs-input
                  block
                  type="text"
                  icon-after
                  v-model="msgSearchValue"
                  placeholder="Search"
                  @change="search"
                >
                  <template #icon> <i class="fas fa-search"></i> </template>
                </vs-input>
              </div>

              <div v-for="(msg, index) in messages" :key="index">
                <div class="flex justify-between items-center mt-1">
                  <div class="relative mb-4 pb-1">
                    <img
                      class="rounded-full"
                      :src="require(`~/assets/img/msg/${msg.image}.png`)"
                    />
                    <div v-if="!!msg.count" class="status-circle text-center">
                      {{ msg.count }}
                    </div>
                  </div>
                  <div :class="{ 'mr-16': msg.image == 'msg-profile04' }">
                    <div class="text-left fs-20">
                      {{ msg.name }}
                    </div>
                    <div class="text-left fs-16 text-secondary">
                      {{ msg.msg }}
                    </div>
                  </div>
                  <span>{{ msg.date }}</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="menu block lg:hidden order-last fs-40 text-secondary">
        <i role="button" class="fas fa-bars" @click="openSidebar"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
  methods: {
    handleMsg(key) {
      if (key == 'msg') {
        this.msgBox = !this.msgBox
      }
    },
    openSidebar() {
      $nuxt.$emit('openSidebar')
    },
  },
}
</script>

<style></style>
