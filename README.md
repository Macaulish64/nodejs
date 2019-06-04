# TransProjectToNodejs

源工程在：https://github.com/Alnitak-Antares/distributed-ac-system。
源工程使用java spring boot框架，没有利用模板渲染而使用了前后端分离。
现在想尝试用node.js重写这个工程，目的是学一下node.js怎么快速开发一个web服务，
框架选择：
后端框架：Express
数据库：MongoDB(或者MySQL+ORM2吧),最好都试试
后端架构：MVC
    /routes： 做路由和转发
前端框架：待定


## 遇到的问题
###　关于全局变量
当然可以使用global，但是会污染全局变量名。
怎么办呢。通过module.export或者exports