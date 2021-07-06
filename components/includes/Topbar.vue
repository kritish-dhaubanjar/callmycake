<template>
  <section class="bg-light py-2">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a :href="`tel:${contactInfo.phone_primary}`">
            <i class="las la-phone" /> {{ contactInfo.phone_primary }}
          </a>
        </div>
        <div class="col-6 text-end">
          <a target="_blank" :href="contactInfo.facebook"><i class="lab la-facebook"/></a>
          <a target="_blank" :href="contactInfo.instagram"><i class="lab la-instagram px-2"/></a>
          <a target="_blank" :href="contactInfo.twitter"><i class="lab la-twitter"/></a>
          <a :href="`viber://add?number=${contactInfo.viber || ''}`"><i class="lab la-viber"/></a>
          <a :href="`https://wa.me/${contactInfo.whatsapp || ''}`"><i class="lab la-whatsapp"/></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['contactInfo'],
  };
</script>
<style scoped>
* {
  font-size: 14px;
}

i {
  font-size: 20px;
}
</style>
