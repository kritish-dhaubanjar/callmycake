<template>
  <section>
    <section class="bg-light">
      <div class="container py-5 ">
        <div class="row my-3">
          <div class="col-12">
            <h1 class="mb-0">BLOGS</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-12" v-for="(blog, i) in blogs" :key="i">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6 mb-5">
              <div class="blog-img" :style="`background-image: url('${$axios.defaults.baseURL}${blog.image.path}');`"></div>
            </div>

            <div class="col-12 col-md-12 col-lg-6 mb-5">
              <h6>{{ $utils.toDateString(blog._created * 1000) }}</h6>
              <div class="my-2">
                <nuxt-link
                  :to="`/blogs/${blog._id}`"
                  class="fw-bold fs-4"
                  tag="a"
                >
                  {{ blog.title }}
                </nuxt-link>
              </div>

              <p>
                {{ blog.overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    head() {
      return {
        title: "CallMyCake | Blogs"
      };
    },

    data() {
      return {
        blogs: [],
      }
    },

    created() {
      this.$axios
        .post('api/collections/get/blogs', {
          sort: { _created: -1 },
        })
        .then(({ data }) => {
          this.blogs = data.entries;
        });
    }
  };
</script>
<style scoped>
p {
  line-height: 150%;
  color: #777;
}

h6 {
  color: #ee6f7c;
  text-transform: uppercase;
}
.blog-img {
  width: 100%;
  min-height: 280px;
  background-image: url(https://via.placeholder.com/485x325);
  background-size: cover;
}
</style>
