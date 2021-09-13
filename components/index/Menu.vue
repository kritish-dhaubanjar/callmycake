<template>
  <main class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>WE DESIGN DELICIOUS CAKES</h3>
          <br />
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li
              class="nav-item my-1"
              role="presentation"
              v-for="(category, index) in categories"
              :key="category._id"
            >
              <a
                class="nav-link"
                :class="{ active: index == 0 }"
                :id="serialize(category.name)"
                data-bs-toggle="pill"
                :href="`#pills-${serialize(category.name)}`"
                role="tab"
                :aria-controls="`pills-${serialize(category.name)}`"
                aria-selected="true"
                >{{ category.name }}</a
              >
            </li>
          </ul>

          <!--  -->
          <div
            class="
              d-flex
              flex-column-reverse flex-md-row
              justify-content-md-between
            "
          >
            <div class="mt-3 mt-md-0 d-flex align-items-center">
              <p v-show="search" class="mb-0">
                {{ filteredCakes.length }} results found for search term "{{
                  search
                }}".
              </p>
            </div>
            <!-- search btn  -->
            <div class="search d-flex justify-content-start">
              <div class="form-group search-wrapper">
                <i class="las la-search" />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="search"
                />
              </div>
            </div>
            <!-- search btn end -->
          </div>

          <div class="tab-content py-5" id="pills-tabContent" v-show="!search">
            <div
              v-for="(category, index) in categories"
              :key="category._id"
              :class="{ 'show active': index == 0 }"
              class="tab-pane fade"
              :id="`pills-${serialize(category.name)}`"
              role="tabpanel"
              :aria-labelledby="`pills-${serialize(category.name)}`"
            >
              <!-- {{ category }} -->

              <!--  -->
              <div class="row">
                <div
                  class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
                  v-for="cake in cakes.filter((el) => {
                    return category._id == 'all-categories'
                      ? true
                      : el.category._id == category._id;
                  })"
                  :key="cake._id"
                >
                  <Card :_cake="cake" />
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <!-- search results -->
          <div class="search-results py-5" v-show="search">
            <div class="row">
              <div
                class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
                v-for="cake in filteredCakes"
                :key="cake._id"
              >
                <Card :_cake="cake" />
              </div>
            </div>
          </div>
          <!-- search results end -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/UI/Card";

export default {
  data() {
    return {
      categories: [{ name: "All", _id: "all-categories" }],
      cakes: [],
      search: "",
    };
  },

  methods: {
    serialize(value) {
      return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    },
  },

  created() {
    this.$axios.get("api/collections/get/categories").then(({ data }) => {
      this.categories = [
        { name: "All", _id: "all-categories" },
        ...data.entries,
      ];
    });

    this.$axios.get("api/collections/get/cakes").then(({ data }) => {
      this.cakes = data.entries;
    });
  },

  computed: {
    filteredCakes() {
      if (this.search && this.search != "") {
        return this.cakes.filter((cake) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((w) => {
              // console.log(
              //   w,
              //   cake.title,
              //   cake.title && cake.title.toLowerCase().includes(w)
              // );
              return cake.title && cake.title.toLowerCase().includes(w);
            });
        });
      }
      return [];
    },
  },

  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.nav-link {
  border: 2px solid #fff;
  font-weight: 500;
}
.nav-link.active {
  background-color: #fff !important;
  border-radius: 10px;
  border: 2px solid !important;
  color: $primary !important;
}

h1 {
  color: #303030;
}

p {
  color: #666666;
}

.search-wrapper {
  position: relative;
}
.search-wrapper input {
  padding-left: 32px;
}
.search-wrapper i {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}
input,
select,
textarea {
  resize: none;
  border-radius: 0;
  outline: none !important;
  box-shadow: none !important;
  border-color: rgb(229, 229, 229);
  &:focus,
  &:active {
    background-color: #f7f7f7;
    border-color: rgb(229, 229, 229);
  }
}
input,
textarea {
  color: #000;
  font-weight: 500;
  border-width: 2px;

  &:active,
  &:focus {
    border-color: $primary;
  }
}
input::placeholder,
textarea::placeholder {
  color: #d1d1d1;
}
</style>
