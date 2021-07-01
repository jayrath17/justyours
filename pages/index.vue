<template>
  <PostContent />
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
