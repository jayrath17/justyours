<template>
  <vs-card type="5" class="w-full my-4">
    <template #img>
      <img :src="subscription.cover" :alt="subscription.name" />
    </template>
  </vs-card>
</template>

<script>
export default {
  name: 'SubscriptionCard',
  props: {
    subscription: {
      type: Object,
    },
  },
}
</script>

<style></style>
