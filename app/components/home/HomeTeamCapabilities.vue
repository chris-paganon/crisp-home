<script setup lang="ts">
import { ChevronRight, UsersRound } from "lucide-vue-next";
import reminders from "@/assets/images/team-capabilities/reminders.png";
import routing from "@/assets/images/team-capabilities/routing.png";
import voiceNote from "@/assets/images/team-capabilities/voice-note.png";
import voiceNoteBackground from "@/assets/images/team-capabilities/voice-note-bg.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    id: "reminders",
    title: "Reminders",
    description: "Never miss a follow-up with your leads or customers.",
    href: "https://help.crisp.chat/en/article/how-do-reminders-work-q9ljb8/",
  },
  {
    id: "voice-note",
    title: "Voice note",
    description: "Lorem ipsum dolor sit amet consectetur. Ac lectus magna erat viverra id a pellentesque.",
    href: "https://crisp.chat/en/shared-inbox/",
  },
];
</script>

<template>
  <section
    aria-labelledby="team-capabilities-title"
    class="bg-background px-6 pt-12 pb-16 lg:px-8 lg:pt-32 lg:pb-28"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center lg:mb-20">
        <Badge variant="outline">
          <UsersRound
            aria-hidden="true"
            class="size-5!"
          />
          Collaborate
        </Badge>
        <h2
          id="team-capabilities-title"
          class="mx-auto mt-6 max-w-200 text-subtitle sm:text-title lg:text-5xl/14"
        >
          Take your team’s capabilities to<br class="hidden sm:block">
          the next level
        </h2>
      </div>

      <div class="mx-auto grid max-w-300 gap-6 lg:grid-cols-3 lg:gap-8">
        <Card
          v-for="feature in features"
          :key="feature.id"
          class="gap-0 overflow-hidden py-0 sm:grid sm:grid-cols-2 sm:items-center lg:col-span-2 lg:min-h-64"
        >
          <div class="space-y-7 py-10">
            <CardHeader class="gap-2">
              <CardTitle>{{ feature.title }}</CardTitle>
              <CardDescription>{{ feature.description }}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                as-child
                variant="link"
              >
                <a
                  :href="feature.href"
                  :aria-label="`Learn more about ${feature.title.toLowerCase()}`"
                >
                  Learn more
                  <ChevronRight aria-hidden="true" />
                </a>
              </Button>
            </CardFooter>
          </div>

          <img
            v-if="feature.id === 'reminders'"
            :src="reminders"
            alt="A private follow-up note with a reminder scheduled for tomorrow at the same time."
            width="384"
            height="253"
            loading="lazy"
            class="mx-auto h-auto w-full max-w-96 self-end"
          >
          <div
            v-else
            class="relative mx-auto flex h-64 w-full max-w-96 items-center"
          >
            <img
              :src="voiceNoteBackground"
              alt=""
              aria-hidden="true"
              width="383"
              height="168"
              loading="lazy"
              class="pointer-events-none absolute inset-x-0 h-auto w-full"
            >
            <img
              :src="voiceNote"
              alt="Joe’s voice note with an audio player showing eleven seconds."
              width="325"
              height="80"
              loading="lazy"
              class="relative h-auto w-5/6"
            >
          </div>
        </Card>

        <Card class="gap-0 overflow-hidden lg:col-start-3 lg:row-span-2 lg:row-start-1">
          <img
            :src="routing"
            alt="A customer’s delivery question routed to the right team among Sales, Accounting, and Support."
            width="350"
            height="303"
            loading="lazy"
            class="mx-auto h-auto w-full max-w-87.5 px-4 lg:px-3"
          >
          <CardHeader class="mt-10 gap-2 lg:mt-auto lg:pt-10">
            <CardTitle>Auto-assign</CardTitle>
            <CardDescription>
              Build routing rules that will fasten conversations’ assignment.
            </CardDescription>
          </CardHeader>
          <CardFooter class="mt-7">
            <Button
              as-child
              variant="link"
            >
              <a
                href="https://crisp.chat/en/shared-inbox/"
                aria-label="Learn more about auto-assign"
              >
                Learn more
                <ChevronRight aria-hidden="true" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
