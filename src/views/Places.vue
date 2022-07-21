<template>
  <div class="container">
    <ElInput
      v-model="search"
      placeholder="Search business entries"
      class="search"
      @input="debounceSearch"
      clearable
      size="large"
    >
      <template #suffix>
        <SearchIcon class="search-icon"/>
      </template>
    </ElInput>
    <div v-if="places && places.length" class="flex wrap">
      <DetailsCard
        v-for="item in places"
        :key="item.id"
        :data="item"
        @click="goToDetails(item)"
      />
    </div>
    <div v-if="places && places.length === 0">There are no places that meet your criteria</div>
    <Spinner v-if="loading" />
    <ErrorCard v-if="error" @reload="getPlaces" :msg="error"/>
  </div>
</template>

<script>
import errorDebug from '@/lib/common';
import SearchIcon from '../assets/vectors/search.vue';
import http from '../http';
import DetailsCard from '../components/places/DetailsCard.vue';
import ErrorCard from '../components/common/ErrorCard.vue';

export default {
  name: 'Places',
  components: {
    DetailsCard,
    ErrorCard,
    SearchIcon,
  },
  data() {
    return {
      places: null,
      search: '',
      loading: false,
      error: '',
    };
  },
  methods: {
    async getPlaces() {
      this.error = false;
      this.loading = true;
      try {
        const searchParams = this.search ? `?search=${this.search.trim()}` : '';
        const response = await http.get(`/places${searchParams}`);
        this.places = response.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = errorDebug(error);
      }
    },
    debounceSearch(search) {
      this.search = search;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.getPlaces();
      }, 500);
    },
    goToDetails(item) {
      this.$router.push({ name: 'PlaceDetails', params: { id: item.id } });
    },
  },
  mounted() {
    this.getPlaces();
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  margin: 24px 0;
}
.search-icon {
  transform : rotate(90deg);
}
</style>
