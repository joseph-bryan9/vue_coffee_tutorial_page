<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a
        class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
        href="#"
        >Start Bootstrap</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li
            class="nav-item px-lg-4 "
            v-for="route in routes"
            :key="route.path"
          >
            <router-link
              class="nav-link text-uppercase text-expanded"
              :to="route.path"
              exact
            >
              {{ route.name }}
              <!-- <span class="sr-only">(current)</span> -->
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>
