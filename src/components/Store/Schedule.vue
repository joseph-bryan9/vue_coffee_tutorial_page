<template>
  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
            <h2 class="section-heading mb-5">
              <span class="section-heading-upper">{{
                sectionHeadingUpper
              }}</span>
              <span class="section-heading-lower">{{
                sectionHeadingLower
              }}</span>
            </h2>
            <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
              <li
                class="list-unstyled-item list-hours-item d-flex text-capitalize"
                v-for="schedule in schedules"
                :key="schedule"
              >
                {{ schedule.day }}
                <span class="ml-auto">{{ schedule.time }}</span>
              </li>
            </ul>
            <p class="address mb-5 text-capitalize">
              <em>
                <strong>{{ address1 }}</strong>
                <br />
                {{ address2 }}
              </em>
            </p>
            <p class="mb-0 text-capitalize">
              <small>
                <em>{{ callUs }}</em>
              </small>
              <br />
              {{ landLine }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Schedule",
  data() {
    return {
      sectionHeadingUpper: "come on in",
      sectionHeadingLower: "we're open",
      schedules: [
        { day: "sunday", time: "closed" },
        { day: "monday", time: "7:00 AM to 8:00 PM" },
        { day: "tuesday", time: "7:00 AM to 8:00 PM" },
        { day: "wednesday", time: "7:00 AM to 8:00 PM" },
        { day: "thursday", time: "7:00 AM to 8:00 PM" },
        { day: "friday", time: "7:00 AM to 8:00 PM" },
        { day: "saturday", time: "9:00 AM to 5:00 PM" },
      ],
      address1: "1116 orchard street",
      address2: "golden valley, minnesota",
      callUs: "call anytime",
      landLine: "(317) 585-8468",
    };
  },
  // methods: {
  //   active() {
  //     const dateToday = new Date();
  //     const isActive = dateToday.getDay();
  //     new Date().getDay();
  //   },
  // },
};
</script>
