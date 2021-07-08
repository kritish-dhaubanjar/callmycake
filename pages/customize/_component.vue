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
          <p>
            You can customize the centerpiece of any occasion is a thoughtfully
            created, delicious cake. We take the best ingredients and your ideas
            to create a sweet masterpiece you’ll remember for years to come. <span class="text text-danger"><small>*ALL IMAGES SHOWN ARE FOR ILLUSTRATION PURPOSE ONLY.
            ACTUAL PRODUCT MAY VARY.</small></span>

          </p>
          <div class="row">
            <div class="col-lg-7">
              <!-- <canvas id="custom-cake" class="w-100" width="674" height="379" /> -->
              <canvas id="custom-cake" class="w-100" width="674" height="512" />
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

              <div class="table-responsive my-5">
                <table class="table table-warning">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item</th>
                      <th scope="col">Units</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Estimated&nbsp;Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Pound</td>
                      <td>{{ this.cake.pound }} Pound</td>
                      <td>600/-</td>
                      <td>{{ this.cake.pound * 600 }}/-</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <p class="mb-0">{{ this.cake.flavor.value }}</p>
                      </td>
                      <td>{{ this.cake.pound }}&nbsp;Pound</td>
                      <td>{{ this.cake.flavor.rate }}/-</td>
                      <td>{{ this.cake.pound * this.cake.flavor.rate }}/-</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td class="fw-bold">Total</td>
                      <td></td>
                      <td></td>
                      <td class="fw-bold">
                        {{
                          this.cake.pound * 600 +
                            this.cake.pound * this.cake.flavor.rate
                        }}/-
                      </td>
                    </tr>
                  </tbody>
                </table>
                <small>* Price in NPR</small>
              </div>
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
import Swal from "sweetalert2";

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
  "design",
  //
  "instruction"
];

const sX = 0;
const sY = 0;
const sW = 674;
const sH = 379;

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
          this.context.drawImage(image, sX, sY, sW, sH, 0, 512 - sH, sW, sH);
        }
      }

      if (this.cake.layer >= 2) {
        for (const component of components) {
          const src = this.cake[component].image;
          if (src && component != "base") {
            const image = await this.asyncLoader(this.cake[component].image);
            this.context.drawImage(
              image,
              sX,
              sY,
              sW,
              sH,
              this.cake.type === "round" ? 80 : 90,
              this.cake.type === "round" ? 60 : 110,
              this.cake.type === "round" ? sW / 1.3 : sW / 1.5,
              this.cake.type === "round" ? sH / 1.3 : sH / 1.5
            );
          }
        }
      }
      if (this.cake.layer === 3) {
        for (const component of components) {
          const src = this.cake[component].image;
          if (src && component != "base") {
            const image = await this.asyncLoader(this.cake[component].image);
            this.context.drawImage(
              image,
              sX,
              sY,
              sW,
              sH,
              this.cake.type === "round" ? 150 : 150,
              this.cake.type === "round" ? 10 : 90,
              this.cake.type === "round" ? sW / 1.8 : sW / 2.3,
              this.cake.type === "round" ? sH / 1.8 : sH / 2.3
            );
          }
        }
      }
    },

    addToCart(instr) {
      // upload images first
      let formData = new FormData();

      // let canvasImage = this.canvas.toDataURL("image/png");
      this.canvas.toBlob(blob => {
        //
        let canvasImage = new File([blob], "custom_cake.png", {
          type: "image/png"
        });
        formData.append('files[]', canvasImage);
        //
        if(instr.cake_topper_image) {
          formData.append('files[]', instr.cake_topper_image);
        }
        //
        this.$axios
          .post('api/cockpit/addAssets?token=b25b0bb3eb766c53531916bcf5fd6b', formData)
          .then(({ data }) => {
            if(data.assets.length > 0) {
              // path for cake_image generated from custom shop
              let cake_image = null;
              let index = data.assets.findIndex(el => el.title == 'custom_cake.png');
              if(index > -1) {
                cake_image = { path: '/storage/uploads' + data.assets[index].path };
              }

              if(instr.cake_topper_image) {
                let i = data.assets.findIndex(el => el.title == instr.cake_topper_image.name);
                if(i > -1) {
                  instr.cake_topper_image = { path: '/storage/uploads' + data.assets[i].path };
                }
              }

              // finally store custom order
              const newData = {
                ...instr,
                cake_image,
                type: 'Custom Shop',
                custom_shop_cake_spec: this.cake,
              }
              // finally store order with cake_image
              this.$axios
                .post('api/collections/save/custom_orders', { data: newData })
                .then(({ data }) => {

                  // notify
                  let formData = new FormData();
                  formData.append('order_id', data._id);
                  this.$axios
                    .post('api/public/customorder', formData)
                    .then(res => {})
                    .finally(res => {
                      Swal.fire({
                        icon: "success",
                        title: "Success",
                        text:
                          "Your order request has been sent successfully ! We will reach out to you shortly."
                        // footer: "<a href>Why do I have this issue?</a>"
                      }).then(() => {
                        this.$router.replace("/");
                      });
                    });

                });
            }
          });
      }, 'image/png');
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

<style scoped lang="scss">
td {
  p {
    max-width: 128px;
    max-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
