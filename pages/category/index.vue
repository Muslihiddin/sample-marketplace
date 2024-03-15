<template>
  <main class="pb-24">
    <UContainer>
      <div class="mt-5 mb- flex items-center justify-between">
        <p class="text-2xl font-medium">
          Smartphones
        </p>
        <p class="text-muted text-sm">
          417 products
        </p>
      </div>
      <div class="mt-5 flex items-start justify-between gap-x-4">
        <CategoryFilters class="w-[320px]" />
        <div class="grid grid-cols-4 gap-x-4 gap-y-3">
          <ProductCard
            v-for="item in 20"
            :key="item"
          />
        </div>
      </div>
    </UContainer>
  </main>
</template>