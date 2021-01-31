export default function({ store, redirect }) {
  if (store.getters.cart.length == 0) {
    return redirect("/");
  }
}
