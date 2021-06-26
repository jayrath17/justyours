<template>
  <div class="navbar grid grid-cols-2 mt-11 pt-10">
    <div>
      <div class="center content-inputs">
        <vs-input
          type="text"
          icon-after
          v-model="searchValue"
          placeholder="Search"
          class="w-full"
        >
          <template #icon> x </template>
        </vs-input>
      </div>
      <div class="flex justify-center mt-5">
        <vs-button class="rounded-full bg-primary w-3/4">
          <span class="btn-letter-spacing fs-20"> + NEW POST</span>
        </vs-button>
      </div>
    </div>

    <div class="flex px-5 justify-between">
      <div v-for="(item, index) in items" :key="index">
        <img
          :class="{ notification: item.slug == 'notify' }"
          :src="require(`~/assets/img/${item.slug}.png`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchValue: '',
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
    }
  },
}
</script>

<style></style>
