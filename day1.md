## 整体
    布局：
        Header + Main
    样式：
        1、Header为固定定位
        2、Main包含路由视图

### Header
    布局：
        el-header > （头像img + el-menu)
        el-menu > el-menu-item*3
        el-menu-item: MySpace、MyProjects、Information
    功能：
        1、点击el-menu-item跳转到指定路由

### MySpace
    布局：
        div.home > (el-carousel + div.home_content)
        el-carousel > (el-carousel-item > img)*3
        div.home_content > el-row*3
        el-row > el-col*2
        el-col > el-image
        el-col > div.img_detail
    功能：
        1、点击 el-carousel-item > img 页面滚动到指定位置
        2、鼠标经过 el-col > el-image 图片放大
        3、点击 el-col > el-image 预览大图
        
