<template>
  <div id="app">
    <div id="nav">
      <Header />
      <Navigation />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>

<style>
@import "../src/assets/bootstrap.min.css";
@import "../src/assets/business-casual.min.css";
@import "https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i";
@import "https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i";

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

#nav {
  /* padding: 30px; */
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #e6a756 !important;
}
</style>
