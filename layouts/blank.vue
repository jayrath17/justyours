<template>
  <div class="dark:bg-black">
    <GeneralAgeModal v-if="$store.state.modals.age" />
    <Nuxt />
  </div>
</template>

<script>
import getCookie from '@/scripts/cookies.js'
export default {
  mounted() {
    let modalAge = getCookie('justyours_modal_age')
    if (modalAge) {
      this.$store.commit('CLOSE_AGE_MODAL')
    }
  },
}
</script>

<style></style>
