export const state = () => ({
  cake: {
    type: "round",
    layer: 1,
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
      message: '',
      notes: '',
      name: '',
      email: '',
      phone: '',
      cake_topper_image: null,
    },
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
