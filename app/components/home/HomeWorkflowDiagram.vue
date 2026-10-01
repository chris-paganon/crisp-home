<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const id = useId();
const diagram = useTemplateRef<SVGSVGElement>("diagram");
const motionReady = ref(false);
const isPlaying = ref(false);
const branches = [
  { id: "tech", x: 0, team: "tech" },
  { id: "sales", x: 311, team: "sales" },
];

const { isSupported } = useIntersectionObserver(diagram, ([entry]) => {
  if (entry?.isIntersecting && entry.intersectionRatio >= 0.2) {
    isPlaying.value = true;
  }
  else if (!entry?.isIntersecting) {
    isPlaying.value = false;
  }
}, { threshold: [0, 0.2] });

// Keep the complete diagram visible during SSR and without observer support.
onMounted(() => {
  motionReady.value = isSupported.value;
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
    :class="{ 'motion-ready': motionReady, 'is-playing': isPlaying }"
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
  .workflow-greeting { --delay: 0.1s; }
  .workflow-branches { --delay: 0.85s; }
  .workflow-actions { --delay: 1.55s; }
  .workflow-reply-lines { --delay: 2.25s; }
  .workflow-replies { --delay: 2.85s; }

  .motion-ready .workflow-node,
  .motion-ready .workflow-connectors {
    opacity: 0;
  }

  .workflow-node,
  .workflow-choice {
    transform-box: fill-box;
    transform-origin: center;
  }

  .motion-ready.is-playing .workflow-node {
    animation: workflow-pop 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) var(--delay) both;
  }

  .motion-ready.is-playing .workflow-connectors {
    animation: workflow-appear 0.1s linear var(--delay) both;
  }

  .motion-ready.is-playing .workflow-line {
    stroke-dasharray: 1;
    animation: workflow-draw 0.65s ease-in-out var(--delay) both;
  }

  .motion-ready.is-playing .workflow-arrow {
    animation: workflow-appear 0.15s ease-out calc(var(--delay) + 0.6s) both;
  }

  .motion-ready.is-playing .workflow-choice {
    animation: workflow-tap 0.45s ease-in-out 0.65s both;
  }

  .motion-ready.is-playing .workflow-choice + .workflow-choice {
    animation-delay: 0.85s;
  }
}

@keyframes workflow-pop {
  0% {
    opacity: 0;
    transform: translateY(-1rem) scale(0.9);
  }
  65% {
    opacity: 1;
    transform: translateY(0) scale(1.035);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes workflow-appear {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes workflow-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

@keyframes workflow-tap {
  50% { transform: scale(0.94); }
}
</style>
