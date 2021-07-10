export const state = () => ({
  userAuth: null,
  user: null,
  darkMode: false,

  account: {
    address: null,
    nonce: null,
    signature: null,
  },

  modals: {
    age: true,
    agree: false,
  },
  sidebar: false,

  returnTo: null,
})

export const getters = {
  isLoggedIn(state) {
    return Boolean(state.user)
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
      state.user = Object.assign({}, data)
      if (!data.wallet) {
        this.$router.push('/wallet')
      } else {
        this.$router.push('/')
      }
    } else {
      state.userAuth = null
      state.user = null
    }
  },
  OPEN_AGREE_MODAL(state) {
    state.modals.agree = true
    document.body.style.overflow = 'hidden'
  },
  CLOSE_AGREE_MODAL(state) {
    state.modals.agree = false
    document.body.style.overflow = 'auto'
  },
  OPEN_AGE_MODAL(state) {
    state.modals.age = true
  },
  CLOSE_AGE_MODAL(state, enableCookie = false) {
    state.modals.age = false

    if (enableCookie) {
      const d = new Date()
      let days = 365
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
      let expires = 'expires=' + d.toUTCString()
      document.cookie =
        'justyours_modal_age' +
        '=' +
        state.modals.age +
        ';' +
        expires +
        ';path=/'
    }
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