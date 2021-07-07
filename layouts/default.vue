<template>
  <div class="p-5 overflow-hidden lg:p-0 dark:bg-black layout-container">
    <div><LayoutNavbar /></div>
    <div
      id="body-container"
      class="flex flex-wrap w-screen dark:bg-black lg:border-t border-lighter"
    >
      <div
        class="
          sidebar-container
          justify-start
          flex-col
          hidden
          lg:flex
          pt-12
          px-2
        "
      >
        <LayoutSidebar />
      </div>
      <div
        class="
          lg:border-l lg:border-r
          border-lighter
          overflow-y-scroll
          page-container
          lg:w-full
          h-screen
          w-full
          lg:pt-12
          pb-20
        "
      >
        <Nuxt />
      </div>
      <div
        class="
          flex
          justify-center
          items-start
          h-screen
          suggestions-container
          pt-12
          pb-20
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
  /* overflow-y: scroll; */
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
