<script setup lang="ts">
import { ArrowRight, Bell, Layers, Sparkles, UsersRound } from "lucide-vue-next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

definePageMeta({ layout: false });
useSeoMeta({ title: "Crisp design system", robots: "noindex, nofollow" });

const language = ref("en");
const languageLabels: Record<string, string> = {
  en: "English (United States)",
  fr: "Français",
  es: "Español",
};
const features = [
  { value: "productivity", title: "More productivity", description: "All your channels and inbound messages in one unified inbox.", icon: Layers },
  { value: "customization", title: "More customization", description: "Adapt your shared inbox to the way your team works.", icon: Bell },
  { value: "personalization", title: "More personalization", description: "Keep the context you need for every customer conversation.", icon: UsersRound },
];
const swatches = [
  { name: "Primary", color: "bg-primary" },
  { name: "Foreground", color: "bg-foreground" },
  { name: "Muted", color: "bg-muted" },
  { name: "Accent", color: "bg-accent" },
  { name: "Blue section", color: "bg-surface-blue" },
  { name: "Green section", color: "bg-surface-green" },
  { name: "Warm section", color: "bg-surface-warm" },
];
</script>

<template>
  <main class="mx-auto max-w-6xl space-y-16 px-6 py-12 md:px-8">
    <header class="space-y-4">
      <Badge variant="outline">
        <Layers /> Crisp
      </Badge>
      <h1 class="text-title">
        Homepage design system
      </h1>
      <p class="max-w-2xl text-lead text-muted-foreground">
        Local fonts, semantic colors, and reusable shadcn components for the homepage.
      </p>
    </header>

    <section
      aria-label="Typography"
      class="space-y-6"
    >
      <h2 class="text-subtitle">
        Typography
      </h2>
      <p class="font-heading text-title md:text-display">
        A shared inbox, in one place
      </p>
      <p class="text-lead text-muted-foreground">
        Aeonik Pro is the default for headings, body copy, and controls.
      </p>
      <div class="grid gap-4 sm:grid-cols-3">
        <p class="font-light">
          Aeonik Pro Light, 300
        </p>
        <p>Aeonik Pro Regular, 400</p>
        <p class="font-medium">
          Aeonik Pro Medium, 500
        </p>
        <p class="font-bold">
          Aeonik Pro Bold, 700
        </p>
        <p class="font-inter font-semibold">
          Inter, 600
        </p>
        <p class="font-inter font-extrabold">
          Inter Display, 800
        </p>
        <p class="font-noto">
          Noto Sans Regular, 400
        </p>
        <p class="font-noto font-bold">
          Noto Sans Bold, 700
        </p>
      </div>
    </section>

    <section
      aria-label="Colors"
      class="space-y-6"
    >
      <h2 class="text-subtitle">
        Colors
      </h2>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        <div
          v-for="swatch in swatches"
          :key="swatch.name"
          class="space-y-2"
        >
          <div :class="['h-20 rounded-lg border', swatch.color]" />
          <p class="text-sm text-muted-foreground">
            {{ swatch.name }}
          </p>
        </div>
      </div>
    </section>

    <section
      aria-label="Buttons"
      class="space-y-6"
    >
      <h2 class="text-subtitle">
        Buttons
      </h2>
      <div class="rounded-2xl bg-primary/10 p-8">
        <div class="flex flex-wrap gap-3">
          <Button size="lg">
            Take a tour
          </Button>
          <Button
            variant="secondary"
            size="lg"
          >
            Get started
          </Button>
        </div>
        <p class="mt-3 text-sm text-secondary-foreground">
          14 days free trial, no commitment
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <Button>Get started</Button>
        <Button variant="secondary">
          Request a demo
        </Button>
        <Button variant="outline">
          Compare inboxes
        </Button>
        <Button variant="ghost">
          Log in
        </Button>
        <Button
          as-child
          variant="link"
        >
          <a href="#components">Learn more <ArrowRight /></a>
        </Button>
        <Button disabled>
          Disabled
        </Button>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <Button size="sm">
          Small action
        </Button>
        <Button
          size="icon"
          aria-label="Notifications"
        >
          <Bell />
        </Button>
        <Badge variant="outline">
          <UsersRound /> Collaborate
        </Badge>
        <Badge variant="secondary">
          <Sparkles /> New
        </Badge>
      </div>
    </section>

    <section
      id="components"
      aria-label="Cards and feature panels"
      class="grid gap-8 md:grid-cols-2"
    >
      <Card>
        <CardHeader>
          <CardTitle>Reminders</CardTitle>
          <CardDescription>Never miss a follow-up with your leads or customers.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            as-child
            variant="link"
          >
            <a href="#navigation">Learn more <ArrowRight /></a>
          </Button>
        </CardFooter>
      </Card>
      <Accordion
        type="single"
        collapsible
        default-value="productivity"
        class="space-y-2"
      >
        <AccordionItem
          v-for="feature in features"
          :key="feature.value"
          :value="feature.value"
          variant="feature"
        >
          <AccordionTrigger>
            <span class="flex items-center gap-3"><component
              :is="feature.icon"
              class="size-5"
            />{{ feature.title }}</span>
            <template #icon>
              <span aria-hidden="true" />
            </template>
          </AccordionTrigger>
          <AccordionContent class="pl-8">
            {{ feature.description }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section
      aria-label="Section backgrounds"
      class="grid gap-6 sm:grid-cols-3"
    >
      <div class="rounded-2xl bg-linear-to-b from-surface-blue to-primary/10 p-8">
        <h2 class="text-subtitle">
          Shared inbox
        </h2>
      </div>
      <div class="rounded-2xl bg-surface-green p-8">
        <h2 class="text-subtitle text-chart-3">
          All your channels
        </h2>
      </div>
      <div class="rounded-2xl bg-surface-warm p-8">
        <h2 class="text-subtitle text-chart-4">
          Explore Crisp
        </h2>
      </div>
    </section>

    <section
      aria-label="Navy panel"
      class="dark space-y-6 rounded-3xl bg-background p-8 text-foreground md:p-12"
    >
      <h2 class="max-w-lg text-title">
        Ready to improve your customer experience?
      </h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button>Get started</Button>
        <Button variant="secondary">
          Request a demo
        </Button>
        <Button variant="outline">
          Compare
        </Button>
        <Button variant="ghost">
          Log in
        </Button>
        <Badge variant="outline">
          <Sparkles /> MagicReply
        </Badge>
      </div>
    </section>

    <section
      id="navigation"
      aria-label="Navigation and language selector"
      class="space-y-6"
    >
      <h2 class="text-subtitle">
        Navigation and language selector
      </h2>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent class="w-64 p-3">
              <NavigationMenuLink href="#components">
                Shared inbox
              </NavigationMenuLink>
              <NavigationMenuLink href="#components">
                Automated workflows
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#components"
              :class="navigationMenuTriggerStyle()"
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Select v-model="language">
        <SelectTrigger
          aria-label="Language"
          class="w-72 max-w-full"
        >
          <SelectValue placeholder="Choose a language">
            {{ languageLabels[language] }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            English (United States)
          </SelectItem>
          <SelectItem value="fr">
            Français
          </SelectItem>
          <SelectItem value="es">
            Español
          </SelectItem>
        </SelectContent>
      </Select>
    </section>
  </main>
</template>
