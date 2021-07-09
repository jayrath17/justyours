<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    if (['dark', 'system'].includes(this.$colorMode.preference)) {
      this.$store.commit('TOGGLE_DARK_MODE')
    }
  },
}
</script>

<style></style>
