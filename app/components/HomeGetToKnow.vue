<script setup lang="ts">
import { Archive, Clock3, Gauge, UserRound } from "lucide-vue-next";
import inboxDiscussion from "@/assets/images/inbox-discussion.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    value: "productivity",
    title: "More productivity",
    description: "All your channels and inbound messages in one unified inbox.",
    icon: Gauge,
  },
  {
    value: "customization",
    title: "More customization",
    description: "Adapt your shared inbox to the way your team works.",
    icon: Archive,
  },
  {
    value: "personalization",
    title: "More personalization",
    description: "Keep the context you need for every customer conversation.",
    icon: UserRound,
  },
  {
    value: "time",
    title: "More time",
    description: "Automate repetitive tasks so your team can spend more time helping customers.",
    icon: Clock3,
  },
];
</script>

<template>
  <section
    aria-labelledby="get-to-know-title"
    class="bg-background py-16 lg:pt-24 lg:pb-28"
  >
    <div class="mx-auto grid max-w-320 gap-12 px-6 md:grid-cols-2 md:gap-16 lg:flex lg:justify-between lg:px-8">
      <div class="lg:w-114 lg:shrink-0 lg:pt-6">
        <h2
          id="get-to-know-title"
          class="mb-10 text-title lg:mb-12 lg:text-5xl/14"
        >
          Let's get to know<br>each other
        </h2>

        <Accordion
          type="single"
          default-value="productivity"
          class="space-y-2"
        >
          <AccordionItem
            v-for="feature in features"
            :key="feature.value"
            :value="feature.value"
            variant="feature"
            class="group"
          >
            <AccordionTrigger class="gap-0 py-6 text-lg data-[state=open]:pb-2 lg:text-xl">
              <span class="flex items-center gap-4">
                <span class="flex size-7 shrink-0 items-center justify-center rounded-sm bg-linear-to-b from-background to-border text-muted-foreground group-data-[state=open]:from-background group-data-[state=open]:to-primary/15 group-data-[state=open]:text-primary">
                  <component
                    :is="feature.icon"
                    aria-hidden="true"
                    class="size-5 stroke-1"
                  />
                </span>
                {{ feature.title }}
              </span>
              <template #icon>
                <span aria-hidden="true" />
              </template>
            </AccordionTrigger>
            <AccordionContent class="pb-6 pl-11 text-base/7 lg:text-lg/7">
              <p>{{ feature.description }}</p>
              <div
                aria-hidden="true"
                class="mt-4 h-0.75 overflow-hidden rounded-full bg-border"
              >
                <div class="h-full w-3/4 bg-primary" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <img
        :src="inboxDiscussion"
        alt="A shared inbox conversation where a customer receives a password recovery article and a follow-up support rating request."
        width="592"
        height="730"
        loading="lazy"
        class="mx-auto h-auto w-full max-w-148 self-start lg:mx-0 lg:w-148"
      >
    </div>
  </section>
</template>
