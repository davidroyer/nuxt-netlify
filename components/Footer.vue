<template>
<footer class="footer">
  <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
  <div class="flexWrapper">
    <div class="flexColumn">
      <h3 class="flexColumn__heading">Call Us</h3>
      <a href="tel:502-440-2237">502-440-2237</a>
    </div>
    <div class="flexColumn">
      <h3 class="flexColumn__heading">Email Us</h3>
      <a href="mailto:info@Got2DanceLouisville.com ">info@Got2DanceLouisville.com</a>
    </div>
    <div class="flexColumn">
      <h3 class="flexColumn__heading">Follow Us</h3>
      <a href="#">Facebook</a>
    </div>
  </div>
</footer>
</template>

<script>

</script>

<style lang="scss">
.footer {
    background: #40526b;
    .logo {
        margin-bottom: 1em;
    }

    .flexWrapper {
        display: flex;
        justify-content: center;

        .flexColumn {
            color: white;
            margin: 1em;
            flex: 30%;
        }
    }

    a {
        color: #01D4A7;
    }
}
</style>
