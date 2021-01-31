export const state = () => ({
  cart: [],
  cake: null
});

export const getters = {
  cart(state) {
    return state.cart;
  },

  cake(state) {
    return state.cake;
  }
};

export const mutations = {
  init(state) {
    let cart = localStorage.getItem("cart");

    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  reset(state) {
    state.cake = null;
  },

  add(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);

    state.cake = payload;

    if (index > -1) {
      state.cart[index].qty++;
    } else {
      state.cart.push({
        ...payload,
        qty: 1
      });
    }

    //
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  del(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      state.cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  inc(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      state.cart[index].qty += 1;
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  dec(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      if (state.cart[index].qty > 1) {
        state.cart[index].qty -= 1;
      }
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  checkout(state) {
    state.cart = [];
    state.cake = null;
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }
};
