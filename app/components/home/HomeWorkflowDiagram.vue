<script setup lang="ts">
const id = useId();
const diagram = useTemplateRef<SVGSVGElement>("diagram");
const motionReady = ref(false);
const isVisible = useElementVisibility(diagram);
const documentVisibility = useDocumentVisibility();
const reducedMotion = usePreferredReducedMotion();

const cycleDuration = 4500;
const elapsed = ref(0);
const branches = [
  { id: "tech", x: 0, team: "tech" },
  { id: "sales", x: 311, team: "sales" },
];

// Advance only while visible, preserving the current point when scrolled away.
useRafFn(({ delta }) => {
  if (!isVisible.value || documentVisibility.value !== "visible" || reducedMotion.value === "reduce") return;

  elapsed.value = (elapsed.value + Math.min(delta, 100)) % cycleDuration;
});

// Keep the complete diagram visible during SSR and without observer support.
onMounted(() => {
  motionReady.value = typeof IntersectionObserver !== "undefined";
});
</script>

<template>
  <!-- The viewBox preserves the original illustration's geometry at every size. -->
  <svg
    ref="diagram"
    role="img"
    :aria-labelledby="`${id}-title ${id}-description`"
    viewBox="0 0 746 510"
    class="mx-auto h-auto w-full max-w-188 font-sans"
    :class="{ 'motion-ready': motionReady }"
    :style="{ '--workflow-time': elapsed, '--workflow-cycle': cycleDuration }"
  >
    <title :id="`${id}-title`">An automated bot workflow</title>
    <desc :id="`${id}-description`">
      The bot asks who you want to speak to, offers Tech and Sales, branches into
      two Button/Input Action steps labeled Button: Sales, then replies that
      someone from the relevant team will be back to you.
    </desc>
    <defs>
      <filter
        :id="`${id}-message-glow`"
        x="-50%"
        y="-100%"
        width="200%"
        height="300%"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur stdDeviation="28" />
      </filter>
      <filter
        :id="`${id}-action-glow`"
        x="-75%"
        y="-150%"
        width="250%"
        height="400%"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur stdDeviation="24" />
      </filter>
    </defs>

    <g class="workflow-node workflow-greeting">
      <rect
        x="240"
        y="54"
        width="266"
        height="110"
        rx="16"
        class="fill-primary opacity-60"
        :filter="`url(#${id}-message-glow)`"
      />
      <rect
        x="240"
        y="54"
        width="266"
        height="110"
        rx="16"
        class="fill-primary"
      />
      <text
        x="257"
        y="82"
        font-size="13"
        class="fill-primary-foreground"
      >
        <tspan x="257">Hello and thank you for contacting us!</tspan>
        <tspan
          x="257"
          dy="18"
        >Who do you want to speak to ?</tspan>
      </text>
      <g class="workflow-choice">
        <rect
          x="257"
          y="116"
          width="113"
          height="34"
          rx="4"
          class="fill-muted"
        />
        <text
          x="313.5"
          y="138"
          text-anchor="middle"
          font-size="12"
          class="fill-foreground"
        >Tech</text>
      </g>
      <g class="workflow-choice">
        <rect
          x="376"
          y="116"
          width="113"
          height="34"
          rx="4"
          class="fill-muted"
        />
        <text
          x="432.5"
          y="138"
          text-anchor="middle"
          font-size="12"
          class="fill-foreground"
        >Sales</text>
      </g>
    </g>

    <g class="workflow-connectors workflow-branches">
      <path
        v-for="branch in branches"
        :key="branch.id"
        :d="`M373 164V181Q373 194 ${branch.x === 0 ? 360 : 386} 194H${217 + branch.x + (branch.x === 0 ? 13 : -13)}Q${217 + branch.x} 194 ${217 + branch.x} 207V222`"
        pathLength="1"
        fill="none"
        stroke-width="2.5"
        class="workflow-line stroke-muted-foreground/50"
      />
      <path
        d="M212 217L217 224L222 217M523 217L528 224L533 217"
        class="workflow-arrow fill-muted-foreground/50"
      />
      <circle
        cx="373"
        cy="164"
        r="4"
        class="fill-primary-foreground"
      />
    </g>

    <g class="workflow-node workflow-actions">
      <g
        v-for="branch in branches"
        :key="branch.id"
        :transform="`translate(${branch.x} 0)`"
      >
        <rect
          x="124"
          y="229"
          width="179"
          height="56"
          rx="14"
          class="fill-secondary-foreground opacity-60"
          :filter="`url(#${id}-action-glow)`"
        />
        <rect
          x="124"
          y="229"
          width="179"
          height="56"
          rx="14"
          class="fill-secondary-foreground"
        />
        <path
          d="M168 241V273"
          stroke-width="1"
          class="stroke-muted/30"
        />
        <path
          d="M143 253H153V262H143ZM143 255H153M145 251V254M151 251V254"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-muted"
        />
        <text
          x="236"
          y="253"
          text-anchor="middle"
          font-size="12"
          class="fill-muted"
        >
          <tspan x="236">Button/Input Action</tspan>
          <tspan
            x="236"
            dy="18"
          >Button: Sales</tspan>
        </text>
        <circle
          cx="217"
          cy="229"
          r="4"
          class="fill-primary-foreground"
        />
      </g>
    </g>

    <g class="workflow-connectors workflow-reply-lines">
      <g
        v-for="branch in branches"
        :key="branch.id"
        :transform="`translate(${branch.x} 0)`"
      >
        <path
          d="M217 285V338"
          pathLength="1"
          fill="none"
          stroke-width="2.5"
          class="workflow-line stroke-muted-foreground/50"
        />
        <path
          d="M212 333L217 341L222 333"
          class="workflow-arrow fill-muted-foreground/50"
        />
        <circle
          cx="217"
          cy="285"
          r="4"
          class="fill-primary-foreground"
        />
      </g>
    </g>

    <g class="workflow-node workflow-replies">
      <g
        v-for="branch in branches"
        :key="branch.id"
        :transform="`translate(${branch.x} 0)`"
      >
        <rect
          x="78"
          y="345"
          width="279"
          height="64"
          rx="16"
          class="fill-primary opacity-60"
          :filter="`url(#${id}-message-glow)`"
        />
        <rect
          x="78"
          y="345"
          width="279"
          height="64"
          rx="16"
          class="fill-primary"
        />
        <text
          x="94"
          y="373"
          font-size="13"
          class="fill-primary-foreground"
        >
          <tspan x="94">Ok, sure. Someone from our {{ branch.team }} team{{ branch.id === 'tech' ? ' will' : '' }}</tspan>
          <tspan
            x="94"
            dy="18"
          >{{ branch.id === 'sales' ? 'will ' : '' }}be back to you.</tspan>
        </text>
        <circle
          cx="217"
          cy="345"
          r="4"
          class="fill-primary-foreground"
        />
      </g>
    </g>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .workflow-greeting { --start: 0; }
  .workflow-branches { --start: 350; --draw-duration: 550; }
  .workflow-actions { --start: 950; }
  .workflow-reply-lines { --start: 1250; --draw-duration: 500; }
  .workflow-replies { --start: 1800; }

  .motion-ready .workflow-node,
  .motion-ready .workflow-connectors {
    /* Fade in place, hold the complete workflow, then fade out together. */
    opacity: min(
      clamp(0, calc((var(--workflow-time) - var(--start)) / 250), 1),
      clamp(0, calc((var(--workflow-cycle) - var(--workflow-time)) / 300), 1)
    );
  }

  .motion-ready .workflow-line {
    stroke-dasharray: 1;
    stroke-dashoffset: calc(1 - clamp(0, calc((var(--workflow-time) - var(--start)) / var(--draw-duration)), 1));
  }

  .motion-ready .workflow-arrow {
    opacity: clamp(0, calc((var(--workflow-time) - var(--start) - var(--draw-duration) + 100) / 100), 1);
  }
}
</style>
