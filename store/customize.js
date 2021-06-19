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
      id: 1,
      image: "/images/customization/icings/001.png",
      icon: "#fff",
      value: "White"
    },
    flavor: {
      id: 1,
      image: "/images/customization/flavors/001.png",
      icon: "/images/customization/flavor_options/001.png",
      value: "Top: White/Bottom: White"
    },
    topBorder: {
      id: 0,
      type: "shells",
      image: null,
      icon: "#fff",
      value: "None"
    },
    bottomBorder: {
      id: 0,
      type: "shells",
      image: null,
      icon: "#fff",
      value: "None"
    },
    topping: {
      id: 0,
      image: null,
      value: "None"
    },
    flower: {
      id: 0,
      image: null,
      icon: "#fff",
      value: "None"
    },

    //
    instruction: {
      message: "",
      notes: ""
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
