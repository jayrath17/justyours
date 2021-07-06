<template>
  <div class="mb-5 lg:ml-6">
    <div class="flex">
      <div class="flex flex-shrink-0 mr-4">
        <img src="/images/post.png" class="rounded-full" />
      </div>
      <div class="flex justify-between flex-auto">
        <div>
          <b class="text-lg font-bold dark:text-white fs-24">{{ post.user }}</b>
          <p class="mt-1 text-muted fs-24">44m</p>
        </div>
        <div class="self-center pr-10">
          <i class="cursor-pointer fas fa-ellipsis-v dark:text-white"></i>
        </div>
      </div>
    </div>
    <!-- Text -->
    <p class="mt-3 text-justify text dark:text-white fs-24">
      {{ post.content }}
    </p>
    <!-- Text -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
}
</script>

<style></style>
