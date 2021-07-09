<template>
  <div class="lg:container overflow-y-scroll">
    <div class="flex justify-center mt-16 lg:mt-14 lg:pt-10">
      <div class="lg:w-1/2 2xl:w-3/5 hidden lg:flex justify-end pt-8">
        <img
          class="login-banner 2xl:mr-3 mt-24 pt-1.5 w-full"
          src="/images/login.png"
          alt="Just Yours"
        />
      </div>
      <div class="w-4/5 lg:w-1/2 2xl:w-2/5 lg:pl-8 2xl:pr-32">
        <div class="flex flex-col items-center">
          <img src="/images/just-logo.png" alt="" />
          <span class="fs-18 text-blue text-center dark:text-white"
            >Sign Up to make quick money and generate a loving fan base!</span
          >
          <div class="w-full mt-5">
            <button class="w-full">
              <div class="flex">
                <div
                  class="rounded-l-3xl border border-2 border-color-primary flex justify-center items-center bg-white"
                >
                  <span class="material-icons-outlined text-pink fs-40 mx-5">
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
          <div class="w-full mt-3">
            <button class="w-full">
              <div class="flex">
                <div
                  class="rounded-l-3xl border border-2 border-color-primary flex justify-center items-center bg-white"
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
          <div class="hidden lg:block mt-3">
            <a href="" class="fs-18 text-pink">Forgot Password?</a>
          </div>
        </div>

        <h2 class="mt-10">
          <span class="fs-24 text-black bg-white">OR</span>
        </h2>

        <div class="flex flex-col items-center mt-8 login-form">
          <span class="fs-24 text-secondary dark:white">Sign Up</span>

          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full mt-5"
            placeholder="E-mail"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full mt-3"
            placeholder="Password"
            type="text"
          />
          <input
            class="input-height fs-24 border-lighter border-2 w-full rounded-full mt-3"
            placeholder="Retype Password"
            type="text"
          />

          <button
            class="bg-primary text-white w-full rounded-full input-height fs-24 mt-4 pt-1"
          >
            Sign Up
          </button>
          <div class="block lg:hidden mt-3">
            <a href="" class="fs-18 text-pink">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center mt-5 lg:mt-32 lg:pt-14 mb-16">
      <div class="flex justify-between items-center fs-18 fs-res-12 text-pink">
        <div class="mx-3 lg:mx-5"><a href="">Tokenomics</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">Contact</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">Help</a></div>
        <span class="material-icons fs-5"> fiber_manual_record </span>
        <div class="mx-3 lg:mx-5"><a href="">About</a></div>
      </div>

      <div class="flex justify-between items-center mt-12">
        <div class="fs-24 fs-res-24 rounded-full bg-primary text-white mx-5">
          <i class="p-1.5 fab fa-discord"></i>
        </div>
        <div class="fs-24 fs-res-24 rounded-full bg-primary text-white mx-5">
          <i class="p-1.5 fab fa-twitter"></i>
        </div>
        <div class="fs-24 fs-res-24 rounded-full bg-primary text-white mx-5">
          <i class="p-1.5 fab fa-telegram-plane"></i>
        </div>
        <div class="fs-24 fs-res-24 rounded-full bg-primary text-white mx-5">
          <i class="p-1.5 fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
