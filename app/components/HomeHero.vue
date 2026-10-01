<script setup lang="ts">
import heroBackground from "@/assets/images/hero-bg.png";
import heroComposition from "@/assets/images/hero-featured-composition.png";
import heroInterface from "@/assets/images/hero-ui-elements.svg";
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="relative isolate overflow-hidden bg-background pt-30 pb-12 lg:pt-[138px] lg:pb-20"
  >
    <img
      :src="heroBackground"
      alt=""
      aria-hidden="true"
      width="1440"
      height="899"
      fetchpriority="high"
      class="pointer-events-none absolute top-0 left-1/2 -z-10 w-full max-w-none min-w-[1440px] -translate-x-1/2"
    >

    <div class="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <h1
        id="hero-title"
        class="bg-linear-to-b from-[#325a70] to-[#203b50] bg-clip-text text-title text-transparent md:text-display lg:text-[60px] lg:leading-[1.1] lg:tracking-[-0.015em]"
      >
        A shared inbox to bring seamless collaboration in one place
      </h1>
      <p class="mx-auto mt-6 max-w-[800px] text-lg font-medium text-secondary-foreground md:text-lead">
        Collaborate effortlessly inside one shared inbox, centralize conversations from multiple
        channels, and improve first response times thanks to dedicated features.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-2.5 lg:mt-9.5">
        <UiButton
          as-child
          size="lg"
        >
          <a href="https://crisp.chat/en/shared-inbox/">Take a tour</a>
        </UiButton>
        <UiButton
          as-child
          variant="secondary"
          size="lg"
        >
          <a href="https://app.crisp.chat/initiate/signup/">Get started</a>
        </UiButton>
      </div>
      <p class="mt-2 text-sm text-secondary-foreground">
        14 days free trial — no commitment
      </p>
    </div>

    <!-- Keep both illustration layers on the same canvas as they scale. -->
    <div
      aria-hidden="true"
      class="pointer-events-none relative left-1/2 mt-1 aspect-[1243/647] w-[calc(100%-3rem)] max-w-[1243px] min-w-[640px] -translate-x-1/2 md:min-w-0 lg:left-[calc(50%+22px)]"
    >
      <img
        :src="heroInterface"
        alt=""
        width="923"
        height="393"
        class="absolute top-0 left-1/2 w-[74.26%] -translate-x-1/2"
      >
      <img
        :src="heroComposition"
        alt=""
        width="1243"
        height="459"
        class="absolute inset-x-0 bottom-0 w-full"
      >
    </div>
  </section>
</template>
