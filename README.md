# 使用说明/USE

## react-highcharts
```js
npm install react-resume
```


```js
import Resume from "react-resume"
<Resume R={R}></Resume>
```


```js
const R = {
  avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F001M3Mcbly1gjvrsyggztj61tm1tr15q02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615360296&t=3dc56c54c1eadc6e08e5d0fc085b631a', // remote 地址
  position:'前端工程师',
  workExperience:3,
  city:'北京',
  university:'斯坦福大学',
  universityYear:'本科2014-2018年',
  birthday:'1996.10.1',
  major:'土木工程',
  contact:'188 1888 7979',
  mail:'799999@gmail.com',
  github:'github.com/iu',
  page:2,
  company:[
    {
      name:'谷歌歌',
      year:'2020.1 - 现在',
      project:[{
        name: '小雅音响',
        desc: '数据管理平台(vue+element-ui)',
        detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
        struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
        highlights: [
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
        ],
        // result:'提高运营工作效率，减少沟通成本',
        // label:['vue','webapck','element-ui','less','SPA']
        },{
          name: '小雅音响2',
          desc: '数据管理平台(vue+element-ui)',
          detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
          struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
          highlights: [
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          ],
        },{
          name: '小雅音响3',
          desc: '数据管理平台(vue+element-ui)',
          detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
          struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
          highlights: [
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          ],
        },
      ],
    },
    {
      name:'谷歌歌2',
      year:'2020.1 - 现在',
      project:[{
        name: '小雅音响',
        desc: '数据管理平台(vue+element-ui)',
        detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
        struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
        highlights: [
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
        ],
        // result:'提高运营工作效率，减少沟通成本',
        // label:['vue','webapck','element-ui','less','SPA']
        },{
          name: '小雅音响2',
          desc: '数据管理平台(vue+element-ui)',
          detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
          struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
          highlights: [
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          ],
        },{
          name: '小雅音响3',
          desc: '数据管理平台(vue+element-ui)',
          detailDesc:'任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块, 任务增删改查等模块',
          struct:'采用Vue-SPA技术方案，vue-cli搭建，vue-router跳转，webpack打包压缩，前后端分离，axois CORS 跨域技术，采用scss嵌套样式，使用阿里矢量图标库，使用了element-ui框架',
          highlights: [
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
            '增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验，增强页面复用性，编辑添加页面合并，减少冗余 登陆页使用流星雨动效制作，提高用户体验',
          ],
        },
      ],
    },
  ],
  skill:[
    '熟练掌握html5,css',
    '熟练了解js技术',
    '深入了解vue底层原理,熟练运用vue全家桶',
    '熟练兼容性和性能优化',
    '深入了解vue底层原理,熟练运用vue全家桶',
    '熟练使用react',
    '深入了解vue底层原理,熟练运用vue全家桶',
    '熟练兼容性和性能优化'
  ]
}
```