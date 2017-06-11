<template>
  <section class="container">
    <p><nuxt-link to="/">List of posts</nuxt-link></p>
    <h1 class="title">{{title}}</h1>
    <div class="content">{{body}}</div>
    <!-- <div @click="runTransition($event)" class="test">Color Here</div> -->
  </section>
</template>

<script>
import axios from 'axios'
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ params, error }) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${+params.id}`)
    .then((res) => res.data)
    .catch(() => {
      error({ message: 'Post not found', statusCode: 404 })
    })
  }
}

</script>
<style scoped lang='scss'>
.title
{
  margin: 50px 0;
}
h1 {
  // color: gray;
}
.test {
  background: steelblue;
  display: inline-block;
  padding: 1em;
  // color: white;
  cursor: pointer;
  // transition: all .5s ease;
  // position: relative;
  &:hover {
    background: #2b506f;
  }
}
</style>
