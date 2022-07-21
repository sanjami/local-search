<template>
  <div>
    <p class="title">Opening Hours</p>
    <div class="value" v-if="data">
      <div
        v-for="item in data"
        :key="item"
        class="flex space-between align-baseline"
        >
        <div>{{item.day}} </div>
        <div>
          <p
            v-for="time in item.hours"
            :key="time"
            class="margin-left"
          >
            {{ time.type === 'CLOSED' ? 'closed' : `${time.start} - ${time.end}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OpeningHours',
  props: {
    data: Array,
  },
  methods: {
    mapTimes(time) {
      return time.map((el) => {
        if (el.type === 'CLOSED') {
          return 'closed';
        }
        const result = `${el.start} - ${el.end}`;
        return result;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 16px 0;
}
.value {
  color: #4a535b;
  margin-left: 16px;
}
</style>
