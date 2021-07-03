<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 col-layout dark:bg-black">
    <div>
      <LayoutSidebar />
    </div>
    <div>
      <div class="navbar-container">
        <LayoutNavbar />
      </div>
      <div
        id="body-layout"
        class="
          grid grid-cols-1
          gap-1
          2xl:grid-cols-2
          lg:gap-4
          col-layout-content
        "
      >
        <div class="px-3 pt-1 mt-16 lg:mr-6">
          <div id="wrap-container">
            <div
              id="scroll-content"
              class="h-full mt-5 overflow-y-scroll"
              @scroll="scrollFunction"
            >
              <Nuxt />
            </div>
          </div>
        </div>
        <div
          id="scroll-suggestion"
          class="flex justify-center h-full overflow-y-scroll lg:justify-start"
          @scroll="scrollFunction"
        >
          <LayoutSuggestions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.screen.width > 1024) {
      setTimeout(function () {
        let maxHeight =
          10 +
          window.innerHeight -
          document.getElementById('wrap-container').getBoundingClientRect().top
        document.getElementById('scroll-content').style.maxHeight =
          maxHeight + 'px'
        document.getElementById('scroll-suggestion').style.maxHeight =
          maxHeight + 'px'
      }, 200)
    }
  },
  methods: {
    scrollFunction() {
      let navbar = document.getElementById('navbar').classList
      let postBtn = document.getElementById('new-post').classList
      let body = document.getElementById('body-layout').style

      if (
        document.getElementById('scroll-content').scrollTop > 80 ||
        document.getElementById('scroll-suggestion').scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbar.remove('lg:mt-12', 'lg:pt-10')
        navbar.add('lg:mt-3')
        postBtn.remove('mt-5')
        postBtn.add('mt-0.5')
        body.marginTop = '50px'
      } else {
        console.log('up')
        postBtn.remove('mt-0.5')
        postBtn.add('mt-5')
        navbar.remove('lg:mt-3')
        navbar.add('lg:mt-12', 'lg:pt-10')
        body.marginTop = '217px'
      }
    },
  },
}
</script>

<style>
#wrap-container,
#scroll-suggestion {
  overflow-y: scroll;
  height: 100vh;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
