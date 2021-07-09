export default function ({ window, app, store, redirect, route, event }) {
  if (route.path != '/' && store.state.modals.age) {
    return redirect('/')
  }
}
