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
</style>