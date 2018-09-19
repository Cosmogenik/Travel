<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of recommendList" :key="item.id" :to="'detail/' + item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 2rem
    overflow hidden
    padding .2rem 0
    .item-img
      width 2rem
      height 2rem
      margin-left .2rem
    .item-info
      flex 1
      padding 0 .2rem
      min-width 0
      .item-title
        ellipsis()
        margin-top .26rem
        line-height .44rem
        height .44rem
        font-size .32rem
      .item-desc
        ellipsis()
        line-height .34rem
        height .34rem
        color #ccc
      .item-btn
        margin-top .26rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        font-size .24rem
        color #fff

</style>
