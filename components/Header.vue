<template>
<header>
  <h1>David K. Royer - Front End Web Developer</h1>
  <nav>
    <li v-for="(link, key) in links">
      <nuxt-link exact :to="link.href">{{link.title}}</nuxt-link>
    </li>
  </nav>
</header>
</template>

<script>
export default {
  data() {
    return {
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      }, {
        href: '/contact',
        title: 'Contact'
      }]
    }
  }
}
</script>

<style lang="scss">
header {
    // background: #009688;
    background: #35495e;
    text-align: center;
    padding: 1em;
}
h1 {
    color: white;
    margin: 0;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-weight: 400;
}
nav {
    display: flex;
    justify-content: center;

    li {
        list-style-type: none;
        margin: 1em;

        a {
            color: #d7d7d7;
            font-weight: 400;
            font-size: 1.15em;

            &.nuxt-link-active {
                color: #41B883;
            }
        }
    }
}
</style>
