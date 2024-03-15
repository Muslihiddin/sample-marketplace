<script setup lang="ts">
const items = [
  "/images/products/iphone_x_01.jpg",
  "/images/products/iphone_x_02.jpg",
  "/images/products/iphone_x_03.jpg",
  "/images/products/iphone_x_04.jpg",
];
</script>

<template>
  <NuxtLink to="product">
    <UCard class="min-w-52 max-w-80 group">
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        indicators
      >
        <NuxtImg
          :src="item"
          draggable="false"
          class="group-hover:scale-105 cursor-pointer duration-200"
        />
      </UCarousel>
      <template #footer>
        <div class="flex flex-col gap-6">
          <p class="line-clamp-2 text-sm">
            Apple iPhone X 64GB Silver Fully Unlocked
          </p>
          <div class="flex justify-between items-end">
            <div>
              <p class="text-muted text-sm line-through">
                250 000 so'm
              </p>
              <p class="font-medium">
                129 000 so'm
              </p>
            </div>
            <div
              class="border flex items-center justify-center p-3 rounded cursor-pointer"
            >
              <UIcon
                name="i-heroicons-plus"
                class="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>
