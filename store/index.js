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
  },

  del(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      state.cart.splice(index, 1);
    }
  },

  inc(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      state.cart[index].qty += 1;
    }
  },

  dec(state, payload) {
    let index = state.cart.findIndex(cake => cake.id == payload.id);
    if (index > -1) {
      if (state.cart[index].qty > 1) {
        state.cart[index].qty -= 1;
      }
    }
  },

  checkout(state) {
    state.cart = [];
    state.cake = null;
  }
};
