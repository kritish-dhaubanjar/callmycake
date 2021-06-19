<template>
  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <h5 class="display-6 fw-bold">Custom Shop</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-7">
          <canvas id="custom-cake" class="w-100" width="674" height="379" />
        </div>
        <div class="col-lg-5">
          <Flavor v-if="component === 'flavor'" />
          <Filling v-if="component === 'filling'" />
          <Icing v-if="component === 'icing'" />
          <TopBorder v-if="component === 'topBorder'" />
          <BottomBorder v-if="component === 'bottomBorder'" />
          <Flower v-if="component === 'flower'" />
          <Topping v-if="component === 'topping'" />
          <Instruction
            v-if="component === 'instruction'"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Flavor from "@/components/customization/Flavor";
import Filling from "@/components/customization/Filling";
import Icing from "@/components/customization/Icing";
import TopBorder from "@/components/customization/TopBorder";
import BottomBorder from "@/components/customization/BottomBorder";
import Flower from "@/components/customization/Flower";
import Topping from "@/components/customization/Topping";
import Instruction from "@/components/customization/Instruction";

const components = [
  "base",
  "flavor",
  "icing",
  "filling",
  "topBorder",
  "bottomBorder",
  "topping",
  "flower",
  //
  "instruction"
];

export default {
  data() {
    return {
      canvas: null,
      context: null,
      component: "flavor"
    };
  },

  created() {
    const component = this.$route.params.component;

    if (component && components.includes(component) && component !== "base") {
      this.component = component;
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.canvas = document.getElementById("custom-cake");
      this.context = this.canvas.getContext("2d");
      this.drawCake();
    });
  },

  methods: {
    asyncLoader(src) {
      return new Promise(resolve => {
        const image = new Image();
        image.onload = () => {
          resolve(image);
        };
        image.src = src;
      });
    },

    async drawCake() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (const component of components) {
        const src = this.cake[component].image;
        if (src) {
          const image = await this.asyncLoader(this.cake[component].image);
          this.context.drawImage(
            image,
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
        }
      }
    },

    addToCart() {
      this.canvas.toBlob(blob => {
        let file = new File([blob], "custom_cake.png", {
          type: "image/png"
        });

        const a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(file);
        a.download = "custom_cake.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, "image/png");
    }
  },

  computed: {
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  watch: {
    cake: {
      deep: true,
      handler: function() {
        this.drawCake();
      }
    }
  },

  components: {
    Flavor,
    Filling,
    Icing,
    TopBorder,
    BottomBorder,
    Flower,
    Topping,
    Instruction
  }
};
</script>
