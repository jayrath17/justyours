export const state = () => ({
  userAuth: null,
  user: null,
  darkMode: false,

  modals: {
    age: true,
  },
  sidebar: false,

  returnTo: null,
})

export const getters = {
  isLoggedIn(state) {
    return Boolean(state.userDoc && state.userDoc.email)
  },
  isPremiumUser(state, getters) {
    // We must check here with the backend data
    return getters.isLoggedIn
  },
  isFreeUser(state, getters) {
    // We must check here with the backend data
    return !getters.isLoggedIn
  },
}

export const mutations = {
  SET_USER_AUTH(state, data) {
    if (data) {
      state.userAuth = Object.assign({}, data)
    } else {
      state.userAuth = null
    }
  },
  OPEN_AGE_MODAL(state) {
    state.modals.age = true
  },
  CLOSE_AGE_MODAL(state) {
    state.modals.age = false
    const d = new Date()
    let days = 365
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie =
      'justyours_modal_age' + '=' + state.modals.age + ';' + expires + ';path=/'
    this.$router.push('/')
  },
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
    let body = document.getElementById('body-container')
    if (state.sidebar) {
      body.style.opacity = 0.5
    } else {
      body.style.opacity = 1
    }
  },
  TOGGLE_DARK_MODE(state) {
    state.darkMode = !state.darkMode
    this.$colorMode.preference = state.darkMode ? 'dark' : 'light'
  },
}
