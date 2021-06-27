<template>
  <div class="mt-3">
    <div class="flex justify-between">
      <div class="flex-auto cursor-pointer font-semibold">
        <i class="fas fa-heart heart"></i>
        <span class="text-pink"> {{ post.likes }} </span>
        Likes
      </div>
      <div class="flex-auto text-center cursor-pointer font-semibold">
        <i class="fas fa-comment-alt comments"></i>
        <span class="text-pink"> {{ post.comments }} </span>
        Comments
      </div>
      <div class="flex-auto text-right cursor-pointer font-semibold">
        Save
        <i class="fas fa-bookmark save"></i>
      </div>
    </div>
    <!-- Comment -->
    <div class="mt-4">
      <div>
        <div class="flex">
          <div class="mr-4 block flex-shrink-0">
            <img src="/images/woman2.png" class="rounded-full w-12 h-12" />
          </div>
          <div class="flex-auto flex justify-between">
            <div>
              <p class="text-justify text">
                I’ve been a part of #MauxTeam as a "Latina light" Diana and I’ve
                loved her 🌹✨ dietary advice, workouts, dancing and other
                activities!
              </p>
              <div class="flex">
                <p class="mt-1 mr-4 text-muted cursor-pointer">Like</p>
                <p class="mt-1 text-muted cursor-pointer">Reply</p>
              </div>
            </div>
            <div><i class="fas fa-ellipsis-v cursor-pointer ml-3"></i></div>
          </div>
        </div>
      </div>
      <span class="font-semibold cursor-pointer">View 3 more comments</span>
      <div class="add__comment mt-3">
        <div class="flex items-center">
          <div class="mr-4 flex-shrink-0">
            <img src="/images/post.png" class="rounded-full w-12 h-12" />
          </div>
          <div class="flex-auto comment">
            <div class="mt-1 relative">
              <input
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
                "
                placeholder="Add your comment"
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
                <i class="far fa-grin-alt mr-2 text-muted cursor-pointer"></i>
                <i class="fas fa-paperclip mr-2 text-muted cursor-pointer"></i>
                <i class="fas fa-camera mr-2 text-muted cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Comment -->
    <div class="divider my-5" v-if="post.id != 2"></div>
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
}
input::placeholder {
  margin-left: 1em;
}
</style>
