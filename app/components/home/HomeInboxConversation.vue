<script setup lang="ts">
import { Bot, Check } from "lucide-vue-next";
import joe from "@/assets/images/specific-needs/customer-joe.jpg";
import recoverPassword from "@/assets/images/get-to-know/recover-password.png";

const conversation = useTemplateRef<HTMLDivElement>("conversation");
const isVisible = useElementVisibility(conversation);
const documentVisibility = useDocumentVisibility();
const reducedMotion = usePreferredReducedMotion();

const elapsed = ref(0);
const messageTimes = [0, 1200, 1800, 2800, 3800];
const cycleDuration = 7000;

const visibleMessages = computed(() => reducedMotion.value === "reduce"
  ? messageTimes.length
  : messageTimes.filter(time => elapsed.value >= time).length);

useRafFn(({ delta }) => {
  if (!isVisible.value || documentVisibility.value !== "visible" || reducedMotion.value === "reduce") return;

  elapsed.value = (elapsed.value + Math.min(delta, 100)) % cycleDuration;
});
</script>

<template>
  <div
    ref="conversation"
    role="img"
    aria-label="Joe asks to reset his password. An automated assistant replies with a password recovery article, Joe says thank you, and the assistant asks him to rate the support."
    class="@container relative isolate aspect-4/5 w-full max-w-148 overflow-hidden rounded-2xl bg-linear-to-b from-surface-blue to-primary/10"
  >
    <div
      aria-hidden="true"
      class="conversation-content absolute inset-0 mask-b-from-85% mask-b-to-100% p-12"
    >
      <div
        class="conversation-message"
        :class="{ 'conversation-message-visible': visibleMessages >= 1 }"
      >
        <div class="flex items-start gap-3">
          <img
            :src="joe"
            alt=""
            width="480"
            height="480"
            loading="lazy"
            class="size-10 shrink-0 rounded-full object-cover"
          >
          <span class="pt-1 font-medium text-muted-foreground/50">Joe</span>
        </div>
        <p class="conversation-bubble -mt-1 ml-13 w-4/5 max-w-88 rounded-lg bg-background p-4">
          Hello, I lost my password.
        </p>
      </div>

      <p
        class="conversation-message conversation-bubble mt-4 mr-13 ml-auto max-w-88 rounded-lg bg-primary p-3.5 text-primary-foreground"
        :class="{ 'conversation-message-visible': visibleMessages >= 2 }"
      >
        Hello Joe, here is an article on how to reset your password.
      </p>

      <div
        class="conversation-message mt-1.5"
        :class="{ 'conversation-message-visible': visibleMessages >= 3 }"
      >
        <div class="conversation-bubble mr-13 ml-auto max-w-88 rounded-lg bg-primary p-3.5 text-primary-foreground">
          <p class="wrap-anywhere underline underline-offset-2">
            https://help.acme.com/how-to-reset-password
          </p>
          <img
            :src="recoverPassword"
            alt=""
            width="316"
            height="115"
            loading="lazy"
            class="mt-1.5 h-auto w-full rounded-sm"
          >
        </div>
        <div class="-mt-3 flex items-end justify-end gap-3">
          <span class="flex items-center gap-1 pb-1 text-muted-foreground">
            <Check class="size-4" />
            Delivered
          </span>
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Bot class="size-6" />
          </span>
        </div>
      </div>

      <div
        class="conversation-message mt-4"
        :class="{ 'conversation-message-visible': visibleMessages >= 4 }"
      >
        <div class="flex items-start gap-3">
          <img
            :src="joe"
            alt=""
            width="480"
            height="480"
            loading="lazy"
            class="size-10 shrink-0 rounded-full object-cover"
          >
          <span class="pt-1 font-medium text-muted-foreground/50">Joe</span>
        </div>
        <p class="conversation-bubble -mt-1 ml-13 w-fit rounded-lg bg-background p-4">
          Thank you !
        </p>
      </div>

      <p
        class="conversation-message conversation-bubble mt-4 mr-13 ml-auto max-w-71 rounded-lg bg-primary p-3.5 text-primary-foreground"
        :class="{ 'conversation-message-visible': visibleMessages >= 5 }"
      >
        Thanks for chatting with us. Would you mind rating our support?
      </p>
    </div>
  </div>
</template>

<style scoped>
.conversation-content {
  /* Scale the conversation together so every message fits on smaller cards. */
  --spacing: calc(100cqw / 148);
  font-size: 3cqw;
  line-height: 1.55;
}

.conversation-content span:has(> svg) {
  font-size: 0.75em;
}

.conversation-message {
  opacity: 0;
  transform: translateY(0.75rem);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.conversation-message-visible {
  opacity: 1;
  transform: translateY(0);
}

.conversation-bubble {
  box-shadow: 0 2rem 3rem -1rem color-mix(in srgb, var(--color-primary) 20%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .conversation-message {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
