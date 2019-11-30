<template>
  <div class="aside">
      <div class="wrap">
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Aside',
  data () {
    return {

    }
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
  .wrap{
    width:1280px;
    margin: 0 auto;
  }
</style>
