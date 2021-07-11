<template>
  <div class="xl:container lg:mx-5">
    <div class="flex justify-center pt-5 lg:pt-10 3xl:mx-32">
      <div
        class="lg:w-3/5 xl:w-1/2 2xl:w-3/5 hidden lg:flex justify-end pt-8 3xl:mx-16"
      >
        <div
          class="transform transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
        >
          <img
            class="login-banner 2xl:mr-3 mt-24 pt-1.5 w-full"
            src="/images/login.png"
            alt="Just Yours"
          />
        </div>
      </div>
      <div class="w-4/5 lg:w-2/5 xl:w-1/2 2xl:w-2/5 lg:pl-8 2xl:pr-32">
        <div class="flex flex-col items-center">
          <img src="/just_logo.png" alt="" />
          <span class="fs-18 text-blue text-center mt-3 lg:mt-2"
            >Your exclusive content creator platform!</span
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
                  class="w-11/12 bg-primary text-white w-full rounded-r-3xl input-height fs-24 flex justify-start pl-6 items-center"
                >
                  <span class=""> Login with email </span>
                </div>
              </div>
            </button>
          </div>
          <div class="w-full mt-3 lg:mt-3">
            <!-- <vue-metamask userMessage="msg" @onComplete="onComplete">
            </vue-metamask> -->
            <button class="w-full" @click="loginWithMetamask()">
              <div class="flex">
                <div
                  class="rounded-l-3xl border border-2 border-color-primary flex justify-center items-center bg-white icon width metamask__icon"
                >
                  <img src="/images/metamask-logo.png" class="mx-5" />
                </div>
                <div
                  class="w-11/12 bg-primary text-white w-full rounded-r-3xl input-height fs-24 flex justify-start pl-6 items-center"
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

        <h2 class="mt-5 lg:mt-5">
          <span class="fs-24 text-black bg-white">OR</span>
        </h2>

        <div class="flex flex-col items-center login-form">
          <span class="fs-24 text-secondary">Sign Up</span>

          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full pl-4 mt-3 lg:mt-2"
            placeholder="E-mail"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full pl-4 mt-3 lg:mt-3"
            placeholder="Password"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full pl-4 mt-3 lg:mt-3"
            placeholder="Retype Password"
            type="text"
          />

          <button
            @click="signUp()"
            class="bg-primary text-white w-full rounded-full pl-4 input-height fs-24 mt-3 lg:mt-4"
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
        <a
          class="fs-24 social__icon p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
          href="https://discord.gg/justyours"
          target="_blank"
        >
          <i class="fs-16 fab fa-discord"></i>
        </a>
        <a
          class="fs-24 social__icon p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
          href="https://twitter.com/justyoursme"
          target="_blank"
        >
          <i class="fs-16 fab fa-twitter"></i>
        </a>
        <a
          class="fs-24 social__icon p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
          href="https://t.me/JustYoursMe"
          target="_blank"
        >
          <i class="fs-16 fab fa-telegram-plane"></i>
        </a>
        <a
          class="fs-24 social__icon p-1.5 flex fs-res-24 rounded-full bg-primary text-white mx-5"
          href="https://discord.gg/justyours"
          target="_blank"
        >
          <i class="fs-16 fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import VueMetamask from 'vue-metamask'
export default {
  data() {
    return {
      msg: 'This is demo net work',
    }
  },
  methods: {
    getAccount() {
      return new Promise((resolve) => {
        this.$web3.eth.getAccounts().then((res) => {
          if (!res.length) {
            alert('Please login to MetaMask!')
            return
          }
          return resolve(res[0])
        })
      })
    },
    createSignature(address, nonce) {
      return new Promise((resolve, reject) => {
        window.$web3.eth.personal
          .sign(`Sign Nonce: ${nonce}`, address.toLowerCase(), '')
          .then((signature) => {
            return resolve(signature)
          })
          .catch((e) => {
            return reject(e)
          })
      })
    },
    loginWithEmail() {
      this.$store.commit('SET_USER_AUTH', {
        name: 'Test',
        lname: 'Test',
        wallet: true,
      })
    },
    loginWithMetamask() {
      const address = this.$store.state.account.address
      if (!address) return alert('Please login to Metamask first')
      // const nonce = (await this.$axios.$get(`/api/v1/user/nonce/${address}`)).nonce;
      // const signature = await this.createSignature(address, nonce);
      // console.log(signature);
      // this.$store.state.user.signature = signature;
      // const auth = {
      //     address: address,
      //     nonce: nonce,
      //     signature: signature,
      // };

      // this.$store.commit('SET_USER_AUTH', {
      //   name: 'Meta',
      //   lname: 'Mask',
      //   wallet: true,
      // })
    },
    signUp() {
      this.$store.commit('SET_USER_AUTH', {
        name: 'Meta',
        lname: 'Mask',
        wallet: false,
      })
    },
    onComplete(data) {
      console.log('data:', data)
    },
  },
}
</script>

<style scoped lang="scss">
.metamask__icon {
  max-width: 79px;
}
.social__icon {
  padding-left: 0.3em;
  padding-right: 0.3em;
}
</style>
