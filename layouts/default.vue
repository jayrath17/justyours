<template>
  <div class="dark:bg-black">
    <div class="border-b border-lighter"><LayoutNavbar /></div>
    <div
      id="body-container"
      class="flex flex-wrap w-screen border-t border-lighter"
    >
      <!-- side nav -->
      <div class="sidebar-container hidden md:flex flex-col justify-start px-2">
        <LayoutSidebar />
      </div>

      <!-- tweets -->
      <div
        class="
          page-container
          md:w-full
          h-full
          overflow-y-scroll
          border-l border-r border-lighter
        "
      >
        <Nuxt />
      </div>

      <!-- trending -->
      <div
        class="
          suggestions-container
          h-full
          overflow-y-scroll
          flex
          justify-center
        "
      >
        <LayoutSuggestions />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#wrap-container,
#scroll-suggestion {
  overflow-y: scroll;
  height: 100vh;
}
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
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
