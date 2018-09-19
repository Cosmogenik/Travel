<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="!showFixed">
      <div class='iconfont header-abs-back'>&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="showFixed" :style="opacityStyle">
      景区图片
      <router-link tag="div" to="/" class='iconfont header-abs-back'>&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showFixed: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showFixed = true
      } else {
        this.showFixed = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      font-size .4rem
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    font-size .32rem
    color #fff
    background $bgColor
    .header-abs-back
      position absolute
      top 0
      left 0
      font-size .4rem
      width .64rem
      color #fff
</style>
