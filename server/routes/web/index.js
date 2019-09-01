module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  // const Article = require('../../models/Article')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find()
      .where({
        parent: parent
      })
      .lean()
    const newsTitles = [
      '最强战队争霸赛参赛指南，如何让战队提升排名入围淘汰赛',
      '审判系统信誉经验恢复速率调整公告',
      '王者荣耀公布“无限开放计划”：探索游戏边界，共享荣耀',
      '暑期粉丝节狂欢，快手直播邀你一起来上分！',
      '《王者荣耀》对话岭南优秀非遗文化 跨界融合南狮发力新文创',
      '8月27日全服不停机更新公告',
      '审判系统信誉经验恢复速率调整公告',
      '8月31日体验服不停机更新公告',
      '8月30日体验服停机更新公告',
      '8月28日体验服停机更新公告',
      '乘风破浪闯峡谷 SNK永久英雄免费拿',
      '峡谷最强战队争霸赛今日开启，全新赛制抢先体验！',
      '最强战队争霸赛参赛指南，如何让战队提升排名入围淘汰赛',
      '新版本峡谷狂欢活动周开启',
      '【微信游戏专属】微信游戏6周年活动已开启',
      '2019年KPL秋季赛开战在即，首周对阵看点抢先知',
      'KPL秋季赛赛程公布',
      '八月尾，终章奏！王者荣耀城市赛省赛最后一周即将开启！',
      '初心不改，KPL三周年专场9月10日温情上映；该我上场，秋季赛11日开战！',
      '2019年KPL秋季赛大名单公布'
    ]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  })

  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name: '新闻分类'
    // })
    //   .populate({
    //     path: 'children',
    //     populate: {
    //       path: 'newsList'
    //     }
    //   })
    //   .lean()
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: { $slice: ['$newsList', 5] }
        }
      }
    ])
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find()
        .where({
          categories: { $in: subCats }
        })
        .populate('categories')
        .limit(5)
        .lean()
    })

    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName =
          cat.name === '热门' ? news.categories[0].name : cat.name
        return news
      })
    })
    res.send(cats)
  })

  app.use('/web/api', router)
}
