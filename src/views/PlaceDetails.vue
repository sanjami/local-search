<template>
    <div class="container">
      <div class="flex align-baseline">
        <ElButton link @click="$router.go(-1)"><BackIcon /></ElButton>
        <h2 class="margin-left">{{ (place || {}).name || ''}}</h2>
      </div>
      <div v-if="place" class="details">
        <div class="details-first">
          <p class="title">Address</p>
          <p class="value">{{place.address}}</p>
          <p class="title">Website</p>
          <div class="value">
            <a v-for="item in place.website" :key="item" :href="item" target=”_blank”>{{item}}</a>
          </div>
          <p class="title">Phone</p>
          <div class="value">
            <p v-for="item in place.phones" :key="item"> +{{item}}</p>
          </div>
        </div>
        <OpeningHours :data="place.openingHours"/>
      </div>
    <Spinner v-if="loading" />
    <ErrorCard v-if="error" @reload="getPlaceDetails" :msg="error"/>
  </div>
</template>

<script>

import errorDebug from '@/lib/common';
import http from '../http';
import OpeningHours from '../components/places/OpeningHours.vue';
import BackIcon from '../assets/vectors/back.vue';
import ErrorCard from '../components/common/ErrorCard.vue';

export default {
  name: 'PlaceDetails',
  components: {
    OpeningHours,
    BackIcon,
    ErrorCard,
  },
  data() {
    return {
      place: null,
      loading: false,
      error: '',
    };
  },
  methods: {
    async getPlaceDetails() {
      this.error = false;
      this.loading = true;
      try {
        const response = await http.get(`places/${this.$route.params.id}`);
        this.place = response.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = errorDebug(error);
      }
    },
  },
  mounted() {
    this.getPlaceDetails();
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .details-first {
    margin-right: 80px;
  }
  .title {
    margin: 16px 0;
  }
  .value {
   color: #4a535b;
   margin-left: 16px;
  }
}
</style>
