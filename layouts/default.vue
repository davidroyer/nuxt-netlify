<template>
  <div>
    <!-- <template v-for="post in posts">
      <div class="post">
        <p>{{post.title}}</p>
      </div>
    </template> -->
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>

import AppHeader from '~components/Header.vue'
import AppFooter from '~components/Footer.vue'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.posts = res.data
      })
    }
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  /*text-align: center;*/
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
