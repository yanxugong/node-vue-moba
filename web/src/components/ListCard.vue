<template>
  <m-card v-bind="$attrs">
    <div class="nav jc-between">
      <div :class="['nav-item', active === index?'active':'']"
           v-for="(category, index) in categories"
           :key="index"
           @click="active = index">
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper>
        <swiper-slide v-for="(category, index) in categories"
                      :key="index">
          <slot name="items"
                :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      active: 0
    }
  },
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
</style>