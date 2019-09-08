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

    <m-list-card icon="cc-menu-circle"
                 title="新闻资讯"
                 :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div"
                     :to="`/articles/${news._id}`"
                     class="py-2 fs-lg d-flex"
                     v-for="(news, index) in category.newsList"
                     :key="index">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="cc-menu-circle"
                 title="英雄列表"
                 :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap"
             style="margin: 0 -0.5rem;">
          <router-link tag="div"
                       :to="`/heroes/${hero._id}`"
                       class="p-2 text-center"
                       style="width: 20%;"
                       v-for="(hero, index) in category.heroList"
                       :key="index">
            <img :src="hero.avatar"
                 class="w-100"
                 alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

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
import dayjs from 'dayjs'

export default {
  filters: {
    date (value) {
      return dayjs(value).format('MM/DD')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroCats: []
    }
  },
  created () {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats () {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats () {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
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