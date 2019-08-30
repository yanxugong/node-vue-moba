<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100"
             src="../assets/image/f3bb936262973c96b972082f6568f0c4.jpeg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/image/6477a1acbdedcd0f4c836e7d21813935.jpeg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/image/e5acd51a07acb72ace6fd45aacc7c637.jpeg"
             alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2"
           slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"
             v-for="n in 10"
             :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        收起
      </div>
    </div>
    <!-- end of nav icons -->

    <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex">
        <i class="iconfont icon-cc-menu-circle"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu"></i>

      </div>
      <div class="card-body">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
    }
  },
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>