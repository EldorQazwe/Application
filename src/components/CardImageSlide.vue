<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :rewind="true"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    effect="fade"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img :src="avatar"></swiper-slide>

    <swiper-slide v-for="image in images" :key='image.id' >
    <img :src="image.image" alt="">
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { Navigation, Pagination, Scrollbar, A11y , EffectFade} from 'swiper';
  export default {
    props: {
        images: {type: Array},
        avatar: {type: String}
    },
    components: {
      Swiper,
      SwiperSlide,
    },

    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
      };
    },
  };
</script>

<style>

img {
    height: 205px;
    width: 100%;
}
</style>
