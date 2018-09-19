<template>
  <div class="container" @click="handleClickGallary">
    <div class="img-wrapper">
      <swiper class="swiper" :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleClickGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background #000
    .img-wrapper
      width 100%
      height 0
      padding-bottom 100%
      .swiper
        height 7.5rem
        .swiper-img
          width 100%
          position relative
          top 3.75rem
          transform translateY(-50%)
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
