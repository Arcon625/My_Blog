<template>
  <div class="home">
    <el-carousel class="home_chart" height="90vh" trigger="click" :interval="5000">
      <el-carousel-item v-for="item in chartList" :key="item.id">
        <img :src="item.url" style="width: 100%;cursor: pointer" @click="goto(item.id)">
      </el-carousel-item>
    </el-carousel>
    <div class="home_content">
      <el-row type="flex" style="margin-bottom: 15px;">
        <el-col :span="14">
          <el-image
              :src="require('./images/animate_1.jpg')"
              :preview-src-list="[
                  require('./images/animate_1.jpg'),
                  require('./images/animate_2.png'),
                  require('./images/animate_3.png')
                  ]">
          </el-image>
<!--          <img :src="require('./images/pic1.jpg')" style="width: 100%;">-->
        </el-col>
        <el-col :span="10" class="img_detail_box">
          <div class="img_detail">
            <h2>动漫</h2>
            <p>喜欢日本动漫作品，例如《火影忍者》、《名侦探柯南》等，通过动漫还学到了一些日本人交流的日常用语。</p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" style="margin-bottom: 15px;">
        <el-col :span="10" class="img_detail_box">
          <div class="img_detail">
            <h2>篮球</h2>
            <p>从小喜欢运动，特别是在篮球项目有一点的天赋，读书期间还经常参加校级或班级篮球赛，并获得一些奖项。</p>
          </div>
        </el-col>
        <el-col :span="14" class="img_col">
          <el-image
              :src="require('./images/basketball_1.png')"
              :preview-src-list="[
                  require('./images/basketball_1.png'),
                  require('./images/basketball_2.png'),
                  require('./images/basketball_3.png'),
                  require('./images/basketball_4.png')
              ]">
          </el-image>
<!--          <img :src="require('./images/pic2.png')" style="width: 100%;">-->
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="14" class="img_col">
          <el-image
              :src="require('./images/LOL_1.png')"
              :preview-src-list="[
                  require('./images/LOL_1.png'),
                  require('./images/LOL_2.png'),
                  require('./images/LOL_3.png'),
              ]">
          </el-image>
<!--          <img :src="require('./images/pic3.png')" style="width: 100%;">-->
        </el-col>
        <el-col :span="10" class="img_detail_box">
          <div class="img_detail">
            <h2>英雄联盟</h2>
            <p>
              最喜欢的电子竞技游戏就是《英雄联盟》！从14年开始接触《英雄联盟》到现在，一路见证了中国电子竞技水平不断提高！
              平时也喜欢和高中同学一起开黑。
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      chartList: [
        {id:0,url:require('./images/animate_1.jpg'),offset:0},
        {id:1,url:require('./images/basketball_1.png'),offset:4},
        {id:2,url:require('./images/LOL_1.png'),offset:0},
      ]
    }
  },
  methods:{
    goto(index){
      let target = document.querySelectorAll('.home_content>.el-row')[index]

      window.scrollTo({
        'top': target.offsetTop - 100,
        'behavior': 'smooth'
      })

    }
  }
}
</script>

<style lang="less" scoped>
  .home{
    .home_content{
      width: 90%;
      margin: 15px auto;
      .el-image{
        width: 100%;
        height: 100%;
        transform: scale(0.8,0.8);
        transition: all .3s linear;
        &:hover{
          transform: scale(0.9,0.9);
        }
      }
      .img_detail_box{
        display: flex;
        flex-flow: column;
        justify-content: center;
        .img_detail{
          padding: 0 20px;
          border-radius: 15px;
          background-color: #16161f;
          font-family: serif;
          font-weight: bolder;
          color: #efecec;
          h2{
            margin: 20px 0;
            font-size: 40px;
            text-align: center;
          }
          p{
            margin: 0 0 20px 0;
            font-size: 20px;
            line-height: 40px;
            text-align: center;
          }
        }
      }

    }
  }
</style>
