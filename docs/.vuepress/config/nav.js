// 导航配置
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '笔记',
    link: '/note/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [],
  },
  {
    text: '日志',
    link: '/log/',
    items: [
      // { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      // { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '项目',
    link: '/project/',
    items: [],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
];
