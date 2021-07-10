<template>
  <div class="xl:container lg:mx-5 overflow-y-scroll h-screen">
    <div class="flex justify-center pt-5 lg:pt-10 3xl:mx-32">
      <div
        class="lg:w-3/5 xl:w-1/2 2xl:w-3/5 hidden lg:flex justify-end pt-8 3xl:mx-16"
      >
        <img
          class="login-banner 2xl:mr-3 mt-24 pt-1.5 w-full"
          src="/images/login.png"
          alt="Just Yours"
        />
      </div>
      <div class="w-4/5 lg:w-2/5 xl:w-1/2 2xl:w-2/5 lg:pl-8 2xl:pr-32">
        <div class="flex flex-col items-center">
          <img src="/just_logo.png" alt="" />
          <span class="fs-18 text-blue text-center dark:text-white mt-3 lg:mt-2"
            >Sign Up to make quick money and generate a loving fan base!</span
          >
          <div class="w-full mt-5 lg:mt-5">
            <button class="w-full" @click="loginWithEmail()">
              <div class="flex">
                <div
                  class="rounded-l-3xl border border-2 border-color-primary flex justify-center items-center bg-white icon-width"
                >
                  <span
                    class="material-icons-outlined text-pink email-login mx-5"
                  >
                    email
                  </span>
                </div>
                <div
                  class="w-11/12 bg-primary text-white w-full rounded-r-3xl input-height fs-24 flex justify-center items-center"
                >
                  <span class=""> Login with email </span>
                </div>
              </div>
            </button>
          </div>
          <div class="w-full mt-3 lg:mt-3">
            <button class="w-full" @click="loginWithMetamask()">
              <div class="flex">
                <div
                  class="rounded-l-3xl border border-2 border-color-primary flex justify-center items-center bg-white icon width"
                >
                  <img src="/images/metamask-logo.png" class="mx-5" />
                </div>
                <div
                  class="w-11/12 bg-primary text-white w-full rounded-r-3xl input-height fs-24 flex justify-center items-center"
                >
                  <div>Login with Metamask</div>
                </div>
              </div>
            </button>
          </div>
          <div class="hidden lg:block mt-3 lg:mt-3">
            <a href="" class="fs-18 text-pink">Forgot Password?</a>
          </div>
        </div>

        <h2 class="mt-5 lg:mt-10">
          <span class="fs-24 text-black bg-white dark:bg-black dark:text-white"
            >OR</span
          >
        </h2>

        <div class="flex flex-col items-center mt-0 lg:mt-8 login-form">
          <span class="fs-24 text-secondary dark:white">Sign Up</span>

          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full dark:bg-black dark:text-white pl-4 mt-3 lg:mt-5"
            placeholder="E-mail"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full dark:bg-black dark:text-white pl-4 mt-3 lg:mt-3"
            placeholder="Password"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full dark:bg-black dark:text-white pl-4 mt-3 lg:mt-3"
            placeholder="Retype Password"
            type="text"
          />

          <button
            @click="signUp()"
            class="bg-primary text-white w-full rounded-full dark:bg-black dark:text-white pl-4 input-height fs-24 mt-3 lg:mt-4 pt-1"
          >
            Sign Up
          </button>
          <div class="block lg:hidden mt-3">
            <a href="" class="fs-18 text-pink">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center mt-5 lg:mt-14">
      <div class="flex justify-between items-center fs-18 fs-res-12 text-pink">
        <div class="mx-3 lg:mx-5"><a href="">Tokenomics</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">Contact</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">Help</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">About</a></div>
      </div>

      <div class="flex justify-between items-center mt-3 lg:mt-5">
        <div
          class="fs-24 p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
        >
          <i class="fab fa-discord"></i>
        </div>
        <div
          class="fs-24 p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
        >
          <i class="fab fa-twitter"></i>
        </div>
        <div
          class="fs-24 p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
        >
          <i class="fab fa-telegram-plane"></i>
        </div>
        <div
          class="fs-24 p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
        >
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginWithEmail() {
      this.$store.commit('SET_USER_AUTH', { name: 'Test', lname: 'Test' })
    },
    loginWithMetamask() {
      this.$store.commit('SET_USER_AUTH', { name: 'Meta', lname: 'Mask' })
    },
    signUp() {
      this.$store.commit('SET_USER_AUTH', { name: 'Meta', lname: 'Mask' })
    },
  },
}
</script>
