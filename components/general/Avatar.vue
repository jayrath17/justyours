<template>
  <div
    class="relative pb-1 mb-4 profile__pic"
    :class="isAbsolute && 'absolute__profile_pic'"
  >
    <div class="border-4 rounded-full border-color-primary w-full">
      <img
        class="profile-img"
        :class="isGrayScale ? 'filter grayscale' : null"
        :src="image"
        alt="profile"
      />
    </div>
    <div v-if="showAvailableStatus" class="status-circle"></div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    isAbsolute: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '~/assets/img/profile.png',
    },
    showAvailableStatus: {
      type: Boolean,
      default: true,
    },
    isGrayScale: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.profile__pic {
  width: 8rem;
  @media (max-width: 576px) {
    width: 4rem;
  }
}

.absolute__profile_pic {
  position: absolute;
  bottom: -50%;

  @media (min-width: 1024px) and (max-width: 1200px) {
    bottom: -60%;
    width: 5rem;
  }

  @media (min-width: 1201px) and (max-width: 1500px) {
    bottom: -60%;
    width: 6rem;
  }

  @media (max-width: 576px) {
    bottom: -50%;
  }
}
</style>
