<script setup lang="ts">
import { Check, ChevronRight, X } from "lucide-vue-next";
import tabletMan from "@/assets/images/doubting/tablet-man-bun.png";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const providers = [
  { name: "Front", slug: "front" },
  { name: "Hiver", slug: "hiver" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Intercom", slug: "intercom" },
  { name: "Crisp", slug: "crisp" },
];
const values = [
  { name: "Value 1", supported: [false, false, false, false, true] },
  { name: "Value 2", supported: [false, false, false, true, true] },
  { name: "Value 3", supported: [false, false, true, true, true] },
  { name: "Value 4", supported: [true, true, true, true, true] },
];
</script>

<template>
  <section
    aria-labelledby="comparison-title"
    class="px-6 pb-16 lg:px-8 lg:pb-24"
  >
    <div class="relative mx-auto max-w-7xl rounded-2xl bg-linear-to-b from-muted to-primary/10 px-6 py-12 sm:rounded-3xl sm:px-8 lg:py-20">
      <div class="relative px-2 sm:px-12">
        <img
          :src="tabletMan"
          alt="A Crisp teammate sitting with a tablet."
          width="464"
          height="385"
          loading="lazy"
          class="mx-auto mb-8 h-auto w-full max-w-100 lg:absolute lg:-top-32 lg:right-0 lg:mb-0 lg:w-116 lg:max-w-none"
        >
        <div class="relative lg:max-w-2xl">
          <h2
            id="comparison-title"
            class="text-subtitle text-blue-900 sm:text-title lg:text-5xl/14"
          >
            Still doubting ?<br>Here is why you should not
          </h2>
          <p class="mt-6 text-lg/7 text-muted-foreground">
            Crisp shared inbox software fits the best with your requirements. We've made it easy for your company to compare Crisp Inbox with other shared inbox solution provider to show you why Crisp is a perfect choice.
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <Button as-child>
              <a href="https://crisp.chat/en/contact/">Ask a question</a>
            </Button>
            <Button
              as-child
              variant="secondary"
            >
              <a href="https://crisp.chat/en/demo/">Book a demo</a>
            </Button>
          </div>
        </div>
      </div>
      <Table class="mt-16 min-w-300 table-fixed text-base text-secondary-foreground">
        <TableHeader>
          <TableRow class="border-0 hover:bg-transparent">
            <TableHead class="w-1/4">
              <span class="sr-only">Feature</span>
            </TableHead>
            <TableHead
              v-for="provider in providers"
              :key="provider.slug"
              scope="col"
              class="border-b border-primary/15 px-0 py-5 text-xl font-medium text-foreground"
            >
              {{ provider.name }}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="value in values"
            :key="value.name"
            class="border-primary/15 hover:bg-transparent"
          >
            <TableCell class="p-4 sm:px-12">
              {{ value.name }}
            </TableCell>
            <TableCell
              v-for="(supported, index) in value.supported"
              :key="providers[index]!.slug"
              class="px-0 py-4"
            >
              <span :class="['inline-flex size-5 items-center justify-center rounded-full', supported ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/40 text-primary-foreground']">
                <component
                  :is="supported ? Check : X"
                  aria-hidden="true"
                  class="size-3 stroke-3"
                />
                <span class="sr-only">{{ supported ? 'Included' : 'Not included' }}</span>
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter class="border-primary/15 bg-transparent font-normal">
          <TableRow class="hover:bg-transparent">
            <TableCell class="px-4 py-5 whitespace-nowrap sm:px-12">
              See detailed comparison
            </TableCell>
            <TableCell
              v-for="provider in providers"
              :key="provider.slug"
              class="px-0 py-5"
            >
              <Button
                v-if="provider.slug !== 'crisp'"
                as-child
                variant="link"
              >
                <a
                  :href="`https://crisp.chat/en/alternatives/${provider.slug}/`"
                  :aria-label="`Compare Crisp with ${provider.name}`"
                >Learn more <ChevronRight aria-hidden="true" /></a>
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </section>
</template>
