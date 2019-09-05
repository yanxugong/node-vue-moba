<template>
  <div class="page-article"
       v-if="model">
    <div class="d-flex py-3 px-2">
      <div class="iconfont icon-Back"></div>
      <strong class="flex-1">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-06-19
      </div>
    </div>
    <div v-html="model.body"
         class="px-3 body fs-lg"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    },
  },
  data () {
    return {
      model: null
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
}
</script>

<style lang="scss" scoped>
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>