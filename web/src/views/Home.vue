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

    <m-card icon="cc-menu-circle"
            title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5"
                        :key="m">
            <div class="py-2"
                 v-for="n in 5"
                 :key="n">
              <span>[公告]</span>
              <span>|</span>
              <span>8月27日全服不停机更新公告</span>
              <span>08/26</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>

    <m-card icon="cc-menu-circle"
            title="英雄列表">
    </m-card>
    <m-card icon="cc-menu-circle"
            title="精彩视频">
    </m-card>
    <m-card icon="cc-menu-circle"
            title="图文攻略">
    </m-card>
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