export default function ({ window, app, store, redirect, route }) {
  const isUserSignedIn = store.state.user || store.state.userAuth
  const isSigninRoute = route.path === '/signin'

  if (route.path != '/' && store.state.modals.age && !isSigninRoute) {
    return redirect('/')
  }

  if (!isUserSignedIn && !isSigninRoute) {
    return redirect('/signin')
  }
}
