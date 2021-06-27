<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 col-layout">
    <div class="hidden lg:block">
      <Sidebar />
    </div>
    <div class="">
      <div class="">
        <Navbar />
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="bg-red"></div>
        <div class="flex justify-center">
          <Suggestions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Suggestions from '../components/Suggestions.vue'
export default {
  components: { Sidebar, Suggestions, Navbar },
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
