<template>
  <!-- First Showcase (Home) -->
  <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="@/img/intro.jpg" alt />
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">{{ sectionHeadingUpper }}</span>
            <span class="section-heading-lower">{{ sectionHeadingLower }}</span>
          </h2>
          <p class="mb-3">{{ p }}</p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="#">{{ visitToday }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Showcase",
  data() {
    return {
      sectionHeadingUpper: "free coffee",
      sectionHeadingLower: "worth drinking",
      p:
        "Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!",
      visitToday: "visit us today!",
    };
  },
};
</script>
