<template>
  <div class="p-5 overflow-hidden lg:p-0 dark:bg-black layout-container">
    <div class="lg:container"><LayoutNavbar /></div>
    <div
      id="body-container"
      class="
        flex flex-wrap
        w-screen
        pb-10
        lg:container
        dark:bg-black
        lg:border-t
        border-lighter
        lg:pb-0
      "
    >
      <div
        class="
          flex-col
          justify-start
          hidden
          px-2
          pt-12
          sidebar-container
          lg:flex
        "
      >
        <LayoutSidebar />
      </div>
      <div
        class="
          w-full
          lg:h-screen lg:overflow-y-scroll lg:pb-20 lg:border-l lg:border-r
          border-lighter
          page-container
          lg:w-full lg:pt-12
        "
      >
        <Nuxt />
      </div>
      <div
        class="
          hidden
          lg:flex
          items-start
          justify-center
          pt-12
          pb-20
          lg:h-screen lg:overflow-y-scroll
          suggestions-container
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
