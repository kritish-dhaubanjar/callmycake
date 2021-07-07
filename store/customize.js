export const state = () => ({
  cake: {
    type: "round",
    design: "wide",
    layer: 1,

    pound: 1,

    base: {
      image: "/images/customization/base/round.png"
    },
    //
    filling: {
      id: 1,
      icon: "",
      image: null,
      value: "No Selection"
    },
    icing: {
      id: 1,
      image: "/images/customization/icings/round/001.png",
      icon: "#fff",
      value: "White"
    },
    flavor: {
      id: 1,
      image: "/images/customization/flavors/round/001.png",
      icon: "/images/customization/flavor_options/001.png",
      value: "Top: White/Bottom: White",
      rate: 0
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

    // Computed Price
    price: {
      pound: 600, //cake.pound * 600
      flavor: 0 //cake.pound * flavor_rate
    },
    // Computed Price

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
  setType(state, type) {
    const components = Object.keys(state.cake);

    components.forEach(component => {
      let image = state.cake[component].image;

      if (image && !image.includes(type)) {
        const toReplace = type === "round" ? "square" : "round";
        image = image.replace(toReplace, type);
        state.cake[component].image = image;
      }
    });

    state.cake.type = type;
  },

  set(state, { component, option }) {
    if (option.image) {
      option.image = option.image.replace("<type>", state.cake.type);
    }
    state.cake[component] = option;
  }
};
