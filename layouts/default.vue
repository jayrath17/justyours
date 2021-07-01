<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 col-layout dark:bg-black">
    <div>
      <LayoutSidebar />
    </div>
    <div>
      <div>
        <LayoutNavbar />
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
          <div id="wrap-container">
            <div id="scroll-content" class="h-full mt-5 overflow-y-scroll">
              <Nuxt />
            </div>
          </div>
        </div>
        <div
          id="scroll-suggestion"
          class="flex justify-center h-full overflow-y-scroll lg:justify-start"
        >
          <LayoutSuggestions />
        </div>
      </div>
    </div>
  </div>
</template>

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
