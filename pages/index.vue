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
      <div
        class="
          grid grid-cols-1
          gap-1
          2xl:grid-cols-2
          lg:gap-4
          col-layout-content
        "
      >
        <div class="pt-1 mt-16">
          <Content />
        </div>
        <div class="flex justify-center lg:justify-start">
          <Suggestions />
        </div>
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
