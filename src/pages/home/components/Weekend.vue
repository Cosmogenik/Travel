<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .img-wrapper
    width 100%
    height 0
    padding-bottom 35.66%
    .item-img
      width 100%
  .item-info
    padding .2rem
    .item-title
      ellipsis()
      line-height .44rem
      height .44rem
      font-size .32rem
    .item-desc
      ellipsis()
      line-height .34rem
      height .34rem
      color #ccc
</style>
