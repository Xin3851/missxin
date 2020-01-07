<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  beforecreate :function(){
    console.log('使用场景在使用londing事件的时候')
  },
  created:function(){
    console.log('处于loading结束后，还做一些初始化，实现函数自执行');
  },
  mounted:function(){
    console.log('处于发起后端请求，获取数据，配合路由钩子执行操作');
  },
  methods:{

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.gtco-loader{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url(../static/images/loader.gif) center no-repeat #fff;
}
</style>
