<script setup lang="ts">
import logoSquare from "@/assets/images/logo-square.png";
</script>

<template>
  <header class="sticky top-0 z-40 border-b bg-background">
    <nav class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 font-semibold text-foreground"
        aria-label="Dockiy home"
      >
        <img
          :src="logoSquare"
          alt="logo square"
          class="size-9 rounded-md"
        >
        <span class="text-base">Nuxt + DockIY</span>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <UiButton
          as-child
          variant="ghost"
        >
          <a href="https://dockiy.com/guide/">
            Docs
          </a>
        </UiButton>
        <UiButton as-child>
          <a
            href="https://codeberg.org/chris-paganon/dockiy-nuxt"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </UiButton>
      </div>
    </nav>
  </header>
</template>
