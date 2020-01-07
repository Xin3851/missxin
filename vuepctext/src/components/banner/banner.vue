<template>
  <div class="Aside">
    <Carousel autoplay height="500px">
        <Carousel-item style="background: #0000FF">
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item style="background: #00FF00">
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item style="background: #00FFFF">
            <div class="demo-carousel">3</div>
        </Carousel-item>
    </Carousel>
    <row>
        <i-col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      message:"我是banner图的内容",
      red:'#000',
      green:'#000',
      blue:'#000',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
