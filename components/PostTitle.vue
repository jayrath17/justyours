<template>
  <div>
    <div class="flex">
      <div class="mr-4 flex flex-shrink-0">
        <img src="/images/post.png" class="rounded-full" />
      </div>
      <div class="flex-auto flex justify-between">
        <div>
          <b class="text-lg font-bold dark:text-white">{{ post.user }}</b>
          <p class="mt-1 text-muted">44m</p>
        </div>
        <div>
          <i class="fas fa-ellipsis-v cursor-pointer dark:text-white"></i>
        </div>
      </div>
    </div>
    <!-- Text -->
    <p class="text-justify text mt-3 dark:text-white">
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
