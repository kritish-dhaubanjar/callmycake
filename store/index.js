export const state = () => ({
  isLoading: false,
  cart: [],
  cake: null,
  //DetailModal
  detailcake: {
    title: "",
    image: "",
    price: 0
  },
  showAdvertisement: true,
  discountCoupon: {},
});

export const getters = {
  cart(state) {
    return state.cart;
  },

  cake(state) {
    return state.cake;
  },

  /* DetailModal */
  detailcake(state) {
    return state.detailcake;
  },
  /* DetailModal */

  discountCoupon(state) {
    return state.discountCoupon;
  },

  showAdvertisement(state) {
    return state.showAdvertisement;
  }
};

export const mutations = {
  init(state) {
    let cart = localStorage.getItem("cart");

    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  /* DetailModal */
  setDetailCake(state, payload) {
    state.detailcake = payload;
  },

  /* DetailModal */

  reset(state) {
    state.cake = null;
  },

  setDiscountCoupon(state, payload) {
    state.discountCoupon = payload;
  },

  resetDiscountCoupon(state) {
    state.discountCoupon = {};
  },

  unsetShowAdvertisement(state) {
    state.showAdvertisement = false;
  },

  add(state, payload) {
    let index = state.cart.findIndex(cake => {
      return (
        cake._id == payload._id
        && cake.variant_selected == payload.variant_selected
        && cake.hasEgg == payload.hasEgg
      );
    });

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
    let index = state.cart.findIndex(cake => {
      return (
        cake._id == payload._id
        && cake.variant_selected == payload.variant_selected
        && cake.hasEgg == payload.hasEgg
      );
    });
    if (index > -1) {
      state.cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  inc(state, payload) {
    let index = state.cart.findIndex(cake => {
      return (
        cake._id == payload._id
        && cake.variant_selected == payload.variant_selected
        && cake.hasEgg == payload.hasEgg
      );
    });
    if (index > -1) {
      state.cart[index].qty += 1;
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  dec(state, payload) {
    let index = state.cart.findIndex(cake => {
      return (
        cake._id == payload._id
        && cake.variant_selected == payload.variant_selected
        && cake.hasEgg == payload.hasEgg
      );
    });
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
  },

  setIsLoading(state, payload) {
    state.isLoading = payload ? true : false;
  }
};
