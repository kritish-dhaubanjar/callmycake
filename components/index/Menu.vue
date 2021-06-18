<template>
  <main class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>WE DESIGN DELICIOUS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            possimus eveniet aspernatur neque esse, animi aperiam necessitatibus
            adipisci ipsum molestiae consectetur sint asperiores consequatur
            ducimus qui optio unde nobis ea.
          </p>
          <br />
          <br />
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li
              class="nav-item my-1"
              role="presentation"
              v-for="(category, index) in categories"
              :key="category._id"
            >
              <a
                class="nav-link "
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

          <div class="tab-content py-5" id="pills-tabContent">
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
                  class="col-6 col-sm-6 col-md-4 col-lg-3"
                  v-for="cake in cakes.filter(el => {return category._id =='all-categories' ? true : el.category._id == category._id})"
                  :key="cake._id"
                >
                  <Card :_cake="cake" />
                </div>
              </div>
              <!--  -->
            </div>
          </div>
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
      categories: [
        {name: 'All', _id: 'all-categories'},
      ],
      cakes: [],
    };
  },

  methods: {
    serialize(value) {
      return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
  },

  created() {
    this.$axios
      .get('api/collections/get/categories')
      .then(({ data }) => {
        this.categories = [
          {name: 'All', _id: 'all-categories'},
          ...data.entries,
        ]
      });


    this.$axios
      .get('api/collections/get/cakes')
      .then(({ data }) => {
        console.log(data);
        this.cakes = data.entries;
      });
  },

  components: {
    Card
  }
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
  border-radius: 0;
  border: 2px solid;
  color: $primary;
}

h1 {
  color: #303030;
}

p {
  color: #666666;
}
</style>
