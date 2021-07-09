<template>
  <AuthLogin />
</template>

<script>
export default {
  middleware: ['router-auth'],
  layout: 'blank',
  mounted() {
    if (['dark', 'system'].includes(this.$colorMode.preference)) {
      this.$store.commit('TOGGLE_DARK_MODE')
    }
  },
}
</script>

<style></style>
