<template>
  <section>
    <div class="container my-5">
      <div class="row mb-5">
        <div class="col-12">
          <h5 class="display-6 fw-bold">Blogs</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-5">
          <img :src="(blog.image) ? `${$axios.defaults.baseURL}${blog.image.path}`: 'https://via.placeholder.com/485x325'" height="500" />
        </div>

        <div class="col-12 mb-5">
          <h6>{{ (blog._created) ? $utils.toDateString(blog._created * 1000): '' }}</h6>
          <div class="mt-4">
            <h5 class="fw-bold fs-4">
             {{ blog.title }}
            </h5>
          </div>

          <hr class="mb-4" />

          <div class="content" v-html="blog.content"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        blog: {},
      };
    },

    created() {
      this.$axios
        .post('api/collections/get/blogs', {
          filter: {_id: this.$route.params.blog }
        })
        .then(({ data }) => {
          console.log(data);
          this.blog = data.entries[0] ? data.entries[0] : {};
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
</style>
