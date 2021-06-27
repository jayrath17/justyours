<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
    <!-- <div class="bg-blue-500 hidden lg:block">Sidebar</div> -->
    <div class="post__wrapper">
      <!-- <div class="bg-red-400">Navbar</div> -->
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="bg-red">
          <Content />
        </div>
        <!-- <div class="bg-lightblue">Suggestions</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
