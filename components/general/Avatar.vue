<template>
  <div
    class="relative pb-1 mb-4 profile__pic"
    :class="isAbsolute && 'absolute__profile_pic'"
  >
    <img
      class="ml-3 border-4 rounded-full border-color-primary profile-img"
      :src="image"
      alt="profile"
    />
    <div class="status-circle"></div>
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
  bottom: -30%;

  @media (max-width: 576px) {
    bottom: -50%;
  }
}

.status-circle {
  background-color: #55d170;
  border: 3px solid #c53761;
  position: absolute;
  border-radius: 50%;
  height: 26px;
  bottom: 13px;
  width: 26px;
  right: 2px;
  @media (max-width: 576px) {
    right: -13px;
    height: 16px;
    width: 16px;
  }
}
</style>
