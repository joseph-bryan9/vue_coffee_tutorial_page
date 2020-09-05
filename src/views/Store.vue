<template>
  <div class="store">
    <Schedule />
    <About />
  </div>
</template>

<script>
import Schedule from "../components/Store/Schedule";
import About from "../components/About/AboutContent";

export default {
  name: "Store",
  components: {
    Schedule,
    About,
  },
};
</script>
