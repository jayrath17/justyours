<template>
  <div class="relative my-10">
    <div class="relative">
      <vs-card type="5" class="w-full">
        <template #img>
          <img :src="subscription.cover" :alt="subscription.name" />
        </template>
      </vs-card>
      <GeneralAvatar :isAbsolute="true" :image="subscription.profile_pic" />
    </div>
    <div class="flex justify-between">
      <div></div>
      <div class="personal__data">
        <h3 class="font-semibold text-pink fs-24">{{ subscription.name }}</h3>
        <span class="text-blue fs-16">{{ subscription.subscribed_at }}</span>
      </div>
      <i
        class="mt-3 text-black cursor-pointer  fas fa-ellipsis-v fs-16 dark:text-white"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subscription: {
      type: Object,
    },
  },
}
</script>

<style></style>
