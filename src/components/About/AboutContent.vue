<template>
  <section class="page-section about-heading">
    <div class="container">
      <img
        src="@/img/about.jpg"
        alt=""
        class="img-fluid rounded about-heading-img mb-3 mb-lg-0"
      />
      <div class="about-heading-content">
        <div class="row">
          <div class="col-xl-9 col-lg-10 mx-auto">
            <div class="bg-faded rounded p-5">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">{{
                  sectionHeadingUpper
                }}</span>
                <span class="section-heading-lower">{{
                  sectionHeadingLower
                }}</span>
              </h2>
              <p>
                {{ p1 }}
              </p>
              <p class="mb-0">
                {{ p2a }} <em>{{ lust }}</em> {{ p2b }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      sectionHeadingUpper: "strong coffee, strong roots",
      sectionHeadingLower: "about our cafe",
      p1:
        "Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to travelling the world, finding the best coffee, and bringing back to you here in our cafe.",
      p2a: "We guarantee that you will fall in",
      lust: "lust",
      p2b:
        "with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.",
    };
  },
};
</script>
