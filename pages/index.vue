<script setup lang="ts">
const items = [
  "/images/slider-banner-4c.jpg",
  "/images/slider-banner-4b.jpg",
  "/images/slider-banner-4d.jpg",
];
</script>

<template>
  <main class="pb-24">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      arrows
      indicators
    >
      <NuxtImg
        :src="item"
        class="w-full"
        draggable="false"
      />
    </UCarousel>

    <UContainer class="mt-12">
      <div class="flex items-center justify-between">
        <p class="text-2xl font-medium">
          Products
        </p>
        <NuxtLink to="category">
          View all
        </NuxtLink>
      </div>
      <div class="mt-4 mb-10 grid grid-cols-4 gap-x-4 gap-y-3">
        <ProductCard
          v-for="item in 20"
          :key="item"
        />
      </div>
      <SimpleBanner />
    </UContainer>
  </main>
</template>
