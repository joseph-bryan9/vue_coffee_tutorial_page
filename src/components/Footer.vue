<template>
  <footer class="footer text-faded text-center py-5">
    <div class="container">
      <p class="m-0 small">{{ copyright }}&copy;{{ p }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      copyright: "Copyright ",
      p: " Your Website 2020",
    };
  },
};
</script>
