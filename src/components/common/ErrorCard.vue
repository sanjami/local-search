<template>
  <div class="card">
    <h3 class="error">Error</h3>
    <h3>{{msg}}</h3>
    <ElButton type="warning" @click="$emit('reload')">
      Try again
    </ElButton>
  </div>
</template>

<script>

export default {
  name: 'ErrorCard',
  props: {
    msg: String,
  },
};
</script>
