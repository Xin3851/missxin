<template>
  <div class="home">
     <head-top></head-top>
     <banner-con></banner-con>


     <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
     </BackTop>
  </div>
</template>

<script>
import HeadTop from '@/components/header/header.vue'
import BannerCon from '@/components/banner/banner.vue'
export default {
  name: 'Home',
  data () {
    return {
       msg:'123123123'
    }
  },
  components:{
    HeadTop,
    BannerCon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
      padding: 10px;
      background: rgba(0, 153, 229, .7);
      color: #fff;
      text-align: center;
      border-radius: 2px;
  }
</style>
