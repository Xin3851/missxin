<template>
  <div class="Header">
    <div class="wrap">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1">
            <a href="https://www.baidu.com">百度</a>
          </MenuItem>
          <MenuItem name="2">
              用户管理
          </MenuItem>
          <Submenu name="3">
              <template slot="title">
                  统计分析
              </template>
              <MenuGroup title="使用">
                  <MenuItem name="3-1">新增和启动</MenuItem>
                  <MenuItem name="3-2">活跃分析</MenuItem>
                  <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                  <MenuItem name="3-4">用户留存</MenuItem>
                  <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
          </Submenu>
          <MenuItem name="4">
              综合设置
          </MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
      return {
          theme1: 'light'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header{
    width:100%;
  }
  .wrap{
    width:1280px;
    margin: 0 auto;
  }

</style>
