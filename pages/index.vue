<template>
  <div
    class="
      grid grid-cols-1
      gap-4
      p-5
      lg:grid-cols-2
      col-layout
      md:px-5
      lg:px-0
      dark:bg-black
    "
  >
    <div>
      <Sidebar />
    </div>
    <div>
      <div>
        <Navbar />
      </div>
      <div id="foobar" class="grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div id="scroll-content" class="mt-5 overflow-y-scroll h-full">
          <Content />
        </div>
        <div
          id="scroll-suggestion"
          class="flex justify-center overflow-y-scroll h-full"
        >
          <Suggestions />
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
        let maxHeigh =
          10 +
          window.innerHeight -
          document.getElementById('foobar').getBoundingClientRect().top

        console.log(maxHeigh)
        document.getElementById('scroll-content').style.maxHeight =
          maxHeigh + 'px'
        document.getElementById('scroll-suggestion').style.maxHeight =
          maxHeigh + 'px'
      }, 100)
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
