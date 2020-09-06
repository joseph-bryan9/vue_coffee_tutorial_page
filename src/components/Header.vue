<template>
  <h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-upper text-primary mb-3">{{ headerTitleSecondary }}</span>
    <span class="site-heading-lower">{{ headerTitlePrimary }}</span>
  </h1>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerTitleSecondary: "a free bootstrap business theme",
      headerTitlePrimary: "business casual",
    };
  },
};
</script>
