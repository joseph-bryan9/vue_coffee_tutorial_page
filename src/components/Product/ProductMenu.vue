<template>
  <section class="page-section">
    <div class="container">
      <div class="product-item" v-for="menu in menus" :key="menu">
        <div class="product-item-title d-flex">
          <div class="bg-faded p-5 d-flex ml-auto rounded">
            <h2 class="section-heading mb-0">
              <span class="section-heading-upper">{{
                menu.sectionHeadingUpper
              }}</span>
              <span class="section-heading-lower">{{
                menu.sectionHeadingLower
              }}</span>
            </h2>
          </div>
        </div>
        <img
          class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
          src="@/img/products-01.jpg"
          alt=""
        />
        <div class="product-item-description d-flex mr-auto">
          <div class="bg-faded p-5 rounded">
            <p class="mb-0">
              {{ menu.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductMenu",
  data() {
    return {
      menus: [
        {
          sectionHeadingUpper: "blended to perfection",
          sectionHeadingLower: "coffees & teas",
          url: "@/img/products-01.jpg",
          description:
            "We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.",
        },
        {
          sectionHeadingUpper: "delicious treats, good eats",
          sectionHeadingLower: "bakery & kitchen",
          url: "@/img/products-02.jpg",
          description:
            "Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.",
        },
        {
          sectionHeadingUpper: "from around the world",
          sectionHeadingLower: "bulk specialty blends",
          url: "@/img/products-03.jpg",
          description:
            "Travelling the world for the very best quality coffee is something take pride in. When you visit us, you'll always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in smaller to large bulk quantities. Please visit us in person for more details.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-item {
  margin: 5rem 0;
}
</style>
