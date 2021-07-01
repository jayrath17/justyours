<template>
  <div class="post md:pl-0 lg:pl-4">
    <!-- Header -->
    <PostTitle :post="post" />
    <!-- Header -->
    <!-- Image -->
    <vs-card actionable class="w-full">
      <div slot="media">
        <img :src="post.image" :alt="post.user" class="ml-1" />
      </div>
    </vs-card>
    <!-- Image -->

    <!-- Footer -->
    <SocialContainer :post="post" />
    <!-- Footer -->
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

<style>
.vs-card {
  max-width: 100% !important;
}

.vs-card__img {
  max-height: 100% !important;
}

.text {
  font-size: 16px;
  line-height: 29px;
}

.text-muted {
  color: #323232;
}
</style>
