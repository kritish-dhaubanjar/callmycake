<template>
  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <h5 class="display-6 fw-bold">Custom Shop</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-12 my-4">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active fw-bold"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <i class="las la-birthday-cake"></i> Customize Cake
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fw-bold"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <i class="las la-cloud-upload-alt"></i> Upload Image
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="row">
            <div class="col-lg-7">
              <canvas id="custom-cake" class="w-100" width="674" height="379" />
            </div>
            <div class="col-lg-5">
              <Type v-if="component === 'type'" />
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
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Upload />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Type from "@/components/customization/Type";
import Flavor from "@/components/customization/Flavor";
import Filling from "@/components/customization/Filling";
import Icing from "@/components/customization/Icing";
import TopBorder from "@/components/customization/TopBorder";
import BottomBorder from "@/components/customization/BottomBorder";
import Flower from "@/components/customization/Flower";
import Topping from "@/components/customization/Topping";
import Instruction from "@/components/customization/Instruction";
import Upload from "@/components/customization/Upload";

const components = [
  "type",
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
  scrollToTop: false,
  head() {
    return {
      title: "CallMyCake | Customize Cake"
    };
  },
  data() {
    return {
      canvas: null,
      context: null,
      component: "type"
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
    Type,
    Flavor,
    Filling,
    Icing,
    TopBorder,
    BottomBorder,
    Flower,
    Topping,
    Instruction,
    Upload
  }
};
</script>
