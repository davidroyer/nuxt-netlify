<template>
  <section class="container">
    <div @click="runTransition($event)" class="test">Color Here</div>
  </section>
</template>

<script>
export default {
  methods: {
    runTransition(event) {
      console.log(event);
    }
  }
}

</script>
<style scoped lang='scss'>
.title
{
  margin: 50px 0;
}

.test {
  background: steelblue;
  display: inline-block;
  padding: 1em;
  color: white;
  cursor: pointer;
  // transition: all .5s ease;
  // position: relative;
  &:hover {
    background: #2b506f;
  }
}
</style>
