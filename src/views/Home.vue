<template>
  <div class="home">
    <Showcase />
    <ShowcaseTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "../components/Home/Showcase";
import ShowcaseTwo from "../components/Home/ShowcaseTwo";

export default {
  name: "Home",
  components: {
    Showcase,
    ShowcaseTwo,
  },
};
</script>
