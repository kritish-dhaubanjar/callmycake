export const state = () => ({
  cake: {
    base: {
      image: "/images/customization/base.png"
    },
    filling: {
      id: 1,
      icon: "",
      image: null,
      value: "No Selection"
    },
    icing: {
      id: 3,
      image: "/images/customization/icings/001.png",
      icon: "/images/customization/flavor_options/001.png",
      value: "White"
    },
    flavor: {
      id: 3,
      image: "/images/customization/flavors/003.png",
      icon: "/images/customization/flavor_options/003.png",
      value: "Top: White/Bottom: Chocolate"
    },
    topBorder: {
      id: 3,
      image: "/images/customization/topBorders/001.png",
      icon: "/images/customization/flavor_options/003.png",
      value: "Top: White/Bottom: Chocolate"
    }
  }
});

export const getters = {
  cake(state) {
    return state.cake;
  }
};

export const mutations = {
  set(state, { component, option }) {
    state.cake[component] = option;
  }
};
