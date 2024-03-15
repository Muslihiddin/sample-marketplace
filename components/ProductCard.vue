<script setup lang="ts">
defineProps<{
  liked?: boolean
}>()
const items = [
  "/images/products/iphone_x_01.jpg",
  "/images/products/iphone_x_02.jpg",
  "/images/products/iphone_x_03.jpg",
  "/images/products/iphone_x_04.jpg",
];
</script>

<template>
  <UCard class="relative min-w-52 max-w-80 group">
    <UButton
      v-if="liked"
      variant="soft"
      class="absolute right-3 top-3 z-10"  
      icon="i-heroicons-heart-solid"
    />
    <UButton
      v-else
      variant="soft"
      class="absolute right-3 top-3 z-10"  
      icon="i-heroicons-heart"
    />
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      indicators
    >
      <NuxtLink to="product">
        <NuxtImg
          :src="item"
          draggable="false"
          class="group-hover:scale-105 cursor-pointer duration-200"
        />
      </NuxtLink>
    </UCarousel>
    <template #footer>
      <NuxtLink to="product">
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
      </NuxtLink>
    </template>
  </UCard>
</template>
