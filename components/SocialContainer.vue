<template>
  <div class="mt-3 fs-24 lg:mx-7">
    <div class="flex justify-between">
      <div class="flex-auto cursor-pointer font-semibold">
        <i class="fas fa-heart heart"></i>
        <span class="text-pink"> {{ post.likes }} </span>
        <span class="dark:text-white"> Likes </span>
      </div>
      <div class="flex-auto text-center cursor-pointer font-semibold">
        <i class="fas fa-comment-alt comments"></i>
        <span class="text-pink"> {{ post.comments }} </span>
        <span class="dark:text-white"> Comments </span>
      </div>
      <div
        class="
          flex-auto
          text-right
          cursor-pointer
          font-semibold
          dark:text-white
        "
      >
        Save
        <i class="fas fa-bookmark save"></i>
      </div>
    </div>
    <!-- Comment -->
    <div class="mt-4">
      <div>
        <div
          class="flex"
          v-for="comment in post.commentsArray"
          :key="comment.content"
        >
          <div class="mr-4 block flex-shrink-0">
            <img :src="comment.user.img" class="rounded-full w-12 h-12" />
          </div>
          <div class="flex-auto flex justify-between">
            <div>
              <p class="text-justify text dark:text-white fs-24">
                {{ comment.content }}
              </p>
              <div class="flex">
                <p class="mt-1 mr-4 text-muted cursor-pointer">Like</p>
                <p class="mt-1 text-muted cursor-pointer">Reply</p>
              </div>
            </div>
            <div>
              <i
                class="fas fa-ellipsis-v cursor-pointer ml-3 dark:text-white"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <span class="font-semibold cursor-pointer dark:text-white"
        >View {{ post.commentsArray.length }} more comments</span
      >
      <div class="add__comment mt-3">
        <div class="flex items-center">
          <div class="mr-4 flex-shrink-0">
            <img src="/images/post.png" class="rounded-full w-12 h-12" />
          </div>
          <div class="flex-auto comment">
            <div class="mt-1 relative">
              <input
                id="input-comments"
                type="text"
                class="
                  p-2
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  pr-10
                  sm:text-sm
                  border-gray-300
                  rounded-md
                  dark:bg-gray-700 dark:text-white
                "
                placeholder="Add your comment"
                v-model="comment"
                @keyup.enter="addComment(post)"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <i class="far fa-grin-alt mr-2 text-muted cursor-pointer"></i>
                <i
                  class="
                    far
                    fa-closed-captioning
                    mr-2
                    text-muted
                    cursor-pointer
                  "
                ></i>
                <i class="fas fa-paperclip mr-2 text-muted cursor-pointer"></i>
                <i class="fas fa-camera mr-2 text-muted cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Comment -->
    <div class="divider my-16 dark:border-gray-700" v-if="post.id != 2"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      comment: null,
    }
  },
  methods: {
    addComment(post) {
      console.log(post, 'post')
      post.commentsArray.push({
        content: this.comment,
        user: { img: '/images/post.png' },
      })
      this.comment = null
    },
  },
}
</script>

<style>
.divider {
  border: 3px solid #ebebeb;
  border-radius: 20px;
}
.text-muted {
  color: #7c7c7c;
}
.text-pink {
  color: #d64973;
}
.heart {
  color: #d64973;
}
.comments {
  color: #8bb1dd;
}

.save {
  color: #d0b4b4;
}

.add__comment input {
  background: #f0f2f5;
  border-radius: 53px;
  width: 100%;
  height: 58px;
}
input::placeholder {
  margin-left: 1em;
}
</style>
