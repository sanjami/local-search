<template>
  <div class="card">
    <h3>{{data.name}}</h3>
    <p v-for="item in data.address.split(',')" :key="item">
     {{item}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'DetailsCard',
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
.card:last-child {
  margin: 24px 0 24px 0;
}
</style>
