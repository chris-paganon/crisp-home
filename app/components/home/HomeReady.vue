<script setup lang="ts">
import barista from "@/assets/images/ready/barista.png";
import relationshipBadge from "@/assets/images/ready/g2-badge-2022.png";
import usersBadge from "@/assets/images/ready/g2-badge-users-love.png";
import customer from "@/assets/images/ready/man-standing-with-phone.png";
import confetti from "@/assets/images/ready/ready-confetti.png";
import background from "@/assets/images/ready/ready-cta-bg.jpg";
</script>

<template>
  <section
    aria-labelledby="ready-title"
    class="px-6 pb-24 lg:px-8 lg:pb-40"
  >
    <div class="relative mx-auto max-w-7xl">
      <div class="dark relative isolate overflow-hidden rounded-2xl bg-background text-foreground sm:rounded-3xl">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 -z-10"
        >
          <img
            :src="background"
            alt=""
            loading="lazy"
            class="absolute inset-y-0 right-0 size-full object-cover md:w-2/3"
          >
          <div class="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/60" />
        </div>

        <div class="relative z-10 px-6 py-12 sm:px-12 lg:px-16 lg:py-18">
          <div class="flex items-start gap-6">
            <img
              :src="relationshipBadge"
              alt="G2 Best Relationship, Winter 2022"
              width="116"
              height="150"
              loading="lazy"
              class="w-14"
            >
            <img
              v-for="badge in 2"
              :key="badge"
              :src="usersBadge"
              alt="G2 Users Love Us"
              width="116"
              height="150"
              loading="lazy"
              class="w-14"
            >
          </div>
          <h2
            id="ready-title"
            class="mt-8 max-w-120 text-title md:max-w-2/5 md:text-subtitle lg:max-w-120 lg:text-5xl/14"
          >
            Ready to improve your customer experience?
          </h2>
          <div class="mt-10 flex flex-wrap gap-3">
            <UiButton as-child>
              <a href="https://app.crisp.chat/initiate/signup/">Get started</a>
            </UiButton>
            <UiButton
              as-child
              variant="secondary"
            >
              <a href="https://crisp.chat/en/demo/">Request a demo</a>
            </UiButton>
          </div>
        </div>

        <img
          :src="barista"
          alt=""
          aria-hidden="true"
          width="573"
          height="379"
          loading="lazy"
          class="pointer-events-none relative ml-auto w-4/5 md:absolute md:right-1/8 md:bottom-0 md:w-9/20"
        >
      </div>

      <img
        :src="confetti"
        alt=""
        aria-hidden="true"
        width="481"
        height="122"
        loading="lazy"
        class="pointer-events-none absolute -top-16 right-1/8 w-2/5"
      >
      <img
        :src="customer"
        alt=""
        aria-hidden="true"
        width="168"
        height="462"
        loading="lazy"
        class="pointer-events-none absolute right-4 -bottom-12 w-1/4 md:right-10 md:-bottom-24 md:w-1/8"
      >
    </div>
  </section>
</template>
