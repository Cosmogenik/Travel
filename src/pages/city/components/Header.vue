<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class='iconfont city-back'>&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    font-size .32rem
    color #fff
    background $bgColor
    .city-back
      position absolute
      top 0
      left 0
      font-size .4rem
      width .64rem
      color #fff
</style>
